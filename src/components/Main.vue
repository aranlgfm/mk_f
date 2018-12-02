<template lang="pug">
    div
        h1 여기는 대문. 소셜로그인 붙일 것.
        button(@click='login' class='button is-primary') login
</template>

<script>
import axios from "axios";
const DOMAIN = "http://localhost:3500";

export default {
  methods: {
    login() {
      this.$router.push({ name: `Home` });
    }
  }
};
</script>
