<template>
    <div class="page absolute ease-in-out duration-300 shadow-lg shadow-transparent">
        <div class="grid grid-cols-1 gap-4 min-h-screen" :class="site.secondary === null ? 'lg:grid-cols-1' : 'lg:grid-cols-2' ">
            <div v-for="primary in site.primary" :key="primary.id" class="flex flex-col md:max-h-screen pt-10 md:pt-20 pb-7"> <!--  pb-7 -->
                 <SectionHero v-if="primary.component == 'hero'" :hero="primary" :links="socialMedias" :fullSize="site.secondary === null ? true : false "/>
            </div>

            <div v-if="site.secondary !== null" class="flex flex-col flex-1 px-10 md:px-20 py-20 animated fk-bg-dark gap-10">
                <div v-if="site.secondary !== null">
                    <div v-for="secondarySection in site.secondary" :key="secondarySection.id" class="max-w-2xl mx-auto">
                        <SectionAppPreview v-if="secondarySection.apps.length > 0" :apps=secondarySection.apps /> 
                    </div>
                </div>
            </div>
        </div>

        <PageFoot />
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

    
    /* NEUER API REQUEST */
    const { findOne } = useStrapi();
    const { slug } = useRoute().params;
    const { data: site } = await useAsyncData('page', 
        () => 
            findOne('pages', { 
                filters: {
                    slug: { $eq: "home" }, // slug === undefined ? "home" : slug
                }
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

    if (site.value === null) {
        // throw createError({ statusCode: 404, statusMessage: 'Page Not Found' })
    }

    useSeoMeta({
        title: 'Freiberuflicher Web Designer & Software Entwickler',
        ogTitle: 'Freiberuflicher Web Designer & Software Entwickler',
        description: 'Suchen Sie Entwickler, UX/IX-Designer oder Hilfe bei Websites? Brauchen Sie Unterstützung bei Software Projekten oder bei Ihrer Website?',
        ogDescription: 'Suchen Sie Entwickler, UX/IX-Designer oder Hilfe bei Websites? Brauchen Sie Unterstützung bei Software Projekten oder bei Ihrer Website?',
        ogImage: 'https://frederikkohler.de/image.png',
        author: 'Frederik Kohler, Portfolio'
    })
</script>