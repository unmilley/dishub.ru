import type { Links } from '~/src/routing'

type NavigationBase = {
  title: string
  icon: string
  isVisible: boolean
}
type NavigationWithPath = NavigationBase & { path: Links; action: (p: Links) => any }
type NavigationWithoutPath = NavigationBase & { path?: undefined; action: () => any }

export type Navigation = NavigationWithPath | NavigationWithoutPath
