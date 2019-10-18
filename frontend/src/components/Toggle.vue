<template>
  <div class="toggle">
    <button
      class="toggle__btn btn"
      :class="[{ 'block w-full': isBlock }, classButton]"
      @click="toggle"
    >
      <slot></slot>
    </button>
    <aside class="toggle__content" :class="{ hidden: isHidden }">
      <slot name="content"></slot>
    </aside>
  </div>
</template>

<script>
export default {
  props: {
    isBlock: {
      type: Boolean,
      default: false,
    },
    classButton: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      isHidden: true,
    }
  },
  methods: {
    toggle() {
      this.isHidden = !this.isHidden
    },
  },
}
</script>
