import { strapi_url } from "./strapi";
export const hooks = {
  'ready'(nuxt) {
    console.log('🔥 Workspace dir:', nuxt.options.workspaceDir)
   // console.log('Modules dir:', nuxt.options.modulesDir)
    console.log('🔥 STRAPI_URL:', strapi_url.url)
  },
};