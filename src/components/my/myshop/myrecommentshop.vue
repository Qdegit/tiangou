<template>
    <div>
        <header>
            <li>
                <span @click="goBack">&lt;</span>
            </li>
            <h2 :class="Inum===1?'action':''" @click=InumFn(1)>商品</h2>
            <h2 :class="Inum===2?'action':''" @click=InumFn(2)>详情</h2>
            <div class="li">
                <span class="iconfont" v-html="'&#xe661;'"></span>
                <span class="iconfont" v-html="'&#xe637;'"></span>
            </div>
        </header>
        <!-- <Log v-show="Inum===1"></Log>
        <Gin v-show="Inum===2"></Gin> -->
        <div class="img">
            <img :src="this.$store.state.mine.imageUrl" alt="">
            <div class="productName">
                <div class="top">{{this.$store.state.mine.friendTitle}}</div>
                <div class="cen">18</div>
                <div class="bottom">
                    <span>
                        <img src="//image1.51tiangou.com/tgou2/img2/product/default-store.png" alt="">
                    </span>
                    <span>30</span>
                </div>
            </div>
            <div class="flex-container">
                <p>天狗承诺 · 七天退货</p>
                <span class="iconfont">&#xe505;</span>
            </div>
            <div class="size-container">
                <div class="p">
                    <span>选择</span>
                    <span>颜色分类</span>
                    <span>尺寸</span>
                </div>
                <span class="iconfont">&#xe505;</span>
            </div>
            <div class="space-container">
                <div class="p">
                    <span>送至</span>
                    <div class="space">
                        <p>选择地址</p>
                        <p>现货</p>
                    </div>
                </div>
                <span class="iconfont">&#xe505;</span>
            </div>
            <div class="shu-container">
                <p>产品参数</p>
                <span class="iconfont">&#xe505;</span>
            </div>
            <div class="pj-container">
                <div class="p">
                    <p>评价</p>
                    <p>（12）</p>
                </div>
                <div class="span">
                    <span>平均分：</span>
                    <span class="iconfont">&#xe505;</span>
                </div>  
            </div>
            <div class="borderv">
                <div class="p">
                    <img src="" alt="">
                    <div class="shop">
                        <span>选择地址</span>
                        <p>现货现货现货现货现货现货</p>
                    </div>
                </div>
                <div class="span">
                    <button>进入专柜</button>
                </div>
            </div>
        </div>









        <footer>
            <div>
                <img src="//image1.51tiangou.com/tgou2/img2/product/icon-store.png" alt="">
            </div>
            <button>加入购物车</button>
            <button>立即购买</button>
        </footer>
    </div>
</template>
<script>
import Vuex from "vuex";
import { setTimeout } from 'timers';
export default {
    created(){
        this.getShopList(this.$route.query.id);
    },
    data(){
        return{
            Inum:1,
        }
    },
    methods: {
        InumFn(i){
            this.Inum=i
        },
        goBack(){
            this.$router.go(-1);
        },
        ...Vuex.mapActions({
            getShopList:"mine/getShopList",
        })
    },
}
</script>
<style scoped>
header{
    width: 100%;
    height: 0.88rem;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    background: #fff;
    justify-content: space-around;
}
header h2{
    width:1.5rem;
    height: 0.88rem;
    text-align: center;
    line-height: 0.88rem;
    font-weight: 500;
}
header li{
    width: 1.5rem;
    height: 0.88rem;
}
header li span{
    font-size: 0.8rem;
}
header .li{
    width: 1.7rem;
    height: 0.88rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
}
header .li span{
    width: 0.5rem;
    height: 0.5rem;
    font-size: 0.45rem;
}
.img{
    width: 100%;
    height: 100%;
    margin-top: 0.88rem;
    margin-bottom: 1rem;
    overflow: hidden;
    background: #ccc;
}
.img img{
    width:7.5rem;
    height:7.5rem;
    background: #fff;
}
.img .productName{
    width: 7.5rem;
    height: 2.56rem;
    background: #fff;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
}
.img .productName .top{
    width: 7.1rem;
    height: 0.4rem;
    line-height: 0.4rem;
    font-size: 0.28rem;
}
.img .productName .cen{
    width: 7.1rem;
    height: 0.36rem;
    line-height: 0.36rem;
    font-size: 0.28rem;
}
.img .productName .bottom{
    width: 7.1rem;
    height: 0.6rem;
    display: flex;
    align-items: center;
}
.img .productName .bottom span{
    margin-right: 0.1rem;
}
.img .productName .bottom span img{
    width: 0.3rem;
    height: 0.3rem;
}
.img .flex-container{
    width: 7.5rem;
    height: 0.88rem;
    background: #fff;
    margin-top: 0.2rem;
    margin-bottom: 0.2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.img .flex-container p{
    margin-left: 0.2rem;
}
.img .flex-container span{
    margin-right: 0.2rem;
}
.img .size-container{
    width: 7.5rem;
    height: 0.84rem;
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.img .size-container .p{
    margin-left: 0.2rem;
}
.img .size-container span{
    margin-right: 0.2rem;
}
.img .space-container{
    width: 7.5rem;
    height:1.22rem;
    border-top: 1px solid #ebebeb;
    border-bottom: 1px solid #ebebeb;
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.img .space-container .p{
    height: 0.8rem;
    margin-left: 0.2rem;
    display: flex;
    justify-content: space-between;
}
.img .space-container .p .space p{
    width: 1.2rem;
    height: 0.4rem;
}
.img .space-container span{
    margin-right: 0.2rem;
}
.img .shu-container{
    width: 7.5rem;
    height:0.82rem;
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.img .shu-container p{
    margin-left: 0.2rem;
}
.img .shu-container span{
    margin-right: 0.2rem;
}
.img .pj-container{
    width: 7.5rem;
    height: 0.84rem;
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 0.3rem;
    margin-bottom: 0.3rem;
}
.img .pj-container .p{
    margin-left: 0.2rem;
    display: flex;
}
.img .pj-container span{
    margin-right: 0.2rem;
}
.img .borderv{
    width: 7.5rem;
    height:1.44rem;
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.img .borderv .p{
    width: 4.72rem;
    height: 1rem;
    margin-left: 0.2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.img .borderv .p img{
    width: 1rem;
    height: 1rem;
    margin-right: 0.3rem;
    border: 1px solid yellow;
}
.img .borderv .p .shop{
    width: 3.52rem;
    height: 0.86rem;
    margin-right: 0.3rem;
    display: flex;
    flex-wrap: wrap;
}
.img .borderv .span{
    margin-right: 0.2rem;
}
.img .borderv .span button{
    outline: none;
    border: 0;
    background: #fff;
    color: red;
    border: 1px solid rgb(177, 115, 64);
}


























footer{
    width: 100%;
    height: 1rem;
    display: flex;
    justify-content: space-between;
    position: fixed;
    left: 0;
    bottom: 0;
    background: #fff;
}
footer div{
    width: 1rem;
    height: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    
}
footer div img{
    width: 0.56rem;
    height: 0.68rem;
    
}
footer button:nth-child(2){
    width: 3.24rem;
    height: 1rem;
    background: #545C6E;
    color: #fff;
    border: 0;
    outline: none;
}
footer button:nth-child(3){
    width: 3.24rem;
    height: 1rem;
    background: #ff4c48;
    color: #fff;
    border: 0;
    outline: none;
}



.action{
    border-bottom: 2px solid red;
}
</style>
