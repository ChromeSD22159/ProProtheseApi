export const modules = [
  '@nuxtjs/tailwindcss',
  '@nuxtjs/strapi',
  '@nuxt/image',
  'nuxt-simple-sitemap',
  ['@nuxtjs/robots', { 
    UserAgent: '*',
    Allow: '/',
  }]
]

export const app = {
  pageTransition: { name: 'page', mode: 'out-in' },
  layoutTransition: { name: 'layout', mode: 'out-in' }
}

export const plugins = [
  '@/plugins/markdown.ts',
  '@/plugins/animation'
]