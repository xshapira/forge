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

    <button class="bg-gray-600 hover:bg-gray-500 transition-1000">
      Hover me for a lighter background
    </button>

    <div class="cssgrid p8 grid-columns-2 grid-gap-8">
      <p>one</p>
      <p>two</p>
      <p>three</p>
    </div>

    <main class="mt-12">
      <router-view />
    </main>
  </div>
</template>
