<template>
    <div class="flex items-start sm:items-center gap-5 flex-col sm:flex-row ">
       <div v-if="image && image.attributes" class="h-24 w-24 rounded-lg fk-bg-accent portrait" :style="{ backgroundImage: `url(' ${StrapiMediaUrl}${ image.attributes.formats.thumbnail.url } ')` }"></div>

        <h1 class="text-xl md:text-xl xl:text-3xl line-break fk-colored-text antialiased tracking-wide font-sans"> {{ headline }} </h1>
    </div>
</template>

<style scoped>
     .portrait {
        background-size: cover;
        background-position: center center; 
    }
</style>

<script setup lang="ts">
    const StrapiMediaUrl = useStrapiMedia()
    defineProps<{
        headline: String,
        image: { type: Object, default: {} }
    }>()
</script>
