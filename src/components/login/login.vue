<template>
    <div>
        <header>
            <img src="//image1.51tiangou.com/tgou2/img2/login/logo.svg" alt="">
        </header>
        <div class="head">
            <h4>
                <p :class="Inum===1?'active':''" @click="fn(1)">账号密码登录</p>
            </h4>
            <h4>
                <p :class="Inum===2?'active':''" @click="fn(2)">手机快捷登录</p>
            </h4>
        </div>
        <Log v-show="Inum===1"></Log>
        <Gin v-show="Inum===2"></Gin>
    </div>
</template>
<script>
import Log from "./log.vue"
import Gin from "./gin.vue"
export default {
    data() {
        return {
            Inum:1,
        }
    },
    methods: {
        fn(index){
            console.log(1111111)
            this.Inum=index;
        }
    },
    components:{
        Log,
        Gin
    }
}
</script>
<style scoped>
div{
    width: 100%;
    height: 100%;
    background: #ccc;
    overflow: hidden;
}
header{
    width: 100%;
    height: 3.2rem;
    background: red;
    overflow: hidden;
}
header img{
    width: 2.62rem;
    height: 1.3rem;
    margin: 0.5rem auto 0;
}

.head{
    width:7.1rem;
    height: 0.9rem;
    border-radius: 0.2rem 0.2rem 0 0;
    margin: -0.9rem auto 0;
    border: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #fff;
    overflow: hidden;
}
.head h4{
    width: 3.5rem;
    height: 0.84rem;
    display: flex;
    justify-content: center;
}
.head h4 p{
    width:1.92rem;
    height: 0.84rem;
    text-align: center;
    line-height: 0.84rem;
    font-size:0.32rem;
    font-weight: 100;
}







.active{
    border-bottom: 1px solid red;
}
</style>
