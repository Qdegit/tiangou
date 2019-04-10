import {getOverseasData} from "@/api/overseas"
export default{
  state: {
    bannerList:[],
    imgList:[],
  },
  mutations: {
    getOverseasData(state,params){
      state.bannerList = params[0].data.items;
      let arr = params[5].data.items.shift();
      let brr = params[5].data.items;
      let crr =[];
      for(var i=0;i<brr.length;i++){
        //  console.log(brr[i].imageUrl)
         crr.push(brr[i].imageUrl)
      }
      let obj = {};
      obj.bImg = arr.imageUrl;
      obj.sImg = crr;
      state.imgList.push(obj);
      // console.log(arr.imageUrl,crr);
      console.log(state.imgList[0],state.imgList); 

      let drr = params[6].data.items.shift();
      let err = params[6].data.items;
      let frr = [];
      for(var i=0;i<err.length;i++){
        //  console.log(brr[i].imageUrl)
        frr.push(err[i].imageUrl)
      }
      let obj2 = {};
      obj2.bImg = drr.imageUrl;
      obj2.sImg = frr;
      state.imgList.push(obj2)
    }
  },
  actions: {
      async getOverseasData({commit}) {
          let data = await getOverseasData()
          // console.log(data.data)
          commit("getOverseasData",data.data)
      },
  },
  namespaced: true
}