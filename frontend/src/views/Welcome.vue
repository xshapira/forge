<template>
  <div class="container py-24 container--sm">
    <h1>You have logged in!!!</h1>
    <button @click="logout">
      {{ $t('logout') }}
    </button>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {},
  methods: {
    logout() {
      this.$store.commit('Auth/logout');
      this.$router.push({ name: 'home' });
    },
  },
};
</script>
