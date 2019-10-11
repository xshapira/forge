<template>
  <main class="styleguide">
    <h1>Styleguide</h1>

    <h2>Components</h2>

    <h3>Toggle</h3>

    <h4>Inline</h4>
    <forge-toggle>
      Im inline toggle
      <p slot="content">Lorem ipsum dolor sit amet.</p>
    </forge-toggle>

    <h4>Block</h4>
    <forge-toggle is-block class-button="w-24">
      Im block toggle
      <p slot="content">Lorem ipsum dolor sit amet.</p>
    </forge-toggle>
  </main>
</template>

<script>
import ForgeToggle from '@/components/Toggle'

export default {
  components: {
    ForgeToggle,
  },
}
</script>

<style lang="scss" scoped></style>
