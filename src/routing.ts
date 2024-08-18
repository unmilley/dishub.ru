export const links = {
  index: 'index',
  auth: 'auth',
  menu: 'menu',
  favorites: 'favorites',
  record: 'record',
  reAccount: 'auth-recover-account',
} as const

export type Links = keyof typeof links
