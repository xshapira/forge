const path = require('path');

module.exports = {
  title: 'Forge Style Guide',
  components: ['src/components/**/[A-Z]*.vue', 'src/styleguide/**/[A-Z]*.vue'],
  ignore: ['src/components/HelloWorld.vue'],
  pagePerSection: true,
  webpackConfig: Object.assign(
    {},
    {
      module: {
        rules: [
          {
            test: /\.css$/,
            exclude: /node_modules/,
            loader: 'postcss-loader',
          },
        ],
      },
    }
  ),
  sections: [
    {
      name: 'Components',
      components: 'src/components/**/[A-Z]*.vue',
    },
    {
      name: 'Styles',
      components: 'src/styleguide/styles/*.vue',
    },
    {
      name: 'Libraries',
      components: 'src/styleguide/libraries/*.vue',
    },
  ],
  exampleMode: 'collapse',
  require: [
    path.join(__dirname, 'src/assets/css/main.postcss'),
    path.join(__dirname, 'src/plugins/vTooltip.js'),
  ],
  theme: {
    maxWidth: '100%',
    sidebarWidth: 250,
    color: {
      link: '#353535',
      linkHover: 'rgb(70, 69, 171)',
      sidebarBackground: '#383838',
      errorBackground: '#e22d44',
    },
  },
  styles: {
    StyleGuide: {
      root: {
        'text-rendering': 'optimizeLegibility',
        '-moz-osx-font-smoothing': 'grayscale',
        '-webkit-font-smoothing': 'antialiased',
      },
      sidebar: {},
      content: {},
      logo: {
        border: 'none',
        paddingBottom: 0,
      },
    },
    Logo: {
      logo: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 600,
      },
    },
    ComponentsList: {
      list: {
        '& ul': {
          paddingLeft: 0,
        },
      },
      item: {
        '& a': {
          color: 'rgba(255, 255, 255, 0.9) !important',
          fontWeight: 500,
          cursor: 'pointer',
          '&:hover': {
            textDecoration: 'underline',
            color: '#fff !important',
          },
        },
      },
      heading: {
        fontSize: '18px !important',
        fontWeight: '600 !important',
        color: '#fff !important',
      },
    },
  },
};
