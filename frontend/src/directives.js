import Vue from 'vue';
import loadingSVG from '@/assets/icons/loading.svg';

/**
 * Toggle the loader
 *
 * @param {*} el
 * @param {*} binding
 */
const toggleLoading = (el, binding) => {
  const addLoading = () => {
    removeLoading();

    el.insertAdjacentHTML(
      'afterbegin',
      `<div class="loading-directive"><div><div><svg><use href="${loadingSVG.url}" /></svg></div></div></div>`
    );
  };

  /**
   * Apparently, for some reason the loader div might persist a route change
   * So we go through the entire DOM and remove all the loaders
   */
  const removeLoading = () => {
    document.querySelectorAll('.loading-directive').forEach(value => {
      value.remove();
    });
  };

  const value = binding.value;

  if (value) {
    addLoading();
  } else {
    removeLoading();
  }
};

const directives = {
  loading: {
    /* eslint-disable-next-line no-unused-vars */
    bind(el, binding) {
      toggleLoading(el, binding);
    },
    /* eslint-disable-next-line no-unused-vars */
    update(el, binding) {
      toggleLoading(el, binding);
    },
  },
};

Vue.directive('loading', directives.loading);
