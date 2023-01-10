export default {
  title: 'Library-Free State',
  description: 'Library-Free state for Javascript frameworks (Vue 3 using composition api, Angular using rxjs)',
  head: [
    [
      'script',
      { async: true, src: 'https://www.googletagmanager.com/gtag/js?id=G-BD8NBNQPB5' }
    ],
    [
      'script',
      {},
      "window.dataLayer = window.dataLayer || [];\nfunction gtag(){dataLayer.push(arguments);}\ngtag('js', new Date());\ngtag('config', 'G-BD8NBNQPB5');"
    ]
  ],
  themeConfig: {
    siteTitle: 'Library-Free State',
    sidebar: [
      {
        items: [
          { text: 'Introduction', link: '/introduction' },
        ],
      },
      {
        text: 'Frameworks',
        items: [
          { text: 'Vue 3 (composition API)', link: '/vue3' },
          { text: 'Angular (2+)', link: '/angular' },
        ],
      },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/yuwu9145/lib-free-state' },
    ]
  }
}
