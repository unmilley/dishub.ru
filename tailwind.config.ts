import type { Config } from 'tailwindcss'

import daisyui from 'daisyui'
import themes from 'daisyui/src/theming/themes'
import type { Theme } from './types'

const dark: Theme = {
  ...themes.dark,
}

const light: Theme = {
  ...themes.light,
}

const config: Partial<Config> = {
  content: ['./components/**/*.vue', './layouts/**/*.vue', './pages/**/*.vue', './app.vue', './error.vue'],
  darkMode: ['class', 'data-theme'],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
  daisyui: {
    themes: [{ dark, light }],
    darkTheme: 'dark',
    base: true,
    styled: true,
    utils: true,
    logs: false,
  },
}

export default config
