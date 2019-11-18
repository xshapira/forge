<template>
  <div>
    <section-sub title="Button default">
      <button class="btn">A button</button>
      <button class="btn" disabled>A disabled button</button>
      <input class="btn" type="submit" value="A form submit" />
      <a class="btn" href="#">Link</a>
    </section-sub>

    <section-sub title="Button Sizes">
      <button class="btn btn--sm">A small button</button>
      <button class="btn">A button</button>
      <button class="btn btn--lg">A large button</button>
    </section-sub>

    <section-sub title="Button Primary">
      <button class="btn btn--primary">A button</button>
      <button class="btn btn--primary" disabled>A button</button>
    </section-sub>

    <section-sub title="Button Secondary">
      <button class="btn btn--secondary">A button</button>
      <button class="btn btn--secondary" disabled>A button</button>
    </section-sub>

    <section-sub title="Button Icons">
      <div class="flex items-center flex-wrap">
        <button class="btn btn--icon">
          <svg-icon name="pencil" />
        </button>
        <button class="btn btn--icon" disabled>
          <svg-icon name="pencil" />
        </button>
        <button class="btn btn--icon-left">
          <svg-icon name="pencil" />
          Icon on the left
        </button>
        <button class="btn btn--icon-right">
          Icon on the right
          <svg-icon name="pencil" />
        </button>
        <button class="btn btn--icon-right" disabled>
          Icon on the right
          <svg-icon name="pencil" />
        </button>
      </div>
    </section-sub>

    <code-example
      code='
        <button class="btn">A button</button>
        <button class="btn" disabled>A button</button>
        <input class="btn" type="submit" value="A button" />
        <a class="btn" href="#">Link</a>

        /* Sizes */
        <button class="btn btn--sm">A small button</button>
        <button class="btn">A button</button>
        <button class="btn btn--lg">A large button</button>

        /* Styles */
        <button class="btn btn--primary">A button</button>
        <button class="btn btn--secondary">A button</button>

        /* Icons*/
        <button class="btn btn--icon">
          <svg-icon name="pencil" />
        </button>
        <button class="btn btn--icon-left">
          <svg-icon name="pencil" />
          Icon on the left
        </button>
        <button class="btn btn--icon-right">
          Icon on the right
          <svg-icon name="pencil" />
        </button>
      '
    />
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

<style lang="postcss">
.btn + .btn {
  @apply ml-4;
}
</style>
