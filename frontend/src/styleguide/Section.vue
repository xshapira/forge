<template>
  <section class="mt-12 p-4 bg-white rounded border">
    <h3 class="text-xl text-red-500 font-semibold">{{ title }}</h3>
    <div class="mt-4 pt-4 border-t-4">
      <slot />
    </div>
  </section>
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
