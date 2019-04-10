import {
    getdata,
    getdata2
} from "@/api/find/index.js";


export default {
    state: {
        findata:[],
        findata1:[],
        findata2:[],
        findata3:[],
        findata4:[]
   },
   mutations: {
        findmutations(state,params){
            params.splice(0,2)
            let con = params;
         
            
            state.findata = con[0].data.items
            state.findata1 = con[1].data.items
            state.findata2 = con[3].data.items
            
            let  obj = con.slice(-5).splice(0,3)
            //state.findata3 = [];
            for(var i=0;i<obj.length;i++){
                    var image = obj[i].data.imageUrls[0];
                    var arr = [];
                    obj[i].data.image = image;
                    obj[i].data.imageUrls.shift();
                    arr.push(obj[i].data) 
                    state.findata3 = [...state.findata3,...arr]
                    //console.log(state.findata3)
                    
                }
              
        },
        findmutations2(state,params){
            for(var i=0;i<params.length;i++){
                state.findata4.push(params[i].data)
            }
       // console.log(state.findata4)
        }

    },


   actions: {
     async  findactions({commit},params){
         let  data = await getdata(params);
         //console.log(data.data)
         commit("findmutations",data.data)
     },
     async findactions2({commit},params){
         let  data = await getdata2(params);
         //console.log(data.data)
         commit("findmutations2", data.data)
     }
   },
   namespaced: true
}