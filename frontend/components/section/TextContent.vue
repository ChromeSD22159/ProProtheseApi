<template>
    <div>
        <div class="flex flex-col gap-10 mx-auto max-w-2xl flex-1">
            <!-- <div class="flex flex-col px-10 lg:px-20 gap-10 mx-auto" :class="isObjectNotEmpty(fullSize) ? 'max-w-5xl' : 'max-w-2xl flex-1'"> -->
            <Content :content="content.content" />
        </div>
    </div>
    
</template>

<script setup lang="ts">
    const { content, fullSize } = defineProps({
        content: { type: Object, default: () => {} },
        fullSize: { type: Boolean, default: () => false },
    });
</script>