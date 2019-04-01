import Vue from 'vue'
import Router from 'vue-router'
import Home from './home'
import Find from "./find"
import Shop from "./shop"
import Over from "./overseas"
import Mine from "./mine"
import Login from "./mine/login/login.js"
import Sign from "./mine/login/sign.js"
import Myrecommentshop from "./mine/login/myrecommentshop.js"

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
	  Login,
	  Sign,
	  Myrecommentshop,

    {
      path:"**",
        redirect:"/home"
    }
  ]
})
