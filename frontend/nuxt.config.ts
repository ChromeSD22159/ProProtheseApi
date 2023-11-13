
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  components: true,
  mode: 'universal', // oder 'spa'
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
  ],
  plugins: ['@/plugins/markdown.ts'],
  strapi: {
    url: process.env.STRAPI_URL,
  },
  tailwindcss: {},
  server: {
    host: '0.0.0.0', // Listen on all available network interfaces
    port: 3000, // Default port
  },
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
  runtimeConfig: {
    MAILHOST: process.env.MAILHOST,
    MAILPORT: process.env.MAILPORT,
    MAILUSER: process.env.MAILUSER,
    MAILPASS: process.env.MAILPASS,
    CONTACTMAIL: process.env.CONTACTMAIL,
    public: {
       strapi: {
         url: process.env.STRAPI_URL
       },
    }
 },
 hooks: {
  'ready'(nuxt) {
    console.log('Workspace dir:', nuxt.options.workspaceDir)
    console.log('Modules dir:', nuxt.options.modulesDir)
  }
}

});
