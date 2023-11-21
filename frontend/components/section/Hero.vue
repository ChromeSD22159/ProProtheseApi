<template>
        <div class="flex flex-col gap-10 mx-auto max-w-2xl flex-1">

        <PageHeadline :headline="content.titel" :subline="content.subline" :image="content.image.data" />

        <div> 
            <Content :content="content.content" />
        </div>

        <SocialMediaButtons v-if="isObjectNotEmpty(socialMedias)" :links="socialMedias" />
    </div>
</template>

<script setup lang="ts">
    const { content, socialMedias, fullSize } = defineProps({
        content: { type: Object, default: () => {} },
        socialMedias: { type: Object, default: () => {} },
        fullSize: { type: Boolean, default: () => false },
    });
</script>