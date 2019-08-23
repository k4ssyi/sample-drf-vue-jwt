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
      this.$session.start();
      if (!this.$session.has("token")) {
        router.push("jwt-auth");
      }
    }
  }
};
</script>
