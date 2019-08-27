<template>
  <div>About Page</div>
</template>

<script>
import router from "../router";

export default {
  name: "about",
  mounted() {
    this.checkLoggedIn();
  },
  methods: {
    checkLoggedIn() {
      if (!localStorage.token) {
        router.push("jwt-auth");
      }
    }
  }
};
</script>
