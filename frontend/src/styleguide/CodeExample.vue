<template>
  <vue-markdown class="mt-4 text-sm">
    ```html
    {{ code }}
    ```
  </vue-markdown>
</template>

<script>
import VueMarkdown from 'vue-markdown';
import 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';

export default {
  components: {
    VueMarkdown,
  },
  props: {
    code: {
      type: String,
      required: true,
    },
  },
};
</script>
