// https://nuxt.com/docs/api/configuration/nuxt-config

import strapi from './config/strapi';
import server from './config/server';
import base from './config/base';
import css from './config/css';

export default defineNuxtConfig({
  devtools: { enabled: true },
  components: true,
  mode: 'universal', // oder 'spa'
  ssr: false,
  app: {
    pageTransition: {
      name: 'page',
      mode: 'out-in'
    }
  },
  css: css.css,
  modules: base.modules,
  plugins: [
    '@/plugins/markdown.ts',
    '@/plugins/animation'
  ],
  strapi: strapi.strapi_url,
  tailwindcss: css.tailwindcss,
  server: server.server,
  vite: {
    css: {
      preprocessorOptions: {
        scss: css.scss,
      },
    },
  },
  runtimeConfig: {
    MAILHOST: process.env.EMAIL_SMTP_HOST,
    MAILPORT: process.env.EMAIL_SMTP_PORT,
    MAILUSER: process.env.EMAIL_SMTP_USER,
    MAILPASS: process.env.EMAIL_SMTP_PASS,
    CONTACTMAIL: process.env.EMAIL_ADDRESS_FROM,
    public: {
       strapi: strapi.strapi_url,
    }
  },
  generate: {
    fallback: true,
    routes: ['/api/contact'],
  },
  hooks: {
    'ready'(nuxt) {
      console.log('🔥 Workspace dir:', nuxt.options.workspaceDir)
     // console.log('Modules dir:', nuxt.options.modulesDir)
      console.log('🔥 STRAPI_URL:', strapi.strapi_url.url)
    }
  },
  site:{
    url: process.env.NUXT_PUBLIC_SITE_URL,
    cacheMaxAgeSeconds: 360, // 1 hour
  },
  sitemap: {
  },
  routeRules: {
    '/': { prerender: true },
    '/error/**': { index: false },
  }
});