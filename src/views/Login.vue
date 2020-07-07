<template>
  <div class="login">
    <h1>Login</h1>
    <SigninButton @click.native="login()"></SigninButton>
  </div>
</template>

<script>
import { auth, googleProvider } from '@/initFirebase';
import SigninButton from '@/components/SigninButton.vue';
import store from '@/store';

export default {
  name: 'Login',
  components: {
    SigninButton,
  },
  methods: {
    login() {
      auth.signInWithPopup(googleProvider)
        .then((result) => {
          store.dispatch("fetchUser", result.user);
          this.$router.push('/');
        })
        .catch((err) => alert(`Something went wrong: ${err.message}`));
    },
  },
};
</script>
