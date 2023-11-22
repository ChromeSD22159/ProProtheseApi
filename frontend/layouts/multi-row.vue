<template>
 <div layout="multi-row" class="absolute ease-in-out duration-300 shadow-lg shadow-transparent min-w-full fk-bg-prime"> <!-- multi row layout -->
    <div class="grid grid-cols-1 gap-4 min-h-screen lg:grid-cols-2">
      <div class="flex flex-col pt-10 md:pt-20 pb-7" 
        :class="{ 
          'lg:sticky': !isMobileViewport && props.primarySticky, 
          'lg:top-0': !isMobileViewport && props.primarySticky,
          'md:min-h-screen': !props.primarySticky,
          'md:max-h-screen': props.primarySticky,
         }
      ">
        <div class="flex flex-col px-10 gap-10 mx-auto w-full max-w-2xl flex-1 md:pb-7"> <!-- md:pl-20 md:pr-0 lg:pl-0 -->
          <slot name="primary" />
        </div>
      </div>


      <div 
      class="flex flex-col pt-10 md:pt-20 pb-7 fk-bg-dark secondary" 
      :class="{ 
        'lg:sticky': !isMobileViewport && props.secondarySticky,
        'lg:top-0': !isMobileViewport && props.secondarySticky,
        'md:min-h-screen': !props.secondarySticky,
        'md:max-h-screen': props.secondarySticky
      }">
        <div class="flex flex-col px-10 lg:px-20 gap-10 mx-auto w-full max-w-2xl flex-1">
          <slot name="secondary" />
        </div>
      </div>
    </div>
</div>
</template>

<script setup lang="ts">

  const props = defineProps({
    primarySticky: { type: Boolean, default: false },
    secondarySticky: { type: Boolean, default: false }
  })

    const viewportWidth = ref(window.innerWidth || document.documentElement.clientWidth);
    const isMobileViewport = ref(viewportWidth.value <= 1024);
    
    const updateViewportWidth = () => {
        viewportWidth.value = window.innerWidth || document.documentElement.clientWidth;
        isMobileViewport.value = viewportWidth.value <= 1024;
    };

    onMounted(() => {
        window.addEventListener('resize', updateViewportWidth);
    });

    onBeforeUnmount(() => {
        window.removeEventListener('resize', updateViewportWidth);
    });
</script>