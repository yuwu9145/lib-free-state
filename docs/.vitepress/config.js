export default {
  title: 'Library-free state',
  description: 'Just playing around.',
  base: '/lib-free-state/',
  themeConfig: {
    siteTitle: 'Library-free state',
    nav: [
      { text: 'Guide', link: '/guide' },
      {
        text: 'Dropdown Menu',
        link: '',
        items: [
          { text: 'Item A', link: '/item-1' },
          { text: 'Item B', link: '/item-2' },
          { text: 'Item C', link: '/item-3' }
        ]
      }
    ],
    sidebar: [
      {
        text: 'Introduction',
        link: '',
        items: [
          { text: 'Introduction', link: '/introduction' },
          { text: 'Getting Started', link: '/getting-started' },
        ],
      }
    ]
  }
}