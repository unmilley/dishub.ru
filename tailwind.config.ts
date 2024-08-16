import type { Config } from 'tailwindcss'

import daisyui from 'daisyui'
import themes from 'daisyui/src/theming/themes'
import type { Theme } from './types'

const dark: Theme = {
  ...themes.dark,
  'base-100': '#191919',
  'base-200': '#222222',
  'base-300': '#232323',
  'base-content': '#77787a',
  primary: '#0077FF',
  'primary-content': '#ffffff',
}

const light: Theme = {
  ...themes.light,
  'base-100': '#ffffff',
  'base-200': '#ebecf0',
  'base-300': '#f5f5f5',
  'base-content': '#9ba1ad',
  primary: '#0077FF',
  'primary-content': '#ffffff',
}

const config: Partial<Config> = {
  content: ['./components/**/*.vue', './layouts/**/*.vue', './pages/**/*.vue', './app.vue', './error.vue'],
  darkMode: ['class'],
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
