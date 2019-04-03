<template>
    <div>
        <Header title="家具清洁"/>
        <section>
            <nav>
                <div class="nav_l">
                    <router-link
                            tag="p"
                            to="/Clean/comprehensive2"
                    >综合</router-link>
                    <router-link
                            tag="p"
                            to="/Clean/volume2"
                    >销量</router-link>
                    <router-link
                            tag="p"
                            to="/Clean/price2">价格
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
                <!--<div class="con-shop" v-for="(item,index) in cleanList">-->
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
		name: "clean",
		created(){
			this.getclean()
		},
		computed:{
			...Vuex.mapState({
				cleanList : state => state.home.cleanList,
			})
		},
		components:{
			Header,
			Nav
		},
		methods:{
			...Vuex.mapActions({
				getclean:"home/getclean",
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

    }
</style>