<!------
TODO:
1 Markup the Dialog and Dialog Overlay Appropriately
2 On Dialog Open, Set Focus
3 On Dialog Close, Return Focus to the Last Focused Element
4 While Open, Prevent Mouse Clicks Outside the Dialog
5 While Open, Prevent Tabbing to Outside the Dialog
6 While Open?
------->

<template>
  <portal v-if="isOpen" to="body-end">
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
            <slot name="header">
              &nbsp;
            </slot>
            <button
              class="modal__btn-close"
              :class="classBtnClose"
              @click="hideModal"
            >
              <svg-icon name="close" class="svg-icon--sm" />
            </button>
          </div>

          <div class="modal__body" :class="classBody">
            <slot />
          </div>

          <div v-if="hasFooterSlot" class="modal__footer" :class="classFooter">
            <slot name="footer" />
          </div>
        </div>
      </div>
    </transition>
  </portal>
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

  computed: {
    hasFooterSlot() {
      return !!this.$slots['footer'];
    },
  },

  watch: {
    isOpen(opened) {
      if (opened) {
        this.saveLastActiveFocus();
        this.bodyLock();
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
    bodyLock() {
      document.body.style.top = `-${window.scrollY}px`;
      document.body.classList.add('fixed', 'w-full');
    },
    bodyUnlock() {
      const scrollY = document.body.style.top;
      document.body.classList.remove('fixed', 'w-full');
      document.body.style.top = '';
      window.scrollTo(0, parseInt(scrollY || '0') * -1);
    },
    hideModal() {
      this.$emit('closeModal');
      this.refocusLastActive();
      this.bodyUnlock();
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
