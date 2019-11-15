<!------
TODO:
1 Markup the Dialog and Dialog Overlay Appropriately
2 On Dialog Open, Set Focus
3 On Dialog Close, Return Focus to the Last Focused Element
4 While Open, Prevent Mouse Clicks Outside the Dialog
5 While Open, Prevent Tabbing to Outside the Dialog
6 While Open?
8 Prevent body scrolling when open
------->

<template>
  <portal to="body-end">
    <transition
      enter-active-class="transition-opacity transition-ease-out"
      leave-active-class="transition-opacity transition-ease-in"
      enter-class="opacity-0"
      enter-to-class="opacity-100"
      leave-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="isOpen"
        class="modal"
        :class="classModal"
        :aria-hidden="isOpen ? 'false' : 'true'"
        @keydown.esc="hideModal"
      >
        <div
          class="modal__backdrop"
          :class="classBackdrop"
          @click="hideModal"
        />

        <div class="modal__container" :class="classContainer">
          <div class="modal__header" :class="classHeader">
            <slot name="header" />
            <button
              class="modal__btn-close"
              :class="classBtnClose"
              @click="hideModal"
            >
              &times;
            </button>
          </div>

          <div class="modal__body" :class="classBody">
            <slot />
          </div>

          <div class="modal__footer" :class="classFooter">
            <slot name="footer" />
          </div>
        </div>
      </div>
    </transition>
  </portal>
</template>

<script>
// import { FocusTrap } from 'focus-trap-vue';

export default {
  name: 'Modal',
  // components: {
  //   FocusTrap,
  // },
  props: {
    isOpen: {
      type: Boolean,
      default: false,
      required: true,
    },
    classModal: {
      type: String,
      default: '',
    },
    classBackdrop: {
      type: String,
      default: '',
    },
    classContainer: {
      type: String,
      default: '',
    },
    classHeader: {
      type: String,
      default: '',
    },
    classBody: {
      type: String,
      default: '',
    },
    classFooter: {
      type: String,
      default: '',
    },
    classBtnClose: {
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

  mounted() {
    window.addEventListener('keyup', this.handleKeyEvent);
  },

  beforeDestroy() {
    window.removeEventListener('keyup', this.handleKeyEvent);
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
    handleKeyEvent(event) {
      if (event.code == 'Escape' && this.isOpen) {
        this.hideModal();
      }
    },
  },
};
</script>
