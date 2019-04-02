import {
    getRecommendList,//在我的组件中，调取为你推荐的接口
    getShopList
} from "@/api/mine/index.js"
export default{
    state:{
        getRecommendListArr:[],
        getShopListArr:[],
        imageUrl:"",
    },
    mutations:{
        getRecommendList(state,params){
            state.getRecommendListArr=params;
        },
        getShopList(state,params){
            state.getShopListArr=params;
            state.imageUrl=params[2].data.imageUrl
            console.log(params)
        }
    },
    actions:{
        async getRecommendList({commit}){
            let data = await getRecommendList();
            commit("getRecommendList",data.data[3].data.items)
        },
        async getShopList({commit},params){
            let data = await getShopList(params);
            commit("getShopList",data.data)
        }
    },
    namespaced:true,
}