<template>
    <section v-html="$markdown.render(content)" class="flex flex-col gap-3 content" />
</template>

<style lang="scss" scoped>
    .content > h6 {
       padding: 20px 0 0 0;
    }
</style>

<script setup lang="ts">
defineProps<{
    content: String
}>();
</script>
