<template>
  <div class="overseas">
    <div class="header">
      <i class="iconfont">&#xe6ef;</i>
      <div class="header_input">
        <i class="iconfont">&#xe616;</i>
        <div>
          <p>瑞思雅D钙67元</p>
        </div>
      </div>
      <i class="iconfont">&#xe661;</i>
    </div>
    <!-- 轮播图 -->
    <div class="swiper-container overseasBanner" ref="homeContainer">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item,index) in bannerList">
          <img :src="item.imageUrl">
        </div>
      </div>
      <!-- 如果需要分页器 -->
    <div class="swiper-pagination" overseasPage></div>
    </div>
    <div class="banner2">
            <div><img src="https://img1.tg-img.com/seller/201903/13/4FCC7E37-81A5-45C5-B24A-53202BFC3D86.png!y" alt=""></div>
    </div>
    <!-- 一个大图加几个小图  -->
  
    <div class="banner4" v-for="(item,index) in imgList ">
    <div class="bImg">
      <img :src="item.bImg" >
    </div>    
    <div class="sImg">
      <div class="sImg_list">
        <ul>
          <li v-for="(data,index) in item.sImg">
            <img alt="" :src="data">
          </li>
        </ul>        
       </div>
     </div>
    </div>
 
 <!--  -->

</div>

</template>

<script>
import Vuex from "vuex";
import Swiper from "swiper";
import "swiper/dist/css/swiper.css";
export default {
  name: "overseas",
  created() {
    this.OverseasData();
  },
  updated() {
    if (!this.swiper) {
      this.swiper = new Swiper(this.$refs.homeContainer, {
        autoplay: {
          disableOnInteraction: false,
        },
        pagination: {
          el:".swiper-pagination"
        }
      });
    }
  },
  computed: {
    ...Vuex.mapState({
      bannerList:state => state.overseas.bannerList,
      imgList:state => state.overseas.imgList
    })
  },
  methods: {
    ...Vuex.mapActions({
      OverseasData: "overseas/getOverseasData"
    })
  }
};
</script>
<style scoped lang="scss">
.overseas {
  height: 100%;
  margin-bottom: 1rem;
  .header {
    height: 0.88rem;
    width: 100%;
    position: fixed;
    left: 0;
    top: 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background: #fff;
    z-index:20;
    .header_input {
      width: 82%;
      height: 0.52rem;
      background: #f4f4f4;
      display: flex;
      align-content: center;
      p {
        line-height: 0.52rem;
        color: #cdcdcd;
      }
    };
     i{
        font-size: 0.44rem;
        margin-left: 0.2rem;
        margin-right: 0.2rem;
        color: #cdcdcd;
        font-size: 0.44rem;
      }
  }
}
.overseasBanner > div > div > img {
  height: 3.96rem;
  width: 100%;
  margin-top: 1rem;
}

.banner2 {
  height: 2rem;
  width: 100%;
  margin-bottom: 0.2rem;
  div > img {
    height: 100%;
    width: 100%;
  }
}
.banner2>div>img{
  height:100%;
  width:100%;
}
.banner4>.bImg>img{
  height:3.2rem;
  width:100%;
}
.sImg{
  height:3.16rem;
  overflow: hidden;
 }
 .sImg>.sImg_list>ul{
  height:100%;
  display: flex;
  flex-wrap:nowrap;
}
.sImg>.sImg_list>ul>li{
  height:100%;
  margin-top:.2rem;
  margin-left:.2rem;
  border:1px solid #ccc;
}
.sImg>.sImg_list>ul>li>img{
  height:2.8rem;
  width:2rem;
}
</style>
