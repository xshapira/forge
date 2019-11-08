<template>
  <div>
    <div class="flex flex-wrap">
      <button v-tooltip="'Tooltip content'" class="btn mr-4">
        Tooltip directive with defaults
      </button>

      <button v-tooltip.top="'Tooltip content'" class="btn mr-4">
        Tooltip directive
      </button>

      <button v-tooltip.left="'Tooltip content'" class="btn mr-4">
        Tooltip directive left ⬅️
      </button>

      <button v-tooltip.right="'Tooltip content'" class="btn">
        Tooltip directive right ➡️
      </button>
    </div>
    <code-example
      code='
      <button
        class="btn mr-4"
        v-tooltip="Tooltip content"
      >
        Tooltip directive with defaults
      </button>
      '
    />

    <section-sub title="Popover component">
      <v-popover class="mt-4">
        <button class="btn">Click me</button>
        <div slot="popover">
          <p>Popover component</p>
        </div>
      </v-popover>

      <code-example
        code='
      <v-popover class="mt-4">
        <button class="btn">Click me</button>
        <div slot="popover">
          <p>Popover component</p>
        </div>
      </v-popover>
      '
      />
    </section-sub>
  </div>
</template>

<script>
import CodeExample from './CodeExample';
import SectionSub from './SectionSub';

export default {
  components: {
    CodeExample,
    SectionSub,
  },
};
</script>
