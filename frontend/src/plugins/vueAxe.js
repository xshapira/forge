/*----------------------------------------*\
  Vue Axe
  https://github.com/vue-a11y/vue-axe
\*----------------------------------------*/

import Vue from 'vue'
import VueAxe from 'vue-axe'

if (process.env.NODE_ENV !== 'production') {
  Vue.use(VueAxe, {
    // clears the console after render
    clearConsoleOnUpdate: false,

    config: {
      rules: [
        { id: 'color-contrast', enabled: true },
        { id: 'heading-order', enabled: true },
        { id: 'help-same-as-label', enabled: true },
        { id: 'label-title-only', enabled: true },
        { id: 'link-in-text-block', enabled: true },
        { id: 'region', enabled: true },
        { id: 'skip-link', enabled: true },
      ],
    },
  })
}
