// all selectors in this array will not be purged
let selectorWhiteListArray = [];
// element ui
selectorWhiteListArray.push(/^el-/);
// code formatter
selectorWhiteListArray.push(/^language-/);
selectorWhiteListArray.push(/^pre/);
selectorWhiteListArray.push(/^token/);
const purgecss = require('@fullhuman/postcss-purgecss')({
  // Specify the paths to all of the template files in your project
  content: [
    './src/**/*.html',
    './src/**/*.vue',
    './src/**/*.postcss',
    // etc.
  ],
  // survive element ui, survive!
  whitelistPatternsChildren: selectorWhiteListArray,

  // Include any special characters you're using in this regular expression
  defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
});

module.exports = {
  plugins: [
    require('postcss-import')(),
    require('tailwindcss')(),
    require('autoprefixer'),
    ...(process.env.NODE_ENV === 'production' ? [purgecss] : []),
    require('postcss-preset-env')({
      features: {
        'nesting-rules': true,
      },
    }),
  ],
};
