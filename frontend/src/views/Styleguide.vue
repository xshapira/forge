<template>
  <main class="styleguide container">
    <h1 class="text-2xl font-semibold text-gray-500">
      Styleguide
    </h1>

    <styleguide-section title="Button">
      <button class="btn">A button</button>
    </styleguide-section>

    <styleguide-section title="Forge Toggle">
      <article>
        <h4 class="text-lg font-semibold text-red-500">Inline</h4>
        <forge-toggle class="mt-4">
          Im inline toggle
          <p slot="body">Lorem ipsum dolor sit amet.</p>
        </forge-toggle>
      </article>

      <article class="mt-8">
        <h4 class="text-lg font-semibold text-red-500">
          Block
        </h4>
        <forge-toggle
          class="mt-4"
          class-button="block w-full"
          class-body="mt-4 border rounded"
        >
          Im block toggle, rounded and with a border
          <p slot="body">Lorem ipsum dolor sit amet.</p>
        </forge-toggle>
      </article>
    </styleguide-section>
  </main>
</template>

<script>
import StyleguideSection from '@/styleguide/Section'
import ForgeToggle from '@/components/Toggle'

export default {
  components: {
    StyleguideSection,
    ForgeToggle,
  },
}
</script>
