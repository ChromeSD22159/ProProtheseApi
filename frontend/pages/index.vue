<template>
    <div class="page absolute ease-in-out duration-300 shadow-lg shadow-transparent">
        <div class="grid grid-cols-1 gap-4 min-h-screen" :class="site.secondary === null ? 'lg:grid-cols-1' : 'lg:grid-cols-2' ">
            <div v-for="primaryData in site.primary" :key="primaryData.id" class="flex flex-col md:max-h-screen pt-10 md:pt-20 pb-7" :class="{ 'lg:sticky': !isMobileViewport, 'lg:top-0': !isMobileViewport }"> 
                <component :is="loadComponent(primaryData.component)" :content="primaryData" :socialMedias="socialMedias" fullSize=""/>
            </div>

            <div v-if="site.secondary !== null" class="flex flex-col flex-1 md:px-20 pt-20 animated fk-bg-dark gap-10"> 
                <div v-for="secondaryData in site.secondary" :key="secondaryData.id" > 
                    <component :is="loadComponent(secondaryData.component)" :content="secondaryData" :socialMedias="socialMedias" fullSize=""/>
                </div>

                <PageFoot />
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>

    .overlay::before {
        background-color: #0c0e11;
        content: ""; // ::before and ::after both require content
        position: absolute;
        top: 0;
        right: 0;
        width: 50%;
        height: 100%;
        z-index: 0;
    }
</style>

<script setup lang="ts">
    import { defineProps, defineAsyncComponent } from 'vue';
    
    const StrapiUrl = useStrapiUrl()

    const { data: socialMedias } = await useAsyncData('social-medias', () => $fetch(StrapiUrl + '/social-medias?populate[socialMedia][populate]=*'), {
        transform: (data: any) => {

            if (data.data) {
                const socialMedia = data.data.map(  (socialMedia: any) => socialMedia.attributes.socialMedia.map((sm: any) => sm.links ).flat() ).flat();

                return socialMedia
            } else {
                return null
            }

        }
    })

    const { findOne } = useStrapi();
    const { slug } = useRoute().params;

    const { data: site } = await useAsyncData('page', 
        () => findOne('pages', { 
                filters: {
                    slug: { $eq: "home" },
                },
        }), {
            transform: (data: any) => {

                if (data.data && data.data.length > 0) {
                    const primary = data.data.map(  (primary: any) => primary.attributes.primaryChild.map((item: any) => item ).flat() ).flat();
                    const secondary = data.data.map(  (primary: any) => primary.attributes.secondaryChild.map((item: any) => item ).flat() ).flat();
                    return { primary: primary.length > 0 ? primary : null, secondary: secondary.length > 0 ? secondary : null }
                } else {
                    return null;
                }
            }
        }
    )


    /* load data */
    const loadComponent = (componentName: string) => defineAsyncComponent(() => import(`@/components/section/${componentName}.vue`));

    const loadSeoMeta = useSeoMeta({
        title: 'Freiberuflicher Web Designer & Software Entwickler',
        ogTitle: 'Freiberuflicher Web Designer & Software Entwickler',
        description: 'Suchen Sie Entwickler, UX/IX-Designer oder Hilfe bei Websites? Brauchen Sie Unterstützung bei Software Projekten oder bei Ihrer Website?',
        ogDescription: 'Suchen Sie Entwickler, UX/IX-Designer oder Hilfe bei Websites? Brauchen Sie Unterstützung bei Software Projekten oder bei Ihrer Website?',
        ogImage: 'https://frederikkohler.de/image.png',
        author: 'Frederik Kohler, Portfolio'
    })

    const loadHead = useHead({
        htmlAttrs: {
            lang: 'de'
        }
    })
    
    /* Sticky >= large */
    const viewportWidth = ref(window.innerWidth || document.documentElement.clientWidth);
    const isMobileViewport = ref(viewportWidth.value <= 1024);
    
    const updateViewportWidth = () => {
        viewportWidth.value = window.innerWidth || document.documentElement.clientWidth;
        isMobileViewport.value = viewportWidth.value <= 1024;
    };

    onMounted(() => {
        window.addEventListener('resize', updateViewportWidth);
    });

    onBeforeUnmount(() => {
        window.removeEventListener('resize', updateViewportWidth);
    });
    /* Sticky >= large */
</script>