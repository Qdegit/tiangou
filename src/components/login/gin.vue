<template>
    <div>
        <form action="">
            <div class="main">
                <div class="p">
                    <img src="//image1.51tiangou.com/tgou2/img2/login/username.svg" alt="">
                    <div>
                        <input type="text" placeholder="请输入11位手机号码" maxlength="11"/>
                    </div>
                </div>
                <div class="p">
                    <img src="//image1.51tiangou.com/tgou2/img2/login/code.svg" alt="">
                    <div>
                        <input type="text" placeholder="请输入验证码" maxlength="4"/>
                    </div>
                </div>
                <div class="p">
                    <img src="//image1.51tiangou.com/tgou2/img2/login/password.svg" alt="">
                    <div>
                        <input type="text" placeholder="请输入随机密码密码" maxlength="4"/>
                    </div>
                </div>
            </div>          
        </form>
        <div class="foot">
            <button>登录</button>
            <p>手机号首次登录将为您自动注册</p>
        </div> 
        <div class="bottom">
            <span>登录即代表您同意</span>
            <a href="protectionProtocol.html">《天狗网隐私保护政策》</a>
        </div> 
    </div>
</template>
<script>
export default {
   
}
</script>
<style scoped>

form{
    width: 7.1rem;
    height: 4rem;
    margin: 0 auto 0;
    border-radius: 0 0 0.2rem 0.2rem;
    border: 0;
    overflow: hidden;
}

form .main{
    width:100%;
    height:3.1rem;
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
}
form .main .p img{
    width:0.4rem;
    height:0.48rem;
}
form .main .p div{
    width:5.8rem;
    height:0.98rem;
    border-bottom: 1px solid #ddd;
    margin-left: 0.3rem;
    display: flex;
    justify-content:flex-start;
    align-items: center;
    background: #fff;
}
form .main .p div input{
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
    justify-content: flex-start;
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
    width: 4rem;
    height: 0.32rem;
    text-align: center;
    line-height: 0.32rem;
    margin-top: 0.1rem;
    font-size: 0.28rem;
}


div .bottom{
    width: 100%;
    height:4.13rem;
    display: flex;
    justify-content: center;
    align-items: flex-end;
}
div .bottom span{
    width: 3rem;
    height: 0.8rem;;
    font-size: 0.28rem;
    text-align: right;
}
div .bottom a{
    width: 3.3rem;
    height: 0.8rem;;
    font-size: 0.28rem;
    text-align: left;
}

</style>
