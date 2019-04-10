import Vue from 'vue'
import App from './App.vue'
import router from './routers/index'
import store from './store/index'
import BScroll from "@/comm/BScroll"
import Loading from "@/comm/loading"
import LOding  from "@/comm/loding"
Vue.config.productionTip = false;
Vue.component("BScroll",BScroll);
Vue.component("Loading",Loading);
Vue.component("LOding",LOding);
Vue.filter("money",(val)=>{
  return "￥"+val
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
