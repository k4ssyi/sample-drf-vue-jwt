<template>
  <v-app>
    <v-app-bar app>
      <v-spacer></v-spacer>
      <v-spacer>
        <router-link :to="{name: 'about'}">
          <p>About</p>
        </router-link>
      </v-spacer>

      <div v-if="is_login">
        <router-link :to="{name: 'jwtAuth'}">
          <v-btn color="blue" dark target="_blank" @click="is_session">
            <span class="mr-2">Login</span>
          </v-btn>
        </router-link>
      </div>
      <div v-if="is_logout">
        <router-link :to="{name: 'logout'}">
          <v-btn color="red" dark target="_blank" @click="is_session">
            <span class="mr-2">Logout</span>
          </v-btn>
        </router-link>
      </div>
    </v-app-bar>

    <v-content>
      <Home :is_login="is_login" :is_logout="is_logout" />
    </v-content>
  </v-app>
</template>

<script>
import Home from "./views/Home";

export default {
  components: {
    Home
  },
  name: "home",
  data: () => ({
    is_login: false,
    is_logout: false
  }),
  mounted() {
    this.is_session();
  },
  watch: {
    is_login() {
      this.is_session();
    }
  },
  methods: {
    is_session() {
      if (localStorage.token) {
        this.is_logout = true;
      } else {
        this.is_login = true;
      }
    }
  }
};
</script>
