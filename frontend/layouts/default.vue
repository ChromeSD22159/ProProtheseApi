<template>
<div :class="`layout ${layout} flex md:flex-row flex-col w-screen relative`">
    <AnimatedBackground />
    <HeaderNavigation v-model="showMenu"  @activate-ul="activateUl"  />
    
    <div class="w-full min-h-full relative md:ml-14">
        <ul :class="{ active: showMenu }" class="navigation min-w-full min-h-full">
            <li @click="showMenu === true ? activateUl() : undefined" class="absolute ease-in-out duration-300 m-0 p-0 min-h-screen w-full shadow-transparent shadow-none">
              <NuxtPage />
            </li>
            <li v-for="link in mainNav.slice(0, 5)" :key="link.id" class="child absolute ease-in-out duration-300 rounded-xl m-0 p-6 min-h-screen w-full shadow-transparent	shadow-none">
                <div class="background bg-opacity-10 absolute top-0 left-0 min-w-full min-h-full rounded-2xl transition-all duration-500 -p5">
                    <NuxtLink :to="link.href" @click="activateUl" class="relative top-5 left-5 text-white"> {{ link.text }} </NuxtLink>
                </div>
            </li>
        </ul>
    </div>
</div>
</template>

<style lang="scss" scoped>

ul.navigation.active {
    .background {
      background-color: rgb(255 255 255 / 0.2);
      backdrop-filter: blur(10px);
    }

    background:hover {
      background-color: rgb(255 255 255 / 0.2);
      backdrop-filter: blur(10px);
    }

   
}

ul.navigation {
  li {
    -ms-transform: TranslateY(0%) TranslateX(0%) scale(1);
    -webkit-transform: TranslateY(0%) TranslateX(0%) scale(1);
    -moz-transform: TranslateY(0%) TranslateX(0%) scale(1);
    -o-transform: TranslateY(0%) TranslateX(0%) scale(1);
    transform: TranslateY(0%) TranslateX(0%) scale(1);
    box-shadow: 0px 0px 5px 5px rgba(0, 0, 0, 0.0);
  }

  li.background {
    background-color: rgb(255 255 255 / 0);
    backdrop-filter: blur(10px);
  }

  li:nth-child(1) {
    z-index: 30;
  }

  li:nth-child(2) {
    z-index: 25;
  }

  li:nth-child(3) {
    z-index: 20;
  }

  li:nth-child(4) {
    z-index: 15;
  }

  li:nth-child(5) {
    z-index: 10;
  }

   li:nth-child(6) {
    z-index: 5;
  }

   li:nth-child(7) {
    z-index: 0;
  }

  .child {
    opacity: 0;
  }

  &.active {
    .child {
      opacity: 1;
    }

    li:nth-child(1) {
      -ms-transform: TranslateY(10.5rem) scale(.90);
      -webkit-transform: TranslateY(10.5rem) scale(.90);
      -moz-transform: TranslateY(10.5rem) scale(.90);
      -o-transform: TranslateY(10.5rem) scale(.90);
      transform: TranslateY(10.5rem) scale(.90); // translate3d(0,45%,0)
      box-shadow: 0px 0px 5px 5px rgba(0, 0, 0, 0.35);
      border-radius: 0.75rem;
      overflow: hidden;
    }

    li:nth-child(2) {
      -ms-transform: TranslateY(7.0rem) scale(.87);
      -webkit-transform: TranslateY(7.0rem) scale(.87);
      -moz-transform: TranslateY(7.0rem) scale(.87);
      -o-transform: TranslateY(7.0rem) scale(.87);
      transform: TranslateY(7.0rem) scale(.87); // translate3d(0,45%,0)
      box-shadow: 0px 0px 5px 5px rgba(0, 0, 0, 0.35);
    }

    li:nth-child(3) {
      -ms-transform: TranslateY(3.5rem) scale(.84);
      -webkit-transform: TranslateY(3.5rem) scale(.84);
      -moz-transform: TranslateY(3.5rem) scale(.84);
      -o-transform: TranslateY(3.5rem) scale(.84);
      transform: TranslateY(3.5rem) scale(.84); // translate3d(0,45%,0)
      box-shadow: 0px 0px 5px 5px rgba(0, 0, 0, 0.35);
    }

    li:nth-child(4) {
      -ms-transform: TranslateY(0px) scale(.80);
      -webkit-transform: TranslateY(0px) scale(.80);
      -moz-transform: TranslateY(0px) scale(.80);
      -o-transform: TranslateY(0px) scale(.80);
      transform: TranslateY(0px) scale(.80); // translate3d(0,45%,0)
      box-shadow: 0px 0px 5px 5px rgba(0, 0, 0, 0.35);
    }

     li:nth-child(5) {
      -ms-transform: TranslateY(-3.3rem) scale(.76);
      -webkit-transform: TranslateY(-3.5rem) scale(.76);
      -moz-transform: TranslateY(-3.5rem) scale(.76);
      -o-transform: TranslateY(-3.5rem) scale(.76);
      transform: TranslateY(-3.5rem) scale(.76);
      box-shadow: 0px 0px 5px 5px rgba(0, 0, 0, 0.35);
    }

    li:nth-child(6) {
      transform:  TranslateY(-6.8rem) scale(.72);
      box-shadow: 0px 0px 5px 5px rgba(0, 0, 0, 0.35);
    }
  }
}
</style>


<script setup lang="ts">
  import { ref, computed } from 'vue';

  const layout = 'default'

  const StrapiUrl = useStrapiUrl()

  const { data: mainNav } = await useAsyncData('mainNav', () => $fetch(StrapiUrl + '/navigations?filters[name][$eq]=HauptNavigation&populate=*'), {
      transform: (data: any) => {
          if (data.data) {
              const links = data.data.map( (links: any) => links.attributes.links.flat() ).flat();
              return links ? links : null;
          } else {
              return null
          }

      }
  })

  const ulActive = ref(false);
  const showMenu = ref(false);

  const activateUl = () => {
      ulActive.value = !ulActive.value;
      showMenu.value = !showMenu.value;
  };

</script>