import Vue from 'vue'
import Vuex from 'vuex'
import home from "./home"
import mine from "./mine/mine.js"
import find from './find';
import ctily from './ctily'

Vue.use(Vuex)

export default new Vuex.Store({

  modules:{
    home,
    mine,
      find,
      ctily
  }
})
