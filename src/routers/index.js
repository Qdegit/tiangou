import Vue from 'vue'
import Router from 'vue-router'
import Home from './home'
import Find from "./find"
import Shop from "./shop"
import Over from "./overseas"
import Mine from "./mine"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:"/home"
    },
	  Home,
	  Find,
	  Shop,
	  Over,
	  Mine,
    {
      path:"**",
        redirect:"/home"
    }
  ]
})
