import http from "@/utils/http.js";

export const getOverseasData = ()=> http ("get","/api/overseas/main/tab.node?cityId=2554&selected=true&pid=12&cid=-1&index=1&_=1554111434898");