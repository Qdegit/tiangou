import http from "@/utils/http.js";
export const getRecommendList = ()=>http("get","/api/mine/index/edit.node");
export const getShopList = (id)=>http("get","/api/product/listing/init.node?id="+id+"&depot=true&_=1554203144950");