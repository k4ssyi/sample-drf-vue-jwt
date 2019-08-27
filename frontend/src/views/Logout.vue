<template>
  <p>ログアウトします</p>
</template>

<script>
import router from "../router";

export default {
  name: "Auth",
  mounted() {
    this.tokenDeleteLogout();
  },
  methods: {
    tokenDeleteLogout() {
      if (localStorage.token) {
        localStorage.removeItem("token");
        router.push("/");
      } else {
        router.push("/jwt-auth");
      }
    }
  }
};
</script>
