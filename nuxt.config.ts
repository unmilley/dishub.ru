const devServer = { https: true }

export default defineNuxtConfig({
  compatibilityDate: '2024-08-13',
  devtools: { enabled: true, telemetry: false, timeline: { enabled: false } },
  modules: ['@nuxtjs/tailwindcss'],
  tailwindcss: {
    cssPath: ['@/assets/css/tailwind.css', { injectPosition: 'first' }],
    configPath: '@/tailwind.config.ts',
    viewer: false,
  },

  devServer,
})
