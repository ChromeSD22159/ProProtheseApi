<template>
    <div class="flex flex-col px-10 md:px-20 gap-7 mx-auto" :class="fullSize ? 'max-w-5xl' : 'max-w-2xl flex-1'">

        <PageHeadline :headline="hero.titel" :image="hero.image.data" />

        <div>
            <Content :content="hero.content" />
        </div>

        <SocialMediaButtons v-if="links" :links=links />
        
    </div>
</template>

<script setup lang="ts">
    defineProps<{
        hero: Object,
        links: Object,
        fullSize: Boolean
    }>()
</script>