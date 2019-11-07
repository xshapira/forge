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
  <div
    v-if="isOpen"
    :aria-hidden="isOpen ? 'false' : 'true'"
    @keydown.esc="hideModal"
  >
    <div
      class="opacity-50 bg-blue-200 fixed h-screen left-0 top-0 w-screen z-0"
      :class="classBackdrop"
    />
    <FocusTrap :v-model="isOpen" :deactive="refocusLastActive">
      <div v-focus class="a11y-dialog relative z-10">
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
    </FocusTrap>
  </div>
</template>

<script>
import { FocusTrap } from 'focus-trap-vue';
export default {
  name: 'Modal',
  components: {
    FocusTrap,
  },
  props: {
    isOpen: {
      type: Boolean,
      default: false,
      required: true,
    },
    classBackdrop: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      initiallyFocusedElement: null,
    };
  },
  watch: {
    isOpen(opened) {
      if (opened) {
        this.saveLastActiveFocus();
      }
    },
  },
  methods: {
    hideModal() {
      this.$emit('closeModal');
      this.refocusLastActive();
    },
    refocusLastActive() {
      if (this.initiallyFocusedElement instanceof HTMLElement) {
        this.initiallyFocusedElement.focus();
      }
    },
    saveLastActiveFocus() {
      this.initiallyFocusedElement = document.activeElement;
    },
  },
};
</script>

<style lang="postcss" scoped></style>
