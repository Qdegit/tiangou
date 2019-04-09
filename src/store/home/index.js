import {
	getHome,
	getshop,
	getsale,
	getmakeup,
	getnution,
	getclean,
	getvolume,
	getprice,
	getvolumea,
	getpricea,
	getvolumeb,
	getpriceb,
	getshopa,
} from "@/api/home"
export default {
	state:{
		classList :[],
		uls : [],
		shops : [],
		shopsa:[],
		classifyimg1:"",
		classifyimg2:"",
		classifyimg3:"",
		classifyimg4:"",
		shopName : "",
		saleList :[],
		makeupList : [],
		nutionList : [],
		cleanList : [],
		volumeList :[],
		priceList :[],
		volumeLista :[],
		priceLista : [],
		volumeListb : [],
		priceListb : [],
	},
	mutations:{
		getHome(state,params){
			state.classList = params[4].data.items;
			state.shopName = params[0].data.storeName;
			state.classifyimg1 = params[5].data.items[0].imageUrl;
			state.classifyimg2 = params[5].data.items[1].imageUrl;
			state.classifyimg3 = params[5].data.items[2].imageUrl;
			state.classifyimg4 = params[5].data.items[3].imageUrl;
		},
		getshop(state,params){
			state.uls = params[0].data.items;
			state.shops = params;
			state.shops.splice(0,1);
			state.shops.pop()
		},
		getshopa(state,params) {
			state.shopaa = params;
			state.shopsa.pop();
			// state.shopsa.concat(state.shops)
		},
		getmakeup(state,params){
			 state.makeupList = params;
			state.makeupList.pop()
		},
		getnution(state,params){
			state.nutionList = params;
			state.nutionList.pop()
		},
		getclean(state,params){
			state.cleanList = params;
			state.cleanList.pop()
		},
		getvolume(state,params){
			state.volumeList = params;
			state.volumeList.pop()
		},
		getprice(state,params){
			state.priceList = params;
			state.priceList.pop()
		},
		getvolumea(state,params){
			state.volumeLista = params;
			state.volumeLista.pop()
		},
		getpricea(state,params){
			state.priceLista = params;
			state.priceLista.pop()
		},
		getvolumeb(state,params){
			state.volumeListb = params;
			state.volumeListb.pop()
		},
		getpriceb(state,params){
			state.priceListb = params;
			state.priceListb.pop()
		}
	},
	actions:{
		async getHome({commit},params){
			let data = await getHome(params);
			// console.log(data);
			commit("getHome",data.data)
		},
		async getshop({commit},params){
			let data = await getshop(params);
			// console.log(data);
			commit("getshop",data.data)
		},
		async getsale({commit},params){
			let data = await getsale(params);
			console.log(data)
		},
		async getmakeup({commit},params){
			let data = await getmakeup(params);
			// console.log(data.data)
			commit("getmakeup",data.data)
		},
		async getnution({commit},params){
			let data = await getnution(params);
			commit("getnution",data.data)
		},
		async getclean({commit},params){
			let data = await getclean(params);
			commit("getclean",data.data)
		},
		async getvolume({commit},params){
			let data = await getvolume(params);
			commit("getvolume",data.data)
		},
		async getprice({commit},params){
			let data = await getprice(params);
			commit("getprice",data.data)
		},
		async getvolumea({commit},params){
			let data = await getvolumea(params);
			commit("getvolumea",data.data)
		},
		async getpricea({commit},params){
			let data = await getpricea(params);
			commit("getpricea",data.data)
		},
		async getvolumeb({commit},params){
			let data = await getvolumeb(params);
			commit("getvolumeb",data.data)
		},
		async getpriceb({commit},params){
			let data = await getpriceb(params);
			commit("getpriceb",data.data)
		},
		async getshopa({commit},params){
			let data = await getshopa(params);
			console.log(data)
			commit("getshopa",data.data)
		}
	},
	namespaced: true
}