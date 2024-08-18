import { links, type Links } from '@/src/routing'

export default defineNuxtPlugin((_nuxtApp) => {
  return {
    provide: {
      routing(name: Links, params: Record<string, string | number> = {}) {
        return { name: links[name], params }
      },
    },
  }
})
