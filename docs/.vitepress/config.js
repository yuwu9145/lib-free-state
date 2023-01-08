export default {
  title: 'Library-free state',
  description: 'Library-Free state for Javascript frameworks',
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
    siteTitle: 'Library-free state',
    sidebar: [
      {
        items: [
          { text: 'Introduction', link: '/introduction' },
        ],
      },
      {
        text: 'Frameworks',
        items: [
          { text: 'Vue 3', link: '/vue3' },
          { text: 'Angular (2+)', link: '/angular' },
        ],
      },
    ]
  }
}