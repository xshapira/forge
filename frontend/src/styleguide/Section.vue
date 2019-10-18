<template>
  <section class="mt-8">
    <h3 class="text-xl text-red-500 font-semibold">{{ title }}</h3>
    <div class="mt-4 pt-4 border-t-4">
      <slot></slot>

      <footer v-if="hasCodeExample">
        <h4 class="mt-4 text-red-500 font-semibold">Code example:</h4>
        <pre class="mt-4 p-4 bg-gray-200 rounded whitespace-pre-line">
        <code class="whitespace-pre">
          <slot name="code"></slot>
        </code>
      </pre>
      </footer>
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
  computed: {
    hasCodeExample() {
      return !!this.$slots['code']
    },
  },
}
</script>
