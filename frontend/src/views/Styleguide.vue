<template>
  <main class="styleguide container">
    <h1>Styleguide</h1>
    <h2>Components</h2>

    <styleguide-section title="Forge Toggle">
      <article>
        <h4 class="text-lg font-semibold text-red-500">Inline</h4>
        <forge-toggle class="mt-4">
          Im inline toggle
          <p slot="content">Lorem ipsum dolor sit amet.</p>
        </forge-toggle>
      </article>

      <article class="mt-4">
        <h4 class="text-lg font-semibold text-red-500">Block</h4>
        <forge-toggle class="mt-4" is-block class-button="w-24">
          Im block toggle
          <p slot="content">Lorem ipsum dolor sit amet.</p>
        </forge-toggle>
      </article>

      <template slot="code">
        is-blocked: [false]
      </template>
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
