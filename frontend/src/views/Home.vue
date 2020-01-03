<template>
  <div class="container pt-12 pb-24 container--sm">
    <div class="p-8 bg-gray-100 border rounded-lg">
      <login />
    </div>
  </div>
</template>

<script>
import Login from '@/components/Login.vue';

export default {
  name: 'Home',
  components: {
    Login,
  },
};
</script>
