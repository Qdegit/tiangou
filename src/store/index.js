import Vue from 'vue'
import Vuex from 'vuex'
import home from "./home"
import mine from "./mine/mine.js"
Vue.use(Vuex)

export default new Vuex.Store({
  state: {

  },
  mutations: {

  },
  actions: {

  },
  modules:{
    home,
    mine
  }
})
