<template>
  <div>
    <h2>Login</h2>

    <forge-input
      v-model.trim="$v.username.$model"
      class="mt-4"
      class-input="w-full"
      :value="username"
      label="Username"
      placeholder="max musterman"
      is-block
      required
      @change="setUsername($event.target.value)"
      @blur="$v.username.$touch"
    >
      <validation-text v-if="$v.username.$error" class="mt-1">
        Username or email is required
      </validation-text>
    </forge-input>

    <forge-input
      v-model.trim.lazy="$v.password.$model"
      class="w-full mt-4"
      class-input="w-full"
      :value="password"
      label="Password"
      placeholder="Password"
      is-block
      required
      @change="setPassword($event.target.value)"
      @blur="$v.password.$touch"
    >
      <validation-text v-if="$v.password.$error" class="mt-1">
        Password is required
      </validation-text>
    </forge-input>

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
// TODO: Hide errors / show after typing or losing focus

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
  methods: {
    setUsername(value) {
      this.username = value;
      this.$v.username.$touch();
    },
    setPassword(value) {
      this.password = value;
      this.$v.password.$touch();
    },
  },
};
</script>
