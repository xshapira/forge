<template>
  <div id="app">
    <header class="py-6 bg-gray-100">
      <div class="container">
        <div class="flex justify-between">
          <router-link class="text-lg font-semibold no-underline" to="/">
            Forge
          </router-link>
          <router-link class="text-lg font-semibold no-underline" to="/loading">
            Loading
          </router-link>
        </div>
      </div>
    </header>

    <main>
      <router-view />
    </main>
    <footer>
      &nbsp;
    </footer>

    <notification />
  </div>
</template>

<script>
import Notification from '@/components/Notification';

export default {
  components: {
    Notification,
  },
};
</script>
