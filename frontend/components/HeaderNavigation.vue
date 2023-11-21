<template>
  <header class="transition ease-in-out" :class="{ 'lg:fixed': !isMobileViewport, 'lg:top-0': !isMobileViewport, 'opacity-20': modelValue, 'opacity-1': !modelValue }">
    <div class="flex flex-row md:flex-col justify-between items-center w-screen md:w-auto md:h-screen pt-10 pb-0 px-10 py-10 md:py-20 md:w-1/10">
      <NuxtLink to="/">
        <img src="/images/FrederikKohlerLogo.svg" 
          class="h-8 w-8 transition ease-in-out" 
          alt="Frederik Kohler Monogramm" 
          :class="{ 'scale-150': modelValue, 'scale-100': !modelValue }" 
        />
      </NuxtLink>

      <nav class="flex justify-center items-center">
        <transition name="fade">
          <IconMenu @click="$emit('activateUl')" class="transition fill-gray-500 hover:fill-gray-400 cursor-pointer no-underline" />
        </transition>
      </nav>

      <div class="hidden md:block"></div>
    </div> 
  </header>
</template>

<style lang="scss" scoped>

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

header {
  z-index: 100;
  nav {
    p {
      color: $white;
      cursor: pointer;
    } 
  }
}
</style>

<script setup>
  import { ref, onMounted, onBeforeUnmount, defineProps } from 'vue';

  const { modelValue } = defineProps(['modelValue']);

  const viewportWidth = ref(0);
  const isMobileViewport = ref(false);

  const updateViewportWidth = () => {
    viewportWidth.value = window.innerWidth || document.documentElement.clientWidth;
    isMobileViewport.value = viewportWidth.value <= 1024;
  };

  onMounted(() => {
    updateViewportWidth();
    window.addEventListener('resize', updateViewportWidth);
  });

  onBeforeUnmount(() => {
    window.removeEventListener('resize', updateViewportWidth);
  });

  const activateUl = () => {
    // $emit ist bereits im Setup verfügbar
    $emit('activate-ul');
  };
</script>