<template>
  <div>
    <div
      v-for="(colorName, index) in Object.keys(colors)"
      :key="index"
      class="flex flex-wrap"
    >
      <div
        v-for="color in Object.keys(colors[colorName])"
        :key="color"
        class="mr-4 mb-4 border border-gray-200 flex flex-col items-center min-w-64"
      >
        <div
          class="w-full h-12 border-gray-200"
          :class="'bg-' + colorName + '-' + color"
        />
        <p class="p-4">
          {{ colorName + '-' + color }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import resolveConfig from 'tailwindcss/resolveConfig';

const tailwind = require('../../../tailwind.config.js');

const mergedTailwind = resolveConfig(tailwind);

export default {
  computed: {
    colors() {
      const colors = {};
      const keys = Object.keys(this.theme.colors);
      keys.forEach(key => {
        if (this.theme.colors[key] instanceof Object) {
          colors[key] = this.theme.colors[key];
        }
      });
      return colors;
    },
  },
  data() {
    return {
      theme: mergedTailwind.theme,
    };
  },
};
</script>
