import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [createPersistedState({key: 'AuthUser'})],
  namespaced: true,
  state: {
    username: '',
    isLoggedIn: false
  },
  getters: {
    username: state => state.username,
    isLoggedIn: state => state.isLoggedIn
  },
  mutations: {
    set (state, payload) {
      state.username = payload
      state.isLoggedIn = true
    },
    clear (state) {
      state.username = ''
      state.isLoggedIn = false
    }
  },
  actions: {
    //
  }
})
