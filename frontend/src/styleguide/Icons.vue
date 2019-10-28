<template>
  <div>
    <div class="flex">
      <div v-for="icon in icons" :key="icon" class="mr-4 p-4 border rounded">
        <svg-icon :name="icon" />
      </div>
    </div>

    <Section-sub title="Icons sizes">
      <div class="flex">
        <div v-for="icon in icons" :key="icon" class="mr-4 p-4 border rounded">
          <svg-icon :name="icon" class="svg-icon--sm" />
        </div>
      </div>
    </Section-sub>
  </div>
</template>

<script>
import SvgIcon from '@/components/SvgIcon';
import SectionSub from './SectionSub';

export default {
  components: { SvgIcon, SectionSub },

  data() {
    return {
      icons: ['menu', 'pencil'],
    };
  },
};
</script>
