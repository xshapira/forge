module.exports = {
  presets: ['@vue/app'],
  sourceType: 'unambiguous',
  env: {
    test: {
      plugins: ['babel-plugin-rewire'],
    },
  },
};
