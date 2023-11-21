<template>
  <div class="roundedImage">
    <img class="rounded-xl" :src="imageURL" height="auto" :alt="imageAlt" >
  </div>
</template>

<style lang="scss" scoped>
  .roundedImage {
    transition: all 0.25s;
    border-radius: 20px;
    overflow: hidden;
  }

  img {
    transition: transform .5s ease;
  }

  img:hover {
    transform: scale(1.05);
  }
</style>

<script setup lang="ts">
  const StrapiUrl = useStrapiUrl()
  const StrapiMediaUrl = useStrapiMedia()

  const props = defineProps({
      image: { type: Object, default: {} }
  })

  const imageURL = computed(() => {
      return StrapiMediaUrl + props.image.data.attributes.formats.medium.url
  })

   const imageAlt = computed(() => {
      return props.image.data.attributes.caption
  })
</script>
