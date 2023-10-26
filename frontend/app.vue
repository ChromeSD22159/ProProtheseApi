<template>
  <div class="flex md:flex-row flex-col site ">
    <HeaderNavigation  @activate-ul="activateUl"  />

    <div class="w-full min-h-full relative ">
      <!--<NuxtPage :class="{ active: showMenu }" class="min-w-full min-h-full" />-->

      <ul :class="{ active: showMenu }" class="navigation min-w-full min-h-full">
        <li class="absolute ease-in-out duration-300 m-0 p-0 min-h-screen w-full shadow-transparent shadow-none"><NuxtPage class="min-w-full min-h-full" /></li>
        <li v-for="(link, index) in links" :key="index" class="absolute ease-in-out duration-300 rounded-xl m-0 p-6 min-h-screen w-full shadow-transparent	shadow-none">
          <div class="background bg-opacity-10 absolute top-0 left-0 min-w-full min-h-full rounded-2xl transition-all duration-500 -p5">
            <NuxtLink :to="link.url" @click="activateUl" class="relative top-5 left-5 text-white">  {{ link.text }} </NuxtLink>
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
    z-index: 20;
  }

  li:nth-child(2) {
    z-index: 15;
  }

  li:nth-child(3) {
    z-index: 5;
  }

  li:nth-child(4) {
    z-index: 0;
  }

  &.active {
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
      -ms-transform: TranslateY(0px) scale(.81);
      -webkit-transform: TranslateY(0px) scale(.81);
      -moz-transform: TranslateY(0px) scale(.81);
      -o-transform: TranslateY(0px) scale(.81);
      transform: TranslateY(0px) scale(.81); // translate3d(0,45%,0)
      box-shadow: 0px 0px 5px 5px rgba(0, 0, 0, 0.35);
    }
  }
}
</style>


<script>
export default {
    data() {
        return {
            urls: [
                { "url":"/", "name": "Startseite" },
                { "url":"/contact", "name": "Contact" },
                { "url":"/apps", "name": "Pro Prothese & Country Tracking" }
            ],
            links: [],
            ulActive: false,
            showMenu: false
        };
    },
    methods: {
         generateNulllinks() {
            this.links = this.urls.map((item, index) => ({
                text: item.name,
                url: item.url,
                transformY: 0,
                transformZ: 0,
                zIndex: 3 - index,
                })
            );
        },
        activateUl() {
            this.ulActive = !this.ulActive;
            this.showMenu = !this.showMenu
        },
    },
    mounted() {
      this.generateNulllinks()
    }
};

useSeoMeta({
  title: 'Freiberuflicher Web Designer & Software Entwickler',
  ogTitle: 'Freiberuflicher Web Designer & Software Entwickler',
  description: 'Suchen Sie Entwickler, UX/IX-Designer oder Hilfe bei Websites? Brauchen Sie Unterstützung bei Software Projekten oder bei Ihrer Website?',
  ogDescription: 'Suchen Sie Entwickler, UX/IX-Designer oder Hilfe bei Websites? Brauchen Sie Unterstützung bei Software Projekten oder bei Ihrer Website?',
  ogImage: 'https://frederikkohler.de/image.png',
  author: 'Frederik Kohler, Portfolio'
})
</script>