export const pwa = {
  link: [
    { rel: 'apple-touch-icon', sizes: '180x180', href: '/pwa/ios/180.png' },
    { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/pwa/ios/32.png' },
    { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/pwa/ios/16.png' },
    { rel: 'manifest', href: '/pwa/site.webmanifest' },
    { rel: 'mask-icon', href: '/pwa/safari-pinned-tab.svg', color: '#0077ff' },
  ],
  meta: [
    { name: 'apple-mobile-web-app-title', content: 'Dishub' },
    { name: 'application-name', content: 'Dishub' },
    { name: 'msapplication-Config', content: '/pwa/browserconfig.xml' },
    { name: 'msapplication-TileColor', content: '#191919', media: '(prefers-color-scheme: dark)' },
    { name: 'msapplication-TileColor', content: '#ffffff', media: '(prefers-color-scheme: light)' },
    { name: 'theme-color', content: '#191919', media: '(prefers-color-scheme: dark)' },
    { name: 'theme-color', content: '#ffffff', media: '(prefers-color-scheme: light)' },
  ],
}
