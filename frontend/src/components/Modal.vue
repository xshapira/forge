<!------
TODO:
1 Markup the Dialog and Dialog Overlay Appropriately
2 On Dialog Open, Set Focus
3 On Dialog Close, Return Focus to the Last Focused Element
4 While Open, Prevent Mouse Clicks Outside the Dialog
5 While Open, Prevent Tabbing to Outside the Dialog
6 While Open?
7 Allow the ESC Key to Close the Dialog
------->

<template>
  <div v-if="isOpen" :aria-hidden="isOpen ? 'false' : 'true'">
    <div class="a11y-dialog-backdrop" :class="backdropClasses"></div>
    <div class="a11y-dialog relative z-10">
      <div class="a11y-dialog--header">
        <slot name="modal-head" />
      </div>
      <div class="a11y-dialog--body">
        <slot name="modal-body" />
        <button @click="hideModal">close me</button>
      </div>
      <div class="a11y-dialog--footer">
        <slot name="modal-footer" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Modal',
  props: {
    isOpen: {
      type: Boolean,
      default: false,
      required: true,
    },
    backdropClasses: {
      type: String,
      default: 'bg-blue-200 opacity-50',
    },
  },
  data() {
    return {
      initiallyFocusedElement: null,
    };
  },
  watch: {
    isOpen(newValue) {
      if (newValue === true) {
        this.initiallyFocusedElement = document.activeElement;
      }
    },
  },
  methods: {
    hideModal() {
      this.$emit('closeModal');
    },
  },
};
</script>

<style lang="postcss" scoped>
.a11y-dialog-backdrop {
  @apply fixed h-screen left-0 top-0 w-screen z-0;
}
</style>
