<template>
    <div>
        <NuxtLayout name="single-row">
            <template #primary>
                <component :is="loadComponent('ContactForm')"  fullSize=""/>
            </template>
        </NuxtLayout>
    </div>
</template>

<script setup lang="ts">

    const { slug } = useRoute().params;

    /* load data */
    const loadComponent = (componentName: string) => defineAsyncComponent(() => import(`@/components/page/${componentName}.vue`));

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
</script>