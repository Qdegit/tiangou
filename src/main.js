import Vue from 'vue'
import App from './App.vue'
import router from './routers/index'
import store from './store/index'

Vue.config.productionTip = false
Vue.filter("money",(val)=>{
  return "￥"+val
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
