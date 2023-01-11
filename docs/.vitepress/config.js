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
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023-present <a href="https://github.com/yuwu9145">Yuchao Wu</a>'
    },
    nav: [
      {
        text: "Vue 3",
        activeMatch: "/vue3",
        link: "/vue3",
      },
      {
        text: "Angular (2+)",
        activeMatch: "/angular",
        link: "/angular",
      }
    ],
    // sidebar: {
    //   '/frameworks/': [
    //     {
    //       text: "Vue 3 (composition API)",
    //       items: [{ text: "Vue 3 (composition API)", link: "/vue3" }],
    //     },
    //     {
    //       text: "Vue 3 (composition API)",
    //       items: [{ text: "Vue 3 (composition API)", link: "/vue3" }],
    //     },
    //     // { text: 'Vue 3 (composition API)', link: '/vue3' },
    //     // { text: 'Angular (2+)', link: '/angular' },
    //   ]
    // },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/yuwu9145/lib-free-state' },
    ],
    
  }
}
