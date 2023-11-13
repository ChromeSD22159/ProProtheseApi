<template>
    <header>
      <div class="flex flex-row md:flex-col justify-between items-center w-screen md:w-auto md:h-screen pt-10 pb-0 px-10 py-10 md:py-20 md:w-1/10">
        <NuxtLink :to="url">
          <img src="@/assets/images/FrederikKohlerLogo.svg" class="h-8 w-8" alt='Pro Prothese' />
        </NuxtLink>
 
        <nav>
          <a @click="activateUl" class="cursor-pointer no-underline">
            <IconMenu class="transition fill-gray-500 hover:fill-gray-400" />
          </a>
        </nav>

        <div class="hidden md:block"></div>
      </div> 
    </header>
</template>

<style lang="scss" scoped>

header {

    nav {
      a {
        color: $white;
      } 
    }
}
</style>

<script>

import { ref, onMounted } from 'vue';

export default {
  
  data() {
    return {
      imageHeight: 200,
      url: ""
    };
  },
  methods: {
    activateUl() {
      this.$emit('activate-ul');
    }
  },
  created() {
      const originalUrl = useStrapiMedia()
      
      const newPort = 3000;

      // Split the URL by ":" to separate the protocol and the host/port part
      const parts = originalUrl.split(":");
      if (parts.length >= 3) {
        // Replace the old port number with the new one
        parts[2] = newPort.toString();

        // Reconstruct the URL with the new port
        const newUrl = parts.join(":");
        this.url = newUrl
      } 
  },
};
</script>