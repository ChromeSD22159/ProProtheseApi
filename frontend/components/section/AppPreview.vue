<template>
    <div class="flex flex-col gap-16">
        <div v-for="app in apps" :key="app.id" class="flex flex-col gap-5 max-w-xl mx-auto">
            <div>
                <h2 class="text-xl md:text-xl xl:text-3xl line-break fk-colored-text antialiased tracking-wide font-sans">{{ app.name }}</h2>
                <h3 class="text-sm antialiased tracking-wide font-sans text-accent">{{ app.subline }}</h3>
            </div>

            <ImageWithHover :imageName="app.image.data.attributes.formats.large.url" alt="test" />

            <p class="antialiased">{{ app.description }}</p>

            <ul class="flex flex-row gap-5">
                <li v-for="link in app.links" :key="link.id">
                    <ButtonCollection :link=link />
                </li>
            </ul>
    </div>
    </div>
</template>

<script setup lang="ts">
    defineProps<{
        apps: Object
    }>()
</script>