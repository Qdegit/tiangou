import {ctilyList} from "@/api/ctily/index.js"
    export default {
        state:{
    
            ctilyList:JSON.parse(window.sessionStorage.getItem("ctilyList")) || [],       
        },
        mutations: {
            ctilymutations(state,params){
                state.ctilyList = params.ctily_list
            }
        },
        actions: {
            async  ctilyactions({commit},params){
                let  data = await ctilyList(params);
                var ctily_list = [];//存放城市
                for(var i=0;i<data.data.length;i++){
                    var con = data.data[i].code.slice(0,1)
                   // console.log(con)
                    if(toIndex(con)){
                            for(var j=0;j<ctily_list.length;j++){
                                if(ctily_list[j].index == con){
                                    ctily_list[j].list.push({name:data.data[i].name});
                                    break;
                                }
                            }
                    }else{
                        ctily_list.push({index:con,list:[{name:data.data[i].name}]}) 
                      
                    }
                    

                }

                function toIndex(con){
                    for(var i=0;i< ctily_list.length;i++){
                        if(con ==  ctily_list[i].index){
                            return true;
                        }
                    }
    
                    return false;
                }
                
                 ctily_list.sort((a,b)=>{
                    if(a.index > b.index){
                        return 1;
                    }else{
                        return -1;
                    }
                })
               // console.log( ctily_list)
                 window.sessionStorage.setItem("ctilyList",JSON.stringify(ctily_list));
                commit("ctilymutations",{ctily_list:ctily_list})
            },

        },

        namespaced: true


    }