<template>
    <div>
        <Header title="折扣排行">
        </Header>
        <section>
            <nav>
                <div>
                    <input type="text" placeholder="搜索超市商品">
                </div>
                <i class="iconfont">&#xe65c;
                </i>
            </nav>
            <div class="con">
                <div class="con_shop">
                    <div class="con_img" >
                        <img src="//image1.51tiangou.com/seller/201710/23/99E68DD6-AF29-451D-B637-60970AB74BE8.jpg!m" alt="">
                    </div>
                    <div class="con_word">
                        <h6>双汇台湾风味香肠</h6>
                        <p>￥9.9<span>14.8</span><i>6.7折</i></p>
                        <b>月销<span>188</span></b>
                        <div class="pic">
                            NO.
                            <span>1</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    import Header from "@/comm/header";
    import Vuex from "vuex"
	export default {
		name: "sale",
        created(){
		    this.getsale()
        },
		components:{
	        Header
        },
        methods:{
	        ...Vuex.mapActions({
		        getsale:"home/getsale",

	        }),
        }
	}
</script>

<style scoped lang="scss">
    section{
        height: 100%;
        width: 100%;
        padding-top: .88rem;
        nav{
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding-left: 0.3rem;
            height: 1rem;
            border-bottom: 1px solid #cccccc;
            input{
                width: 6.3rem;
                height: 0.56rem;
                line-height: 0.5rem;
                font-size: .3rem;
            }
            i{
                width: 0.8rem;
                height: 0.56rem;
                text-align: center;
                line-height: 0.56rem;
                font-weight: 700;
                color: #999;
            }
        }
        .con{
            padding: 0 .23rem;
            .con_shop{
                width: 100%;
                height: 3rem;
                border-bottom: 1px solid #cccccc;
                display: flex;
                align-items: center;
                .con_img{
                    width: 2.46rem;
                    height: 2.46rem;
                    img{
                        width: 100%;
                        height: 100%;
                    }
                }
                .con_word{
                    width: 4.32rem;
                    height: 2.46rem;
                    position: relative;
                    h6{
                        height: .8rem;
                        font-size: .28rem;
                        color: #3e3e3e;
                    }
                    p{
                        display: flex;
                        align-items: center;
                        height: .5rem;
                        font-size: 0.36rem;
                        color: #ff6565;
                        margin-bottom: .2rem;
                        span{
                            font-size: .24rem;
                            color: #999;
                            margin: 0 .1rem;
                            text-decoration: line-through
                        }
                        i{
                            display: flex;
                            width: 0.8rem;
                            height: .4rem;
                            background:#ff6565 ;
                            color: #ffffff;
                            font-size: 0.3rem;
                            align-items: center;
                            justify-content: center;
                        }
                    }
                    b{
                        display: flex;
                        height: .42rem;
                        font-size: 0.24rem;
                        color: #999;
                    }
                    .pic{
                        width: 5rem;
                        height: .64rem;
                        background: url(//image1.51tiangou.com/tgou2/img2/supermarket/bg_paiming.png) no-repeat;
                        background-size: 100% 1.4rem;
                        line-height: .64rem;
                        padding-right: .5rem;
                        position: absolute;
                        bottom: -.23rem;
                        text-align: right;
                        color: #ffffff;
                    }
                }
            }
        }
    }
</style>