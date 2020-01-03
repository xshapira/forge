<template>
  <div>
    <h2>Login</h2>

    <forge-input
      v-model="username"
      class="mt-4"
      class-input="w-full"
      :value="username"
      label="Username"
      placeholder="max musterman"
      is-block
      required
    />
    <validation-text v-if="!$v.username.required" class="mt-1">
      Username or email is required
    </validation-text>

    <forge-input
      v-model="password"
      class="w-full mt-4"
      class-input="w-full"
      :value="password"
      label="Password"
      placeholder="Password"
      is-block
      required
    />
    <validation-text v-if="!$v.password.required" class="mt-1">
      Password is required
    </validation-text>

    <div class="flex items-center justify-between mt-6">
      <p class="text-center ">
        <a href="#">Forgot Password?</a>
      </p>
      <button class="btn btn--primary" :disabled="$v.$invalid">
        Login
      </button>
    </div>
  </div>
</template>

<script>
// TODO: Create a checkbox component
// TODO: Create a visual component for the validation
// message with an aria description for the input

import ForgeInput from '@/components/Input.vue';
import ValidationText from '@/components/ValidationText.vue';
import { required } from 'vuelidate/lib/validators';

export default {
  components: {
    ForgeInput,
    ValidationText,
  },
  data() {
    return {
      username: '',
      password: '',
    };
  },
  validations: {
    username: {
      required,
    },
    password: {
      required,
    },
  },
};
</script>
