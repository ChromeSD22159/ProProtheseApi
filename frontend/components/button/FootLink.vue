<template>
      <NuxtLink :to="link.href" :target="link.target" class="h-10 text-gray-500 transition hover:opacity-75">{{link.text}}</NuxtLink>
</template>

<script>
export default {
  props: {
    link: Object,
  }
}
</script>