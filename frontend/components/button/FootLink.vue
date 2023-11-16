<template>
     <a  :href="link.href" :target="link.target" class="text-gray-500 transition hover:opacity-75">{{ link.text }}</a>
</template>

<script>
export default {
  props: {
    link: Object,
  }
}
</script>