<template>
    <header>
      <div class="flex flex-row md:flex-col justify-between items-center w-screen md:w-auto md:h-screen pt-10 pb-0 px-10 py-10 md:py-20 md:w-1/10">
        <NuxtLink to="/">
          <img src="@/assets/images/FrederikKohlerLogo.svg" class="h-8 w-8" alt='Pro Prothese' />
        </NuxtLink>
 
        <nav>
          <a @click="activateUl" class="cursor-pointer no-underline">
            <svg xmlns="http://www.w3.org/2000/svg"   viewBox="0 0 24 24" fill="none" stroke-width="1.5" stroke="currentColor" class="w-10 h-10">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
            </svg>
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
export default {
  data() {
    return {
      imageHeight: 200 
    };
  },
  methods: {
    activateUl() {
      this.$emit('activate-ul');
    }
  },
};
</script>