<template>
    <div class="myorder">
        <div class="top">
            <h2>我的订单</h2>
            <div class="right">
                <p>全部订单</p>
                <span>&gt;</span>
            </div>
        </div>
        <ul>
            <li>
                <img src="//image1.51tiangou.com/tgou2/img2/mine/icon-pay_1.png" alt=""/>
                <p>待支付</p>
            </li>
            <li>
                <img src="//image1.51tiangou.com/tgou2/img2/mine/icon-pay_2.png" alt=""/>
                <p>待发货</p>
            </li>
            <li>
                <img src="//image1.51tiangou.com/tgou2/img2/mine/icon-pay_3.png" alt=""/>
                <p>待收货</p>
            </li>
            <li>
                <img src="//image1.51tiangou.com/tgou2/img2/pingjia_icon@2x.png" alt=""/>
                <p>待评价</p>
            </li>
            <li>
                <img src="//image1.51tiangou.com/tgou2/img2/mine/icon-pay_4.png" alt=""/>
                <p>退款/退货</p>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.myorder{
    width: 7.1rem;
    height: 2.26rem;
    margin: 0.2rem auto 0;
}
.myorder .top{
    width: 100%;
    height: 0.88rem;
    display: flex;
    justify-content: space-between;
    padding: 0.2rem;
}
.myorder .top h2{
    width: 1.36rem;
    height:0.48rem;
    font-size:0.24rem;
    text-align: center;
    line-height: 0.48rem;
    font-weight: 900;
}
.myorder .top .right{
    width: 1.2rem;
    height:0.34rem;
    font-size:0.24rem;
    display: flex;
    justify-content: space-between;
}
.myorder .top .right p{
    color: #ccc
}
.myorder .top .right span{
    color: #ccc
}
.myorder ul{
    width: 100%;
    height: 1.38rem;
    display: flex;
    justify-content: space-between;
}
.myorder ul li{
    width: 20%;
    height: 1.38rem;
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items: center;
}
.myorder ul li img{
    width:0.4rem;
    height:0.4rem;
}
.myorder ul li p{
    width:100%;
    height:0.54rem;
    font-size: 0.24rem;
    line-height: 0.24rem;
    text-align: center;
    font-weight: 900;
    padding: 0.1rem 0 0.1rem 0;
    color: #aaa;
}
</style>
