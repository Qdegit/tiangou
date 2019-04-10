import http from "@/utils/http.js";
export const ctilyList = ()=>http("get","/capi/publics/city/hot/list?pageCount=999&_=1554563386165");