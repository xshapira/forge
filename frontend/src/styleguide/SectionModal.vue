<template>
  <div>
    <button class="btn" @click="isModalOpen = true">
      Toggle the modal
    </button>
    <modal
      :is-open="isModalOpen"
      backdrop-classes="bg-gray-500 opacity-75"
      @closeModal="isModalOpen = false"
    >
      <h4 slot="header">Head</h4>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi autem
        vitae provident, molestiae officiis necessitatibus dolor esse debitis
        aliquid at, numquam illum, iusto ut tempore repellendus non recusandae
        magni? Eum.
      </p>
      <div slot="footer">
        <p>footer</p>
      </div>
    </modal>
  </div>
</template>

<script>
import Modal from '@/components/Modal.vue';

export default {
  components: {
    Modal,
  },
  data() {
    return {
      isModalOpen: false,
    };
  },
};
</script>
