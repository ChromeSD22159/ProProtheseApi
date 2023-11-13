<template>
  <div class="roundedImage">
    <img class="rounded-xl" :src="imageURL" alt="This zooms-in really well and smooth" >
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
      imageName: String
  })

  const imageURL = computed(() => {
    return StrapiMediaUrl + props.imageName
  })
</script>
