<template>
  <label :class="['block', { 'cursor-not-allowed': disabled }, classLabel]">
    <span
      :class="[
        { 'text-gray-500': disabled },
        { block: block },
        { 'mr-4': !block },
        classLabel,
      ]"
    >
      {{ label }}
    </span>
    <input
      v-model="localValue"
      :type="type"
      :class="['form-input', classInput]"
      :placeholder="placeholder"
      :disabled="disabled"
      :maxlength="maxLength"
      @input="change"
    />
  </label>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      default: 'text',
      validator: function(value) {
        return (
          [
            'color',
            'date',
            'datetime-local',
            'email',
            'file',
            'hidden',
            'image',
            'month',
            'number',
            'password',
            'range',
            'reset',
            'search',
            'tel',
            'text',
            'time',
            'url',
            'week',
          ].indexOf(value) !== -1
        );
      },
    },
    block: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    placeholder: {
      type: String,
      default: '',
    },
    classInput: {
      type: String,
      default: '',
    },
    classLabel: {
      type: String,
      default: '',
    },
    maxLength: {
      type: Number,
      default: null,
    },
  },
  data() {
    return {
      localValue: this.value,
    };
  },
  watch: {
    value(newValue) {
      this.localValue = newValue;
    },
  },
  methods: {
    change() {
      this.$emit('input', this.localValue);
    },
  },
};
</script>
