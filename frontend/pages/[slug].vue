<template>
    <div class="page absolute ease-in-out duration-300 shadow-lg shadow-transparent">
        <div  v-if="site !== null" class="grid grid-cols-1 gap-4 min-h-screen" :class="site.secondary === null ? 'lg:grid-cols-1' : 'lg:grid-cols-2' ">
            <div class="flex flex-col lg:min-h-screen pt-10 pb-7" > <!--  pb-7 -->
                <div v-if="site.primary !== null">
                    <div v-for="primarySection in site.primary" :key="primarySection.id" class="flex flex-col pt-10 "> <!--  pb-7 -->
                        <SectionHero v-if="primarySection.component == 'hero'" :hero="primarySection" :links={} :fullSize="site.secondary === null ? true : false "/>
                    </div>
                </div>

                <PageContactForm v-if="site.slug === 'kontakt'" class="mx-0 lg:mx-auto" />
            </div>
            
            <div v-if="site.secondary !== null" class="flex flex-col flex-1 px-10 md:px-20 py-20 animated fk-bg-dark gap-10">
                 <div v-for="secondarySection in site.secondary" :key="secondarySection.id" class="max-w-2xl mx-auto">
                    <Content :content="secondarySection.content" />
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

    const { findOne } = useStrapi();
    const { slug } = useRoute().params;
    
    const { data: site } = await useAsyncData('page', 
        () => 
            findOne('pages', { 
                filters: {
                    slug: { $eq: slug === "" ? "home" : slug }, // slug === undefined ? "home" : slug
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