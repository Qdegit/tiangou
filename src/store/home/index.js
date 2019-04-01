import {
	getHome,
	getshop
} from "@/api/home"
export default {
	state:{
		classList :[],
		uls : [],
		shops : [],
		shopName : ""
	},
	mutations:{
		getHome(state,params){
			state.classList = params[4].data.items;
			state.shopName = params[0].data.storeName;
		},
		getshop(state,params){
			state.uls = params[0].data.items;
			state.shops = params;
			state.shops.splice(0,1);
			state.shops.pop()
		}
	},
	actions:{
		async getHome({commit},params){
			let data = await getHome(params);
			console.log(data.data);
			commit("getHome",data.data)
		},
		async getshop({commit},params){
			let data = await getshop(params);
			console.log(data.data);
			commit("getshop",data.data)
		}
	},
	namespaced: true
}