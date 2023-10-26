// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: true },
  components: true,
  app: {
    pageTransition: {
        name: 'page',
        mode: 'out-in'
    }
  },
  css: ["@/assets/scss/style.scss"],
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/strapi',
    '@nuxtjs/apollo',
    'nuxt-graphql-client'
  ],
  strapi: {
    url: 'http://api.frederikkohler.de',
    prefix: '/api',
    version: 'v4',
    cookie: {},
    cookieName: 'strapi_jwt'
  },
  apollo: {
    clients: {
      default: {
        httpEndpoint: 'http://localhost:1337/graphql',
      }
    },
  },
  runtimeConfig: {
    public: {
      'graphql-client': {
        clients: {
          default: {
            host: 'https://countries.trevorblades.com/graphql',
            token: {
              name: 'null', 
              value: 'null'
            },
          },
          github: {
            host: 'https://api.github.com/graphql',
            token: {
              name: 'Authorization: bearer TOKEN', 
              value: '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'
            },
          },
          countries: {
            host: 'https://countries.trevorblades.com/graphql',
            token: {
              name: 'null', 
              value: 'null'
            },
          }
        }
      }
    }
  },
  tailwindcss: { },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
              @import "@/assets/scss/_vars.scss"; 
              @import "@/assets/scss/_preset.scss"; 
              @import "@/assets/scss/_font.scss";
          `
        },
      },
    },
  },
})
