<template>
    <div class="page absolute ease-in-out duration-300 shadow-lg shadow-transparent">
        <div class="flex flex-col lg:flex-row min-h-screen">
            <div class="flex flex-col md:max-h-screen pt-10 md:pt-0 pb-7">
                 <div class="flex flex-col flex-1 gap-7">

                    <PageHeadline headline="Pro Prothese & Country Tracking asd" :image="{}" />
                
                </div>
            </div>
        </div>

        <PageFoot />
    </div>
</template>


<style lang="scss" scoped>
    .page {
        padding: 2rem;
    }
</style>


<script setup>
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