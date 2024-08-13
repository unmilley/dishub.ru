const devServer = { https: true }

export default defineNuxtConfig({
  compatibilityDate: '2024-08-13',
  devtools: { enabled: true, telemetry: false, timeline: { enabled: false } },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/icon', '@vueuse/nuxt', '@nuxtjs/color-mode', '@nuxt/image'],
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

  icon: {
    collections: ['bx', 'bxs', 'ph'],
    mode: 'svg',
  },

  devServer,
})
