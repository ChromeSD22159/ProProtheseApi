<template>
   <div>
    
        <NuxtLayout 
            v-if="site.primary !== null && site.secondary !== null" 
            name="multi-row" 
            :primarySticky="false" 
            :secondarySticky="false"
        >
            <template v-slot:primary> <!-- primary slot  -->
                <div v-for="primaryData in site.primary" :key="primaryData.id" :component="primaryData.component">
                    <component :is="loadComponent(primaryData.component)" :content="primaryData" :socialMedias="socialMedias" fullSize=""/>
                </div>
            </template>
            
            <template v-slot:secondary> <!--  secondary slot  -->
                <div v-if="site.secondary !== null"> 
                    <div v-for="secondaryData in site.secondary" :key="secondaryData.id" > 
                        <component :is="loadComponent(secondaryData.component)" :content="secondaryData" :socialMedias="socialMedias" fullSize=""/>
                    </div>

                    <PageFoot padding="false"/>
                </div>
            </template>
        </NuxtLayout>

        <NuxtLayout v-else-if="site.primary !== null && site.secondary === null" name="single-row">
            {{ console.log("Single Row Layout") }}
            
            <template #primary>
                <div v-for="primaryData in site.primary" :key="primaryData.id" :component="primaryData.component">
                    <component :is="loadComponent(primaryData.component)" :content="primaryData" :socialMedias="{}" fullSize=""/>
                </div>
            </template>
        </NuxtLayout>
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

    const { findOne } = useStrapi();
    const { slug } = useRoute().params;
    const router = useRouter()
    const { data: site } = await useAsyncData('page', 
        () => 
            findOne('pages', { 
                filters: {
                    slug: { $eq: slug === "" ? "home" : slug }, 
                }
            }), {
            transform: (data: any) => {
                if (data.data && data.data.length > 0) {
                    const primary = data.data.map(  (primary: any) => primary.attributes.primaryChild.map((item: any) => item ).flat() ).flat();
                    const secondary = data.data.map(  (primary: any) => primary.attributes.secondaryChild.map((item: any) => item ).flat() ).flat();
                    return { primary: primary.length > 0 ? primary : null, secondary: secondary.length > 0 ? secondary : null, slug: data.data[0].attributes.slug}
                } else {
                    return null
                }
            }
        }
    )

    if (site.value === null) {
       router.push({ path: "/error/404" })
    }

    const loadComponent = (componentName: string) => defineAsyncComponent(() => import(`@/components/section/${componentName}.vue`));

    useSeoMeta({
        title: 'Freiberuflicher Web Designer & Software Entwickler',
        ogTitle: 'Freiberuflicher Web Designer & Software Entwickler',
        description: 'Suchen Sie Entwickler, UX/IX-Designer oder Hilfe bei Websites? Brauchen Sie Unterstützung bei Software Projekten oder bei Ihrer Website?',
        ogDescription: 'Suchen Sie Entwickler, UX/IX-Designer oder Hilfe bei Websites? Brauchen Sie Unterstützung bei Software Projekten oder bei Ihrer Website?',
        ogImage: 'https://frederikkohler.de/image.png',
        author: 'Frederik Kohler, Portfolio'
    })

     useHead({
        htmlAttrs: {
            lang: 'de'
        }
    })
</script>