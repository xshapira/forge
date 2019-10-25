<template>
  <div class="mt-12">
    <section>
      <h3 class="text-xl text-red-500 font-semibold">{{ title }}</h3>
      <div class="mt-4 pt-4 border-t-4">
        <slot />
      </div>
    </section>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
  },
}
</script>
