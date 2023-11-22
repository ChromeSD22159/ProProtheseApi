// https://nuxt.com/docs/api/configuration/nuxt-config

import axios from 'axios'

import { strapi_url } from './config/strapi';
import { modules, app, plugins } from './config/base';
import { css, scss, tailwindcss } from './config/css';
import { sitemap, prerender } from './config/seo';
import { hooks } from './config/hooks';
import { vite } from './config/vite';
import { runtimeConfig } from './config/runtimeConfig';

export default defineNuxtConfig({
  devtools: { enabled: true },
  vscode: {},
  components: true,
  mode: 'spa', // oder 'spa'
  ssr: false,
  app: app,
  css: css,
  modules: modules,
  plugins: plugins,
  strapi: strapi_url,
  tailwindcss: tailwindcss,
  vite: vite,
  runtimeConfig: runtimeConfig,
  hooks: hooks,
  site:{
    url: process.env.NUXT_PUBLIC_SITE_URL,
    cacheMaxAgeSeconds: 360, // 1 hour
  },
  sitemap: sitemap,
  generate: {
    fallback: true,
  },
  routeRules: {
    '/': { prerender: true },
    '/error/**': { index: false },
  },
  render: {
    bundleRenderer: {
      shouldPreload: (file, type) => {
        return ['script', 'style', 'font'].includes(type);
      },
    },
  },
  nitro: {
    prerender: prerender
  },
});

