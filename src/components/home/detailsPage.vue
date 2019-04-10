<template>
    <div id="con">
        <section>
            <Header title="商品"/>
            <article>
                <div class="swiper-container shopImg">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide"><img :src="detailImg"></div>

                    </div>
                    <!-- 如果需要分页器 -->
                    <div class="swiper-pagination banner-pagination"></div>

                </div>
                <div class="shopDetail">
                    <div class="shopDetail_top"><span>￥{{detailList.price}}</span><i>{{detailList.soldStr}}</i></div>
                    <div class="shopDetail_con"><h6>{{detailList.title}}</h6><p>{{detailList.promotion}}</p></div>
                    <div class="shopDetail_bot">{{detailList.provider}}</div>
                </div>
                <div class="shopPromise">天狗承诺  •  七天退换 <i class="iconfont">&#xe505;</i></div>
                <div class="shopPromise">选择 <i class="iconfont">&#xe505;</i></div>
                <div class="shopPromise">暂无评价 <i class="iconfont">&#xe505;</i></div>
            </article>
            <footer>
                <span class="spanOne">加入购物车</span>
                <span class="spanTwo">立即购买</span>
            </footer>
        </section>
    </div>
</template>

<script>
    import Header from "@/comm/header";
    import Vuex from "vuex"
    import Swiper from "swiper";
    import "swiper/dist/css/swiper.css";
	export default {
		name: "detailsPage",
        activated(){
		    // console.log(111111,this.$route.query.id)
            this.getDetail(this.$route.query.id)
        },
		components:{
	        Header,
			Swiper
        },
        computed:{
            ...Vuex.mapState({
                detailImg : state => state.home.detailImg,
                detailList : state => state.home.detailList,
            })
        },
        methods:{
            ...Vuex.mapActions({
                getDetail:"home/getDetail",
            }),
        },
		updated() {
			if (!this.swiper) {
				this.swiper = new Swiper(this.$refs.shopImg, {
					loop: true,
					autoplay: {
						disableOnInteraction: false
					},
					pagination: {
						el: ".banner-pagination"
					}
				});
			}
		}
	}
</script>

<style scoped lang="scss">
    #con{
        height: 100%;
        padding-top: .88rem;
        padding-bottom: 1.08rem;
        section {
            height: 100%;
            width: 100%;
            background: #f5f2f0;
            overflow: auto;
            .shopImg{
                width: 100%;
                height: 7.5rem;
                background: #E60044;
                img{
                    width: 100%;
                    height: 100%;
                }
            }
            .shopDetail{
                width: 100%;
                height: 2.56rem;
                background: #ffffff;
                border-top: .01rem solid #cccccc;
                padding: .2rem;
                .shopDetail_top{
                    height: .4rem;
                    display: flex;
                    justify-content: space-between;
                    span{
                        color:#ff4c48 ;
                        font-size: .3rem;
                    }
                }
                .shopDetail_con{
                    height: .96rem;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-around;
                    h6{
                        font-size: .28rem;
                        color: #222222;
                        line-height: 0.4rem;
                    }
                    p{
                        font-size: 0.26rem;
                        color: #666666;
                        line-height: .36rem;
                    }
                }
                .shopDetail_bot{
                    height: .6rem;
                    font-size: .26rem;
                    color: #666666;
                    line-height: .6rem;
                }
            }
            .shopPromise{
                width: 100%;
                height: .88rem;
                margin-top: .2rem;
                background: #ffffff;
                line-height: .88rem;
                display: flex;
                justify-content: space-between;
                padding: 0 .2rem;
            }
        }
        footer{
            height: 1.08rem;
            width: 100%;
            position: fixed;
            left: 0;
            bottom: 0;
            display: flex;
            span{
                height: 100%;
                width: 50%;
                color: #fff;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 0.3rem;
            }
            .spanOne{
                background: #545C6E;
            }
            .spanTwo{
                background: #ff4c48;
            }
        }
    }


</style>