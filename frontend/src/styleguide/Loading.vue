<template>
  <div>
    <button class="btn" @click="isLoading = !isLoading">{{ loadText }}</button>
    <div
      v-loading="isLoading"
      class="h-16 mt-10 border flex items-center justify-center"
    >
      <div>Some other content that needs loading</div>
    </div>

    <div
      v-loading="isLoading"
      class="c-content mt-10 border p-4 flex items-center justify-center"
    >
      <div>Some other content that needs loading</div>
    </div>

    <div class="mt-8">Icon is Anvil by Guvnor Co from the Noun Project</div>
  </div>
</template>
<script>
export default {
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

<style scoped>
.c-content {
  height: 18em;
}
</style>
