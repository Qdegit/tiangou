<template>
    <div id="con">
        <section>
            <Header title="商品"/>
            <article>
                <div class="swiper-container shopImg">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide"><img src="//img1.tg-img.com/seller/201805/22/B14DD39A-107B-4F2F-B5EF-4440503A3091.jpg!y" alt=""></div>
                        <div class="swiper-slide"><img src="//img1.tg-img.com/seller/201805/22/B14DD39A-107B-4F2F-B5EF-4440503A3091.jpg!y" alt=""></div>
                        <div class="swiper-slide"><img src="//img1.tg-img.com/seller/201805/22/B14DD39A-107B-4F2F-B5EF-4440503A3091.jpg!y" alt=""></div>
                    </div>
                    <!-- 如果需要分页器 -->
                    <div class="swiper-pagination banner-pagination"></div>

                </div>
                <div class="shopDetail">
                    <div class="shopDetail_top"></div>
                    <div class="shopDetail_con"></div>
                    <div class="shopDetail_bot"></div>
                </div>
                <div class="shopPromise">天狗承诺  •  七天退换</div>
                <div class="shopPromise">选择</div>
                <div class="shopPromise">暂无评价</div>
            </article>
        </section>
    </div>
</template>

<script>
    import Header from "@/comm/header";
    import Swiper from "swiper";
    import "swiper/dist/css/swiper.css";
	export default {
		name: "detailsPage",
		components:{
	        Header,
			Swiper
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
        section {
            height: 100%;
            width: 100%;
            background: #cccccc;
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
                background: #0086b3;
                border-top: .01rem solid #cccccc;
                padding: .2rem;
                .shopDetail_top{
                    height: .4rem;
                    background: #fff;
                }
                .shopDetail_con{
                    height: .96rem;
                    background: #ccc;
                }
                .shopDetail_bot{
                    height: .6rem;
                    background: #fff;
                }
            }
            .shopPromise{
                width: 100%;
                height: .88rem;
                margin-top: .2rem;
                background: #f1f1f1;
                line-height: .88rem;
            }
        }
    }


</style>