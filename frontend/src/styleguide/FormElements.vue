/* eslint-disable prettier/prettier */
<template>
  <div>
    <h3 class="mb-4 text-base font-bold text-gray-700">Input</h3>
    <forge-input :value="input" placeholder="Max" label="First name" />
    <code-example code='<forge-input placeholder="Max" label="First name" />' />

    <section-sub title="Input is-block">
      <forge-input
        :value="input"
        placeholder="Max"
        label="First name"
        is-block
      />
      <code-example
        code='<forge-input placeholder="Max" label="First name" is-block />'
      />
    </section-sub>

    <section-sub title="Input simple validation">
      <p v-if="!$v.formResponses.name.required" class="mb-2 text-red-500">
        name is required
      </p>
      <forge-input
        v-model="$v.formResponses.name.$model"
        :value="input"
        placeholder="Max"
        label="First name"
        is-block
      />
    </section-sub>
    <section-sub title="Input complex validation">
      <p
        v-if="!$v.formResponses.password.strongPassword"
        class="mb-2 text-red-500"
      >
        a strong password needs to be 6 characters, have a number, a special
        char and some text
      </p>
      <forge-input
        v-model="$v.formResponses.password.$model"
        :value="input"
        placeholder="pa$$word12"
        label="Password"
        is-block
      />
    </section-sub>

    <section-sub title="Input email">
      <div class="mt-6">
        <forge-input
          type="email"
          :value="input"
          placeholder="Your email"
          label="Please provide your email address"
        />
        <code-example
          code='<forge-input placeholder="Your email" label="Please provide your email address" disabled />'
        />
      </div>
    </section-sub>

    <section-sub title="Input disabled">
      <div class="mt-6">
        <forge-input
          value=""
          placeholder="Disabled"
          label="Please provide your email address"
          disabled
        />
        <code-example
          code='<forge-input placeholder="Your email" label="Please provide your email address" disabled />'
        />
      </div>
    </section-sub>

    <section-sub title="Textarea">
      <textarea class="form-textarea" rows="5"></textarea>
      <code-example code='<textarea rows="5"></textarea>' />
    </section-sub>

    <section-sub title="Select">
      <label class="block">
        <span>Select</span>
        <select class="form-select block w-full mt-1">
          <option>Option 1</option>
          <option>Option 2</option>
        </select>
      </label>
      <code-example
        code='<select class="form-select block w-full mt-1">
              <option>Option 1</option>
              <option>Option 2</option>
              </select>"'
      />

      <label class="block">
        <span>Select</span>
        <select class="form-select block w-full mt-1" disabled>
          <option>Option 1</option>
          <option>Option 2</option>
        </select>
      </label>
    </section-sub>
  </div>
</template>

<script>
import CodeExample from './CodeExample';
import SectionSub from './SectionSub';

import ForgeInput from '@/components/Input';

import { required, minLength } from 'vuelidate/lib/validators';
export default {
  components: {
    CodeExample,
    SectionSub,
    ForgeInput,
  },
  data() {
    return {
      input: 'Here is some value',
      formResponses: {
        name: '',
        password: '',
      },
    };
  },
  validations: {
    formResponses: {
      name: {
        required,
        minLength: minLength(2),
      },
      password: {
        required,
        strongPassword(password) {
          return (
            /[a-z]/.test(password) && // checks for a-z
            /[0-9]/.test(password) && // checks for 0-9
            /\W|_/.test(password) && // checks for special char
            password.length >= 6
          );
        },
      },
    },
  },
};
</script>
