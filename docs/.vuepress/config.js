module.exports = {
  title: 'Forge',
  description: 'The documentation for Forge template',
  themeConfig: {
    smoothScroll: true,
    lastUpdated: 'Last Updated',
    nav: [
      { text: 'GitHub', link: 'https://github.com/liip-amboss/forge' },
    ],
    sidebar: [{
      title: 'Frontend',
      collapsable: false,
      children: [
        '/frontend/',
        '/frontend/accessibilty',
        '/frontend/svg',
        {
          title: "Components",
          collapsable: false,
          children: [
            '/frontend/components/input',
            '/frontend/components/popover',
            '/frontend/components/toggle',
            '/frontend/components/tooltip'
          ]
        }
      ]
    },
    {
      title: "Backend",
      collapsable: false,
      children: [
        '/backend/',
      ]
    }],
  }
}
