<template>
  <v-app>
    <v-app-bar app>
      <v-spacer></v-spacer>
      <v-spacer>
        <router-link :to="{name: 'about'}">
          <p>About</p>
        </router-link>
      </v-spacer>

      <div v-if="!isLoggedIn">
        <v-btn color="blue" dark target="_blank" @click="clickLogin">
          <span class="mr-2">Login</span>
        </v-btn>
      </div>
      <div v-if="isLoggedIn">
        <v-btn color="red" dark target="_blank" @click="clickLogout">
          <span class="mr-2">Logout</span>
        </v-btn>
      </div>
    </v-app-bar>

    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "app",
  computed: {
    username: function() {
      return this.$store.getters["username"];
    },
    isLoggedIn: function() {
      if (this.$store.getters["isLoggedIn"] && localStorage.token != null){
        return true
      } else {
        return false
      }
    }
  },
  methods: {
    // ログアウト押下
    clickLogout() {
      // 認証トークンを削除
      localStorage.removeItem("token");
      // storeのユーザ情報をクリア
      this.$store.commit("clear");
      this.$router.replace("/jwt-auth");
    },
    // ログイン押下
    clickLogin() {
      this.$router.replace("/jwt-auth");
    }
  }
};
</script>
