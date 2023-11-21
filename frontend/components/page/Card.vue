<template>
    <div class="flex flex-col rounded-xl p-10 gap-2 transition w-full" :class="{ 'active': isActive }">
        <div class="flex flex-row gap-5 items-center" >
            <img 
                v-if="isNotNullOrUndefined(content.icon.data)" 
                :src="buildImageUrl(content.icon.data.attributes.url)"
                :alt="content.image.data.attributes.caption" 
                class="h-8 w-8 ease-in-out" />
            <h2 class="text-xl md:text-xl xl:text-2xl text-white font-semibold line-break fk-colored-text antialiased tracking-wide font-sans">{{ content.titel }}</h2>
        </div>
        <p class="subpixel-antialiased">{{ content.text }}</p>

        <img v-if="isNotNullOrUndefined(content.icon.data) && isMobil" 
            :src="buildImageUrl(content.image.data.attributes.url)" 
            :alt="content.image.data.attributes.caption"
            class="" 
        />
    </div>
</template>

<style scoped>
.transition {
    transition: all ease-in-out 0.3s;
    background: rgba(255,255,255,0.01);
}

.active {
    background: rgba(255,255,255,0.08);
}

.image {
    max-height: 480px !important;
}
</style>

<script setup lang="ts">
    const StrapiUrl = useStrapiMedia()

    const buildImageUrl = (url) => `${StrapiUrl}${url}`;

    const { content } = defineProps({
        content: {
            type: Object, default: () => ({ image: "images/FrederikKohlerLogo.svg", titel: "headline", text: "lorem ipsum" }),
        },
        isActive: {
            type: Boolean, default: () => (false),
        },
        isMobil: {
            type: Boolean, default: () => (false),
        },
    });
</script>