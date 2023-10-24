<template>
  <div class="site">
    <HeaderNavigation  @activate-ul="activateUl"  />

    <main>

        <NuxtPage :class="{ active: showMenu }" />
        <ul :class="{ active: showMenu }">
          <li v-for="(link, index) in links" :key="index">
             <div class="background"></div>
              <NuxtLink :to="link.url" @click="activateUl">
                  <a>{{ link.text }}</a>
              </NuxtLink>
          </li>
        </ul>

    </main>
  </div>
</template>

<style lang="scss">

  @media screen and (max-width: 770px) {
    .site {
        flex-direction: column;
     }
  }
  @media screen and (min-width: 770px) {
    .site {
       flex-direction: row;
     }
  }

  main {
    position: relative;
    min-height: 90vh;
    min-width: 100vw;
  }
 
  .site {
    display: flex;
    min-height: 100vh;
    width: 100vw;
   // overflow: hidden;
    position: relative;
}


.page {
      position: absolute;
      width: 100%;
      min-height: 100%;
      display: flex;
      justify-content: center;
      align-content: center;
      align-items: flex-start;
      padding: 8rem 3rem 3rem 3rem;
      border-radius:  2rem;
      background: $prime;
      transition: all 0.25s;
      transition-timing-function: ease-in-out;
      transform: TranslateY(0) scale(1); // TranslateY(0) scale(1)
      box-shadow: 0px 0px 24px 5px rgba(0,0,0,0.0);
      z-index: 5;
      @media only screen and (max-width: 770px) {
        &.active {
          transform: TranslateY(25%) scale(0.95); // translate3d(0%,30%,0px) scale(0.95)
          box-shadow: 0px 0px 74px 10px rgba(0, 0, 0, 0.35);
        }
      }

      @media only screen and (min-width: 770px) {
        &.active {
          width: 90%;
          transform: TranslateY(25%) scale(0.95); // translate3d(0%,30%,0px) scale(0.95)
          box-shadow: 0px 0px 74px 10px rgba(0, 0, 0, 0.35);
        }
      }
    }

    

    ul {
        position: relative;
        width: 100%;
        min-height: 100%;
        display: flex;
        justify-content: center;
        align-content: center;
        align-items: center;
        padding: 2rem;
        margin: 8rem 3rem 3rem 3rem;
        margin: 0;
        padding: 0;
        opacity: 0;
        z-index: 2;

        &.active {
           opacity: 1;
        }

        li {
            display: block;
            position: absolute;
            top: 0;
            left: 0;
            margin: 0;
            padding: 1.5rem;
            min-height: 50vh;
            width: 100%;
            background: #ffffff10;
            box-shadow: 0px 0px 24px 5px rgba(0,0,0,0.35);
            border-radius: 20px;
            transition: all 0.4s;
            transform: TranslateY(50%) scale(0.85); //  translate3d(0%,30%,0px)

            a {
              text-decoration: none;
              color: $white;
            }

            .background {
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background-color: rgb(255 255 255 / 1%);
                border-radius: 20px;
                backdrop-filter: blur(5px);
                z-index: -1;
                transition: background-color .5s ;

                 &:hover {
                    background-color:rgb(255 255 255 / 5%);
                    backdrop-filter: blur(10px);
                }
            }
        }

        @media only screen and (min-width: 770px) {
          li {
            width: 90%;
            transform: TranslateY(0%) scale(0.95); // translate3d(0%,30%,0px) scale(0.95)
            box-shadow: 0px 0px 74px 10px rgba(0, 0, 0, 0.0);
          }
        }

        &.active {
          li:nth-child(1) {
            transform: TranslateY(30%) scale(.93); // translate3d(0,45%,0)
            box-shadow: 0px 0px 24px 5px rgba(0,0,0,0.35);
            z-index: 10;
          }

          li:nth-child(2) {
            transform: TranslateY(15%) scale(0.91); // translate3d(0%,30%,0px)
            box-shadow: 0px 0px 24px 5px rgba(0,0,0,0.35);
            z-index: 8;
          }

          li:nth-child(3) {
            transform: TranslateY(0%) scale(0.89); // translate3d(0%,15%,0px) 
            box-shadow: 0px 0px 24px 5px rgba(0,0,0,0.35);
            z-index: 6;
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