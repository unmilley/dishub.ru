type NavigationBase = {
  title: string
  icon: string
  isVisible: boolean
}
type NavigationWithPath = NavigationBase & { path: string; action: (p: string) => any }
type NavigationWithoutPath = NavigationBase & { path?: undefined; action: () => any }

export type Navigation = NavigationWithPath | NavigationWithoutPath
