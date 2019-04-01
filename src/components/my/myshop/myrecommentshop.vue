<template>
    <div>
        <header>
            <li>
                <span @click="goBack">&lt;</span>
            </li>
            <h2>商品</h2>
            <div class="li">
                <span class="iconfont" v-html="'&#xe661;'"></span>
                <span class="iconfont" v-html="'&#xe637;'"></span>
            </div>
        </header>
        
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
export default {
    methods: {
        goBack(){
            this.$router.go(-1)
        }
    },
}
</script>
<style scoped>
header{
    width: 100%;
    height: 0.88rem;
    display: flex;
    justify-content: space-around;
}
header h2{
    width:4.3rem;
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




footer{
    width: 100%;
    height: 1rem;
    display: flex;
    justify-content: space-between;
    position: fixed;
    left: 0;
    bottom: 0;
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
</style>
