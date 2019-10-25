<template>
  <article>
    <h4 class="mt-8 mb-3 text-lg font-semibold text-red-500">{{ title }}</h4>
    <slot />
  </article>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
  },
};
</script>
