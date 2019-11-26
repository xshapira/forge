<template>
  <div>
    <p
      v-if="!$v.formResponses.password.strongPassword"
      class="mb-2 text-red-500"
    >
      Strong passwords need to have a letter, a number, a special character, and
      be more than 6 characters long.
    </p>
    <label for="fname">
      Name*
      <input
        id="fname"
        v-model="$v.formResponses.name.$model"
        class="border-black border"
        type="text"
      />
    </label>
    <label for="password">
      password*
      <input
        id="password"
        v-model="$v.formResponses.password.$model"
        class="border-black border"
        type="text"
      />
    </label>
  </div>
</template>
<script>
import { required, minLength } from 'vuelidate/lib/validators';

export default {
  data() {
    return {
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
