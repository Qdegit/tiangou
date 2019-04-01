<template>
    <div>
        <header>
            <li>
                <span @click="goMy">&lt;</span>
            </li>
            <h2>免费注册</h2>
            <li></li>
        </header>
        <form action="">
            <div class="main">
                <div class="p">
                    <img src="//image1.51tiangou.com/tgou2/img2/login/icon-tel.png" alt="">
                    <input type="text" placeholder="请输入11位手机号码" maxlength="11"/>
                </div>
                <div class="p">
                    <img src="//image1.51tiangou.com/tgou2/img2/login/icon-pass.png" alt="">
                    <input type="text" placeholder="请输入6-16位字母数字组合密码" maxlength="16"/>
                </div>
                <div class="p">
                    <img src="//image1.51tiangou.com/tgou2/img2/login/icon-code.png" alt="" />
                    <input type="text" placeholder="请输入验证码" maxlength="4"/>
                </div>
                <div class="p">
                    <img src="//image1.51tiangou.com/tgou2/img2/login/icon-code.png" alt="" />
                    <input type="text" placeholder="请输入随机密码" maxlength="4"/>
                </div>
            </div>          
        </form>
        <div class="bottom">
            <span>我已阅读并同意</span>
            <a href="terms.html">《使用条款》</a>和
            <a href="protectionProtocol.html">《天狗网隐私保护政策》</a>
        </div>
        <div class="foot">
            <button>注册</button>
            <p> ©2014 51tiangou</p>
        </div> 
    </div>
</template>
<script>
export default {
    methods: {
        goMy(){
            this.$router.push("/my")
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
    width: 1.76rem;
    height: 0.88rem;
}
header li span{
    font-size: 0.8rem;
}





form{
    width: 7.1rem;
    height: 4rem;
    margin: 0 auto 0;
    border-radius: 0 0 0.2rem 0.2rem;
    border: 0;
    overflow: hidden;
}

form .main{
    width:7.1rem;
    height: 1.96rem;
    padding: 0 0.3rem 0 0.3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    background: #fff;
}
form .main .p{
    width:7.1rem;
    height:0.98rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #fff;
    border-bottom: 1px solid #ddd;
}
form .main .p img{
    width:0.4rem;
    height:0.48rem;
}
form .main .p input{
    width:5.8rem;
    height:0.56rem;
    font-size: 0.28rem;
    border: 0rem;
    outline: none;
}
.foot{
    width: 7.1rem;
    height: 1.6rem;
    margin:0.4rem auto 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    overflow: hidden;
}
.foot button{
    width: 7.1rem;
    height: 0.92rem;
    background: rgb(184, 160, 160);
    border-radius: 0.2rem;
    padding: 0.16rem 0.3rem 0.16rem 0.3rem;
    text-align: center;
    border: 0;
    color: #fff;
    font-size: 0.36rem;
    outline: none;
}
.foot p{
    width: 3rem;
    height: 0.32rem;
    text-align: center;
    line-height: 0.32rem;
    margin-top: 0.1rem;
    font-size: 0.28rem;
}



div .bottom{
    width:7.1rem;
    height:0.4rem;
    display: flex;
    margin: 0 auto;
}
div .bottom span{
    width: 1.84rem;
    height: 0.4rem;;
    font-size: 0.24rem;
}
div .bottom a:nth-child(2){
    width:1.48rem;
    height: 0.4rem;;
    font-size: 0.24rem;
}
div .bottom a:nth-child(3){
    width: 3.3rem;
    height: 0.4rem;;
    font-size: 0.24rem;
}

</style>
