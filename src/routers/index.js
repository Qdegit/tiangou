import Vue from 'vue'
import Router from 'vue-router'
import Home from './home'
import Find from "./find"
import Shop from "./shop"
import Over from "./overseas"
import sale from "./home/sale"
import makeup from "./home/makeup"
import Nutrition from "./home/nutrition"
import Clean from "./home/clean"
import Fiery from "./home/fiery"
import Search from "./home/search"
import Maplist from "./home/maplist"
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
	  sale,
	  makeup,
	  Nutrition,
	  Clean,
	  Fiery,
	  Search,
	  Maplist,
    {
      path:"**",
        redirect:"/home"
    }
  ]
})
