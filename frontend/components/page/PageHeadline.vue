<template>
    <div class="flex items-start items-center sm:items-center gap-5 flex-row sm:flex-row ">
        <div v-if="image && image.attributes" class="h-24 w-24 rounded-lg fk-bg-accent portrait" :style="{ backgroundImage: `url(' ${StrapiMediaUrl}${ image.attributes.formats.thumbnail.url } ')` }">

        </div>

        <div>
            <h1 class="text-xl md:text-xl xl:text-3xl line-break fk-colored-text antialiased tracking-wide font-sans"> {{ headline }} </h1>
            <p v-if="subline" class="text-xs font-bold">{{ subline }}</p>
        </div>
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

    const { headline, subline, image } = defineProps({
        headline: { type: String, default: () => '' },
        subline: { type: String, default: () => '' },
        image: { type: Object, default: () => ({}) },
    });
</script>
