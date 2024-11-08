import { devServer } from './.temp/dev'
import { pwa } from './src/pwa'
import { config } from './src/runtimeConfig'

export default defineNuxtConfig({
  compatibilityDate: '2024-08-13',
  devtools: { enabled: true, telemetry: false, timeline: { enabled: false } },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/icon',
    '@vueuse/nuxt',
    '@nuxtjs/color-mode',
    '@nuxt/image',
    '@vee-validate/nuxt',
    '@nuxtjs/device',
    '@nuxtjs/seo',
  ],
  tailwindcss: {
    cssPath: ['@/assets/css/tailwind.css', { injectPosition: 'first' }],
    configPath: '@/tailwind.config.ts',
    viewer: false,
  },
  colorMode: {
    preference: 'system',
    fallback: 'dark',
    classSuffix: '',
    dataValue: 'theme',
    storageKey: 'theme',
  },

  vite: { optimizeDeps: { exclude: ['vee-validate'] } },

  icon: {
    collections: ['bx', 'bxs', 'ph'],
    mode: 'svg',
    customCollections: [{ prefix: 'mill', dir: './assets/icons' }],
  },

  app: {
    head: {
      htmlAttrs: { dir: 'ltr', lang: 'ru' },
      titleTemplate: '%s %separator %siteName',
      link: [...pwa.link],
      meta: [...pwa.meta],
    },
  },

  runtimeConfig: {
    public: {
      fb: { ...config.public },
    },
    fbAdmin: { ...config.server },
  },
  site: {
    description:
      'Ежедневные рецепты с отзывами и оценками от домашних поваров. Идеи для быстрого ужина, полезные рецепты и ценные кулинарные советы, которые помогут готовить вкусно и легко.',
  },

  devServer,
})
