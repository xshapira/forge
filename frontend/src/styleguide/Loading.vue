<template>
  <div>
    <button class="btn" @click="isLoading = !isLoading">{{ loadText }}</button>
    <div v-loading="isLoading" class="h-16 mt-10">Some content that needs loading</div>

    <div>Icon is Anvil by Guvnor Co from the Noun Project</div>
  </div>
</template>
<script>
import SectionSub from './SectionSub';
export default {
  components: { SectionSub },
  data() {
    return {
      isLoading: true,
    };
  },
  computed: {
    loadText() {
      return this.isLoading ? 'Unload' : 'Load';
    },
  },
};
</script>
