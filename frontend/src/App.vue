<template>
  <div id="app" class="app-master">
    <div class="app-content">
      <header class="py-6 bg-gray-100">
        <div class="container">
          <div class="flex justify-between">
            <router-link class="text-lg font-semibold no-underline" to="/">
              Forge
            </router-link>
            <router-link
              class="text-lg font-semibold no-underline"
              to="/styleguide"
            >
              Styleguide
            </router-link>
          </div>
        </div>
      </header>
      <main>
        <router-view />
      </main>
    </div>

    <footer class="py-6 bg-gray-100 app-footer">
      <div class="container">
        <p class="text-lg font-semibold">App footer</p>
      </div>
    </footer>

    <portal-target name="body-end" />
  </div>
</template>

<style>
.app-master {
  min-height: 100%;
  display: grid;
  grid-template-rows: 1fr auto;
}
.app-footer {
  grid-row-start: 2;
  grid-row-end: 3;
}
</style>
