<template>
  <p>ログアウトします</p>
</template>

<script>
import router from "../router";

export default {
  name: "Auth",
  mounted() {
    this.sessionDeleteLogout();
  },
  methods: {
    sessionDeleteLogout() {
      this.$session.start();
      if (this.$session.has("token")) {
        this.$session.remove("token");
        router.push("/");
      } else {
        router.push("/jwt-auth");
      }
    }
  }
};
</script>
