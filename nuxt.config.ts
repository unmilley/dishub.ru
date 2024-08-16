import { pwa } from './src/pwa'
import { config } from './src/runtimeConfig'
const devServer = { https: true }

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
  device: { refreshOnResize: true },

  vite: { optimizeDeps: { exclude: ['vee-validate'] } },

  icon: {
    collections: ['bx', 'bxs', 'ph'],
    mode: 'svg',
    customCollections: [{ prefix: 'mill', dir: './assets/icons' }],
  },

  app: {
    head: {
      htmlAttrs: { dir: 'ltr', lang: 'ru' },
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

  devServer,
})
