<template>
    <div>
        <Header title="营养保健"/>
        <section>
            <nav>
                <div class="nav_l">
                    <router-link
                            tag="p"
                            to="/nutrition/comprehensive1"
                    >综合</router-link>
                    <router-link
                            tag="p"
                            to="/nutrition/volume1"
                    >销量</router-link>
                    <router-link
                            tag="p"
                            to="/nutrition/price1">价格
                    </router-link>
                </div>
                <div class="nav_r">
                    <i class="iconfont ">&#xe6ef;</i>
                    <i class="iconfont ">筛选&#xe697;</i>
                </div>
            </nav>
            <keep-alive>
                <router-view></router-view>
            </keep-alive>

            <!--<Nav/>-->
            <!--<div class="con">-->
                <!--<div class="con-shop" v-for="(item,index) in nutionList">-->
                    <!--<div class="con-img">-->
                        <!--<img :src="item.data.imageUrl" alt="">-->
                    <!--</div>-->
                    <!--<div class="con-word">-->
                        <!--<h6><span>{{item.data.storeTag}}</span><p>{{item.data.title}}</p></h6>-->
                        <!--<p><span>一口价</span><span>卷</span></p>-->
                        <!--<b>￥{{item.data.price}}<span>已售<i>{{item.data.soldQty}}</i></span></b>-->
                    <!--</div>-->
                <!--</div>-->
            <!--</div>-->
        </section>
    </div>
</template>

<script>
	import Header from "@/comm/header";
	import Nav from "@/comm/nav";
	import Vuex from "vuex"
	export default {
		name: "nutrition",
		created(){
			this.getnution()
		},
		computed:{
			...Vuex.mapState({
				nutionList : state => state.home.nutionList,
			})
		},
		components:{
			Header,
			Nav
		},
		methods:{
			...Vuex.mapActions({
				getnution:"home/getnution",
			}),
		}
	}
</script>

<style scoped lang="scss">
    section {
        height: 100%;
        width: 100%;
        padding-top: .88rem;
        overflow: auto;
        nav{
            height: .77rem;
            border-bottom: 1px solid #cccccc;
            display: flex;
            .nav_l{
                width: 5rem;
                display: flex;
                align-items: center;
                justify-content: space-around;
                font-size: .28rem;
                color: #666;
                .router-link-active{
                    color: #ff4c48;
                }
            }
            .nav_r{
                width: 3rem;
                display: flex;
                justify-content: space-around;
                align-items: center;
                font-size: .28rem;
                color: #666;
            }
        }
        .con{
            .con-shop{
                padding: .1rem .1rem .1rem .2rem;
                width: 7.6rem;
                height: 2.32rem;
                display: flex;
                border-bottom: 1px solid #cccccc;
                .con-img{
                    width: 2rem;
                    height: 2rem;

                    img{
                        width: 100%;
                        height: 100%;
                    }
                }
                .con-word{
                    width: 5.3rem;
                    height: 2rem;
                    padding: 0 .2rem;
                    h6{
                        margin-top: 0.1rem;
                        width: 4.9rem;
                        height: 1.11rem;
                        span{
                            display: block;
                            width: 1.28rem;
                            height: .36rem;
                            font-size: .2rem;
                            background:#ff4c48 ;
                            color: #ffffff;
                        }
                        p{
                            width: 5rem;
                            height: .72rem;
                            margin-top: -.36rem;
                            line-height: .36rem;
                            font-size: .24rem;
                            text-indent:1.28rem;
                            overflow: hidden;
                            white-space: initial;
                            text-overflow: ellipsis;
                            color: #222222;
                            font-weight: 900;
                        }
                    }
                    p{
                        width: 4.9rem;
                        height: .4rem;
                        span{
                            width: .88rem;
                            height: .36rem;
                            border: 1px solid #ff4c48;
                            font-size: .2rem;
                            color: #ff4c48;
                            margin-right:.1rem ;
                        }
                    }
                    b{
                        display: flex;
                        width: 4.9rem;
                        height: .4rem;
                        color: #ff4c48;
                        font-size: .38rem;
                        span{
                            font-size: .2rem;
                            color: #999;
                            line-height: .4rem;
                            margin:0 .1rem;
                        }
                    }
                }
            }
        }
    }
</style>