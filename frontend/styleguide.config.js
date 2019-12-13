const path = require('path');

module.exports = {
  title: 'Default Style Guide',
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
};
