<template>
  <div class="login">
    <h1>Login</h1>
    <button @click="login()">Login with google</button>
  </div>
</template>

<script>
import { auth, googleProvider } from '@/initFirebase';

export default {
  name: 'Login',
  data() {
    return {
      form: {},
      error: null,
    };
  },
  methods: {
    login() {
      auth.signInWithPopup(googleProvider)
        .then()
        .catch((err) => alert(`Something went wrong: ${err.message}`));
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
