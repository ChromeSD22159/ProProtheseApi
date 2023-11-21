<template>
 <div layout="single-row" class="absolute ease-in-out duration-300 shadow-lg shadow-transparent min-w-full pt-10 md:pt-20 flex flex-row justify-center fk-bg-prime"> <!-- single row layout -->
    <div class="grid grid-cols-1 gap-4 min-h-screen px-10">
        <slot name="primary" />

        <PageFoot />
    </div>
</div>
</template>

<script setup lang="ts">

</script>