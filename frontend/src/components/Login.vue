<template>
  <div>
    <h2>{{ $t('login') }}</h2>

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

    <span v-if="errorMessage" class="block mt-4 text-red-600">
      {{ errorMessage }}
    </span>

    <div class="flex items-center justify-between mt-6">
      <button
        class="btn btn--primary"
        :disabled="$v.$invalid"
        @click.prevent="doLogin"
      >
        {{ $t('login') }}
      </button>
    </div>
  </div>
</template>

<script>
import ForgeInput from '@/components/Input.vue';
import ValidationText from '@/components/ValidationText.vue';
import { mapActions } from 'vuex';
import { required } from 'vuelidate/lib/validators';
import { login } from '@/services/auth.js';

export default {
  components: {
    ForgeInput,
    ValidationText,
  },
  data() {
    return {
      errorMessage: '',
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
    ...mapActions('Auth', ['setToken', 'setRefreshToken', 'setUserName']),
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
        this.errorMessage = '';
        this.setToken(loginData.access);
        this.setRefreshToken(loginData.refresh);
        this.setUserName({
          firstName: loginData.firstName,
          lastName: loginData.lastName,
        });
        this.$router.push({ name: 'welcome' });
      } catch (e) {
        this.errorMessage = e.response.data.detail;
      }
    },
  },
};
</script>
