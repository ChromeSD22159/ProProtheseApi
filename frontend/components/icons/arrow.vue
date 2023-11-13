<template>
 <svg viewBox="0 0 24 24" :class="customClasses" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;">
    <g transform="matrix(0.48,0,0,0.48,-36,-36)">
        <path d="M125,83.091C125,78.626 121.374,75 116.909,75L83.091,75C78.626,75 75,78.626 75,83.091L75,116.909C75,121.374 78.626,125 83.091,125L116.909,125C121.374,125 125,121.374 125,116.909L125,83.091ZM103.741,92.472L88.284,107.93C87.239,108.975 87.239,110.671 88.284,111.716C89.329,112.761 91.025,112.761 92.07,111.716L107.528,96.259L107.528,108.205C107.528,109.577 108.642,110.691 110.014,110.691C111.386,110.691 112.5,109.577 112.5,108.205L112.5,89.986C112.5,89.241 112.172,88.573 111.652,88.117L111.647,88.112C111.244,87.761 110.726,87.537 110.158,87.504C110.11,87.501 110.062,87.5 110.014,87.5L91.795,87.5C90.423,87.5 89.309,88.614 89.309,89.986C89.309,91.358 90.423,92.472 91.795,92.472L103.741,92.472Z" />
    </g>
</svg>
</template>

<script setup lang="ts">
import { ref, defineProps } from 'vue';

const { classArray } = defineProps(['classArray']);

const customClasses = classArray; // Verwende das übergebene Klassenarray
</script>