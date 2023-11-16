<template>
     <div class="button flex gap-3 align-middle content-center">

          <ArrowIcon class="w-6 h-6 " :classArray="['fk-fill-accent']" />

          <NuxtLink :to="url" :target="target">{{title}}</NuxtLink>

          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 arrowAnimated fk-text-accent hover:text-highlight">
               <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>

     </div>
</template>

<style lang="scss" scoped>
     .button > svg {
          transition: ease-in-out 0.3s;
     }

     .button:hover > svg:first-child {
          fill: $highlight;
     }

     .button > .arrowAnimated {
          stroke: none;
          transition: ease-in-out 0.3s;
          opacity: 0;
          transform: translateX(-40px) scale(0.3);
     }

     .button:hover > .arrowAnimated {
          stroke: $highlight;
          opacity: 1;
          transform: translateX(-10px)scale(0.8);
     }

     .button > a {
          transition: ease-in-out 0.3s;
          color: $highlight;
     }

     .button:hover > a {
          color: white;
     }
</style>

<script setup lang="ts">
import ArrowIcon from '@/components/icons/arrow.vue'; // Importiere die Komponente

defineProps<{
     title: string
     url: string | null
     target?: string
}>()
</script>