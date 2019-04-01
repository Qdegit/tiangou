<template>
    <div class="mycommend">
        <h2>为你推荐</h2>
        <ul>
            <li @click="goMyShop(item.id)" v-for="(item,index) in myrecommentshoplistarr">
                <img :src="item.imageUrl" alt=""/>
                <span>{{item.title}}</span>
                <div>
                    <i>{{item.price}}</i>
                    <b>{{item.originalPrice}}</b>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
import axios from "axios"
export default {
// https://midway.51tiangou.com/mine/index/edit.node?auth=false&_=1553818501103 
    created() {
        this.getMyLists();
    },
    data(){
    	return {
		    myrecommentshoplistarr:[],
        }
    },
    methods: {
        getMyLists(){
            axios.get("/api/mine/index/edit.node").then(({data})=>{
                console.log(111111,data.data[3].data.items)
                this.myrecommentshoplistarr=data.data[3].data.items
            })
        },
        goMyShop(id){
            this.$router.push("/myrecommentshop")
            console.log(222222,id)
        }
    },
}
</script>
<style scoped>
.mycommend{
    width: 100%;
    min-height: 2.54rem;
}
.mycommend h2{
    width: 100%;
    height: 0.88rem;
    padding: 0.2rem;
}
.mycommend ul{
    width: 100%;
    min-height: 2.54rem;
    border: 1px solid black;
    padding: 0 0.2rem 0.2rem 0.2rem ;
    display: flex;
    flex-wrap: wrap;
}
.mycommend ul li{
    width:2.3rem;
    height: 3.52rem;
    border: 1px solid #ccc;
    padding: 0 0.1rem 0.1rem 0 ;
    display: block;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    margin-right: 0.05rem;
}
.mycommend ul li img{
    width:2.26rem;
    height:2.26rem;
    border: 1px solid black;
}
.mycommend ul li span{
    display: block;
    width:2.06rem;
    height:0.4rem;
    font-size: 0.24rem;
    text-align: center;
    line-height: 0.4rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-top: 0.2rem
}
.mycommend ul li div{
    width:2.06rem;
    height:0.36rem;
    display: flex;
    justify-content: center;
    margin-top: 0.1rem
}
.mycommend ul li div i{
    width:0.89rem;
    height:0.36rem;
    margin-right: 0.1rem;
    font-size: 0.24rem;
    text-align: center;
    line-height: 0.36rem;
    color: rgb(134, 111, 9);
    font-style: normal;

}
.mycommend ul li div b{
    width:0.89rem;
    height:0.36rem;
    font-size: 0.24rem;
    text-align: center;
    line-height: 0.36rem;
    color: rgb(15, 147, 170);
    text-decoration: line-through;
    font-weight: 500;
}
</style>
