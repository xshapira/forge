<template>
  <div id="app">
    <header class="py-6 bg-gray-200">
      <div class="container">
        <div class="flex justify-center">
          <router-link to="/">Home</router-link> |
          <router-link to="/about">About</router-link>
        </div>
      </div>
    </header>

    <main class="mt-12">
      <router-view />
    </main>
  </div>
</template>
