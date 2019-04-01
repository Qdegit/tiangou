<template>
    <div class="home">
        <div class="con">
            <header>
                <div class="top">
                    <div class="top_l">
                        <i class="iconfont icon-shangcheng"></i>
                        <span>{{shopName}}<i class="iconfont ">&#xe60c;
</i></span>
                    </div>
                    <div class="top_r">
                        <i
                                v-for="item in is"
                                :class="item"
                        ></i>
                    </div>
                </div>
                <div class="bot">
                    <h3 v-for="(item,index) in bot">
                        <i :class="item.i"></i>
                        <span>{{item.span}}</span>
                    </h3>
                </div>
            </header>
            <nav>
                <div class="show" v-for="(item,index) in classList">
                    <h3>
                        <img :src="item.imageUrl" alt="">
                    </h3>
                    <p>{{item.title}}</p>
                </div>
            </nav>
            <div class="site">
                <router-link class="site_l"
                             to="/fiery" tag="div"
                >
                    <img src="//img1.tg-img.com/seller/201903/18/74B7F7C8-F6C2-426B-A5DB-9C4FCBA3ADA3.jpg!y" alt="">
                </router-link>
                <div class="site_r">
                    <router-link class="site_r_t"
                                 to="/Beauty" tag="div"
                    >
                        <img src="//img1.tg-img.com/seller/201903/18/8E7EFEE9-DCDB-4627-B7E8-FD8F000496CB.jpg!y" alt="">
                    </router-link>
                    <div class="site_r_b">
                        <img src="//img1.tg-img.com/seller/201903/18/4AE04B36-5C0D-47B1-B7D0-AD285A0DF5DE.jpg!y" alt="">
                        <img src="//img1.tg-img.com/seller/201903/18/225CA405-BD91-4792-BFC2-1A54D6A1BA58.jpg!y" alt="">
                    </div>
                </div>
            </div>
            <div class="commodity">
                <div class="commodity_t">
                    <ul><li v-for="item in uls">{{item.title}}</li></ul>
                </div>
                <div class="commodity_b">
                    <div class="commodity_box" v-for="(item,index) in shops">
                        <img :src="item.data.imageUrl" alt="">
                        <p>{{item.data.title}}</p>
                        <h6><b>{{item.data.price | toPrice}}</b><i class="iconfont icon-gouwuche2"></i></h6>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
	// @ is an alias to /src

    import Vuex from "vuex";
	export default {
		name: 'home',
        created(){
		    this.getHome()
            this.getshop()
        },
        computed:{
            ...Vuex.mapState({
                classList : state => state.home.classList,
                shopName : state => state.home.shopName,
                uls : state => state.home.uls,
                shops : state => state.home.shops
            })
        },
        methods:{
            ...Vuex.mapActions({
	            getHome:"home/getHome",
	            getshop:"home/getshop"
            })
        },
        filters:{
		    toPrice(val){
		    	return "￥"+val
            }
        },
		data(){
			return{
				is : ["iconfont icon-sousuo1","iconfont icon-gouwuche2","iconfont icon-xiaoxi"],
				bot : [
					{i:"iconfont icon-zhekouzhuang",span : "折扣排行"},
					{i:"iconfont icon-saoma",span : "扫码购"},
					{i:"iconfont icon-huiyuan",span : "会员权益"},
					{i:"iconfont icon-fukuanma",span : "结算码"}
				],
			}
		},
		components: {

		}
	}
</script>
<style lang="scss">
    .home{
        height: 100%;
        background: #ffffff;
        overflow: auto;
        padding-bottom: 1rem;
    }
    .con{
        header{
            height: 2.6rem;
            background: #ff4c48;
            border-bottom: 0.16rem solid #eee;
            .top{
                height: 0.8rem;
                display: flex;
                padding: 0.2rem;
                justify-content: space-between;
                align-items: center;
                i{font-size: 0.45rem;
                    color: #ffffff;
                    margin: .1rem;
                }
                span{
                    font-size: .28rem;
                    color: #ffffff;
                    i{
                        font-size: 0.4rem;
                        margin: 0;
                    }
                }
            }
            .bot{
                height: 1.68rem;
                display: flex;
                align-items: center;
                justify-content: center;
                color: #ffffff;
                h3{
                    display: flex;
                    width: 20%;
                    margin: 0 2%;
                    flex-direction: column;
                    align-items: center;
                    i{font-size: 0.72rem}
                    span{font-size: 0.26rem}
                }
            }
        }
        nav{
            height: 4rem;
            border-bottom: 0.16rem solid #eee;
            display: flex;
            flex-wrap: wrap;
            .show{
                width: 20%;
                height: 1.8rem;
                margin: 0 2.2%;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                h3{
                    width: 1rem;
                    height: 1rem;
                    border-radius: 50%;
                    img{
                        width: 100%;
                        height: 100%;
                    }
                }
                p{color: #333333}
            }
        }
        .site{
            height: 3.8rem;
            border-bottom: 0.16rem solid #eee;
            display: flex;
            img{
                width: 100%;
                height: 100%;
            }
            .site_l{
                width: 40%;
                border-right:1px solid #f1f1f1 ;
            }
            .site_r{
                width: 60%;
                .site_r_t{
                    height: 1.6rem;
                    border-bottom:1px solid #f1f1f1 ;
                }
                .site_r_b{
                    height: 2rem;
                    display: flex;
                    img{
                        width: 50%;
                        height: 100%;
                        border-left:1px solid #f1f1f1 ;
                    }
                }
            }
        }
        .commodity{
            min-height: 5rem;
            .commodity_t{
                height: 0.8rem;
                background: #ffffff;
                padding: 0 3%;
                ul{
                    height: 100%;
                    width: 94%;
                    display: flex;
                    flex-wrap: nowrap;
                    overflow: auto;
                    li{color: #333333;
                        margin: 0 0.2rem;
                        height: 100%;
                        line-height: 0.8rem;
                        flex-shrink: 0;
                    }
                }
            }
            .commodity_b{
                display: flex;
                flex-wrap: wrap;
                .commodity_box{
                    width: 40%;
                    height: 4.8rem;
                    margin: 0 5% 0.5rem 5%;
                    border: 1px solid #f1f1f1;
                    display: flex;
                    flex-direction: column;
                    color: #222222;
                    h6{
                        display: flex;
                        justify-content: space-between;
                        i{
                            width: 0.4rem;
                            height: 0.4rem;
                            background: #222222;
                            border-radius: 50%;
                            color: #ffffff;
                            text-align: center;
                            line-height: 0.5rem;
                        }
                    }
                    img{
                        width: 100%;
                        height: 3.2rem;
                    }
                    p{
                        height: 0.8rem;
                    }
                }
            }
        }
    }
</style>