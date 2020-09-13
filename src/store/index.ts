import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    info: {
      name: "",
      age: ''
    }
  },
  mutations: {
    setInfo(state,info) {
      state.info = info
    }
  },
  
  actions: {
    updateInfo({commit},info) {
      commit('setInfo',info)
    },

  },
  modules: {
  }
})
