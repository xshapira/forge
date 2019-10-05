/*----------------------------------------*\
  Vue Axe
  https://github.com/vue-a11y/vue-axe
\*----------------------------------------*/

import Vue from 'vue'

if (process.env.NODE_ENV !== 'production') {
  const VueAxe = require('vue-axe')
  Vue.use(VueAxe, {
    // clears the console after render
    clearConsoleOnUpdate: false,

    config: {
      rules: [
        // { id: 'heading-order', enabled: true },
        // { id: 'label-title-only', enabled: true },
      ],
    },
  })
}
