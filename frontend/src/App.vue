<template>
  <div id="app">
    <header class="py-6 bg-gray-200">
      <div class="container">
        <div class="flex justify-between">
          <router-link to="/">Home</router-link>
          <router-link to="/styleguide">Styleguide</router-link>
        </div>
      </div>
    </header>

    <button class="bg-gray-600 hover:bg-gray-500 transition-1000">
      Hover me for a lighter background
    </button>

    <main class="mt-12">
      <router-view />
    </main>
  </div>
</template>
