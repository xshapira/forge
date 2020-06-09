<template>
  <div>
    <h2>Login</h2>

    <forge-input
      v-model.trim="$v.email.$model"
      class="mt-4"
      class-input="w-full"
      :value="email"
      label="E-Mail"
      is-block
      required
      @change="setEmail($event.target.value)"
      @blur="$v.email.$touch"
    >
      <validation-text v-if="$v.email.$error" class="mt-1">
        E-Mail is required
      </validation-text>
    </forge-input>

    <forge-input
      v-model.trim.lazy="$v.password.$model"
      class="w-full mt-4"
      class-input="w-full"
      :value="password"
      label="Password"
      placeholder="Password"
      type="password"
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
      <button
        class="btn btn--primary"
        :disabled="$v.$invalid"
        @click.prevent="doLogin"
      >
        Login
      </button>
    </div>
  </div>
</template>

<script>
import ForgeInput from '@/components/Input.vue';
import ValidationText from '@/components/ValidationText.vue';
import { required } from 'vuelidate/lib/validators';
import { login } from '@/services/auth.js';

export default {
  components: {
    ForgeInput,
    ValidationText,
  },
  data() {
    return {
      email: '',
      password: '',
    };
  },
  validations: {
    email: {
      required,
    },
    password: {
      required,
    },
  },
  methods: {
    setEmail(value) {
      this.email = value;
      this.$v.email.$touch();
    },
    setPassword(value) {
      this.password = value;
      this.$v.password.$touch();
    },
    async doLogin() {
      try {
        const loginData = await login(this.email, this.password);
        this.$store.commit('Auth/setToken', loginData.access);
        this.$store.commit('Auth/setRefreshToken', loginData.refresh);
        this.$store.commit('Auth/setUserName', {
          firstName: loginData.firstName,
          lastName: loginData.lastName,
        });
      } catch (e) {
        // TODO add error handling
      }
    },
  },
};
</script>
