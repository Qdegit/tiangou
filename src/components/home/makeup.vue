<template>
    <div class="box">
        <Header title="美妆个护"/>
        <section>
            <nav>
                <div class="nav_l">
                    <router-link
                        tag="p"
                        to="/Makeup/comprehensive"
                    >综合</router-link>
                    <router-link
                        tag="p"
                        to="/Makeup/volume"
                    >销量</router-link>
                    <router-link
                            tag="p"
                            to="/Makeup/price">价格
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

            <!--<div class="con">-->
                <!--<div class="con-shop" v-for="(item,index) in makeupList">-->
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
	import Vuex from "vuex";
	export default {
		name: "makeup",
		created(){
			this.getmakeup()
		},
		computed:{
			...Vuex.mapState({
				makeupList : state => state.home.makeupList,
			})
		},
		components:{
			Header
		},
		methods:{
			...Vuex.mapActions({
				getmakeup:"home/getmakeup",
			}),
		}
	}
</script>

<style scoped lang="scss">
    .box{
        height: 100%;
        padding-top: .88rem;
    }
    section {
        height: 100%;
        width: 100%;

        /*overflow: auto;*/
        nav{
            position: fixed;
            left: 0;
            top: .88rem;
            z-index: 4;
            height: .77rem;
            background: #ffffff;
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

    }
</style>