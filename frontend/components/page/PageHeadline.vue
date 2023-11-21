<template>
    <div class="flex items-start items-center sm:items-center gap-5 flex-row sm:flex-row parent-container">
        <img 
            v-if="image && image.attributes" 
            :src="`${StrapiMediaUrl}${ image.attributes.formats.thumbnail.url }`"
            :alt="image.attributes.caption"
            class="w-24 h-24 rounded-xl"
        />

        <div>
            <h1 class="text-xl md:text-xl xl:text-3xl line-break fk-colored-text antialiased tracking-wide font-sans whitespace-break-spaces" id="my-heading"> {{ headline }} </h1>
            <p v-if="subline" class="text-xs font-bold">{{ subline }}</p>
        </div>
    </div>
</template>

<style scoped>
     .portrait {
        width: 6rem !important;
        height: 6rem !important;
        background-size: cover;
        background-position: center center; 
    }
</style>

<script setup lang="ts">
import { onBeforeMount } from "vue";

    const StrapiMediaUrl = useStrapiMedia()
    
    const imageUrl = ref('');

    const { headline, subline, image } = defineProps({
        headline: { type: String, default: () => '' },
        subline: { type: String, default: () => '' },
        image: { type: Object, default: () => ({}) },
    });

    onMounted(() => {
        const parentContainer = document.querySelector('.parent-container');
        const myHeading = document.querySelector('#my-heading')
       
        window.addEventListener('resize', setFontSizeAndLineHeight(parentContainer, myHeading));

        window.addEventListener("resize", () => {
            setFontSizeAndLineHeight(parentContainer, myHeading)
        })
    });

    function setFontSizeAndLineHeight(parentContainer: HTMLElement, myHeading: HTMLElement) {
        if (parentContainer && myHeading) {
            const parentWidth = parentContainer.offsetWidth;

            // Umrechnungsfaktor: 1rem = 16px (angenommen)
            const remFactor = 16;

            const fontSizeRem = parentWidth / 25 / remFactor;
            const lineHeightRem = parentWidth / 15 / remFactor;

            myHeading.style.fontSize = fontSizeRem + "rem";
            myHeading.style.lineHeight = lineHeightRem + "rem";
        }
    }
</script>
