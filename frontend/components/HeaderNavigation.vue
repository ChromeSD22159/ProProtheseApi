<template>
  <header class="transition ease-in-out" :class="{ 'lg:fixed': !isMobileViewport, 'lg:top-0': !isMobileViewport, 'opacity-20': modelValue, 'opacity-1': !modelValue }">
    <div class="flex flex-row md:flex-col justify-between items-center w-screen md:w-auto md:h-screen pt-10 pb-0 px-10 py-10 md:py-20 md:w-1/10">
      <NuxtLink to="/">
        <img src="/images/FrederikKohlerLogo.svg" class="h-8 w-8 transition ease-in-out" alt="Frederik Kohler Monogramm" :class="{ 'scale-150': modelValue, 'scale-100': !modelValue }" />
      </NuxtLink>

      <nav>
        <p @click="$emit('activateUl')" class="cursor-pointer no-underline" rel="nofollow">
          <transition  name="fade">
            <IconMenu class="transition fill-gray-500 hover:fill-gray-400" />
          </transition>
        </p>
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
  import { ref, onMounted, onBeforeUnmount } from 'vue';

  defineProps({
    modelValue: { type: Object, default: () => {} }
  }) 

  const viewportWidth = ref(window.innerWidth || document.documentElement.clientWidth);
  const isMobileViewport = ref(viewportWidth.value <= 1024);

  const updateViewportWidth = () => {
    viewportWidth.value = window.innerWidth || document.documentElement.clientWidth;
    isMobileViewport.value = viewportWidth.value <= 1024;
  };

  const activateUl = () => {
    // $emit ist bereits im Setup verfügbar
    $emit('activate-ul');
  };

  onMounted(() => {
    window.addEventListener('resize', updateViewportWidth);
  });

  onBeforeUnmount(() => {
    window.removeEventListener('resize', updateViewportWidth);
  });
</script>