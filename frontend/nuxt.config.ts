// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    pageTransition: {
        name: 'page',
        mode: 'out-in'
    }
  },
  css: ["@/scss/style.scss"],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
              @import "@/scss/_vars.scss"; 
              @import "@/scss/_preset.scss"; 
              @import "@/scss/_font.scss";
          `
        },
      },
    },
  },
})
