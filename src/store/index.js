import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tabBarShow: true
  },
  mutations: {
    changeTabshow(state) {
      state.tabBarShow = false
    },
    changeTabnone(state) {
      state.tabBarShow = true
    },
  },
  actions: {
  },
  modules: {
  }
})
