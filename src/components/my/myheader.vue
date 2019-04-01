<template>
    <div class="my">
        <header>
            <div class="wrap"></div>
            <div class="head">
                <div class="top">
                    <div class="left">
                        <img src="//image1.51tiangou.com/tgou2/img2/mine/defaultPhoto.png" alt="">
                        <h3 @click="login">登录/注册</h3>
                    </div>
                    <span class="iconfont" v-html="'&#xe639;'"></span>
                </div>
                <div class="bottom">
                    <li>
                        <span>会员卡</span>
                        <p>—</p>
                    </li>
                    <li>
                        <span>优惠券</span>
                        <p>—</p>
                    </li>
                    <li>
                        <span>签到积分</span>
                        <p>—</p>
                    </li>
                </div>
            </div>
        </header>
    </div>
</template>
<script>
export default {
    methods: {
        login(){
            this.$router.push("/login")
        }
    },
}
</script>
<style scoped>
.my header{
    width: 100%;
}
.my header .wrap{
    width: 100%;
    height: 1.68rem;
    background: red;
}
.my header .head{
    width: 7.1rem;
    height: 2.24rem;
    background: #fff;
    margin:-0.6rem auto 0;
}
.my header .head .top{
    width:100%;
    height:1.08rem;
    display: flex;
    justify-content: space-between;
}
.my header .head .top .left img{
    width:1.08rem;
    height:1.08rem;
    float: left;
    border-radius: 50%;
    margin-top: -0.3rem;
    margin-left: 0.2rem;
}
.my header .head .top .left h3{
    width:1.4rem;
    height:0.4rem;
    float: left;
    margin-top: 0.2rem;
    font-size: 0.28rem;
    font-weight: 100;
    text-align: center;
    line-height: 0.4rem;
}
.my header .head .top span{
    display: block;
    width:0.52rem;
    height:0.52rem;
    margin-top: 0.2rem;
    margin-right: 0.2rem;
    font-size: 0.48rem;
    color: red;
}
.my header .head .bottom{
    width:100%;
    height:0.84rem;
    display: flex;
    justify-content: space-between;
}
.my header .head .bottom li{
    width:33.3%;
    height:0.84rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}
.my header .head .bottom li span{
    width:100%;
    height:0.34rem;
    text-align: center;
    line-height: 0.34rem;
    font-size: 0.28rem;
}
.my header .head .bottom li p{
    width:100%;
    height:0.4rem;
    text-align: center;
    line-height: 0.4rem;
}
</style>
