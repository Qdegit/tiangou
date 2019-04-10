<template>
    <div class="find">
     
        <div id="top"  class="top">
            <div class="top-left">
                <!-- 空的为了做左右频移 -->
            </div>

            <div class="top-center">
            <router-link class="city" tag="div" to="/ctily">
                <h2>北京市</h2>
            </router-link>
                 <h2 class="iconfont icon-xia"></h2>
            </div>
          
                 <router-view></router-view>
            
            <div class="top-right">
                <p class="iconfont icon-tamenduyongguo"></p>
                <p  class="iconfont icon-Icon_wode "></p>
            </div>
        </div>

      
         <!--中间 -->
         <div id="center" class="center">
            <div class="center-1">
                    <!-- class="con"vue加路由  tag="a" -->
                    <keep-alive>
                      <Topnav/>    
                   </keep-alive> 
            </div>

            <div class="center-2">
             
               <div class="center-2-r">  
                    <img src="https://img1.tg-img.com/seller/201904/04/3CCC5EC4-E0EE-42F9-91D7-3E031975D301.png!y" alt="">
                </div>
            

               <div class="center-2-l">
                        <img src="https://img1.tg-img.com/seller/201904/04/027A07C6-2C25-4228-82FB-83296C7AB6C9.jpg!y" alt="">
                        <img src="https://img1.tg-img.com/seller/201904/03/C0129951-3522-4E1F-99EA-83DB235BE7CA.jpg!y" alt="">
                </div>
                
            </div>

            <div class="center-3">
                <div class="center-3-img">
                    <img src="https://img1.tg-img.com/seller/201904/03/7BF321EA-FB94-4888-88F0-E55368AC9834.png!y" alt="">
                </div>
            </div>

            <div class="center-4">
                  <p v-for="intem in fandList2">
                      <img :src="intem.imageUrl">
                  </p>

            </div>

            <div class="center-5">
              <LOding v-if="chengloding"/>
              <BScroll ref="movewrap">
             
                 <div class="center-5-page"> 
                            <keep-alive>
                                <Centerfive @fandList3/> 
                            </keep-alive>
                         
                  </div>
             </BScroll>
            </div>
            
              <!-- 测试接口专用
              <div class="c">
                  
            </div> -->

        </div>
    
</div>
</template>
<script>
import vueX from "vuex";
import Topnav from "@/compontes/find/topnav.vue";
import Centerfive from "@/compontes/find/Centerfive.vue"
export default {
  name: "find",
  data(){
    return {
        chengloding:true
    }
  },
  created(){
    this.findata2(); 
  
    //console.log(this.fandList3)
  },
  methods: {
    ...vueX.mapActions({
      findata2: "find/findactions2"
    })
  },
  watch:{
        fandList3(){
          this.chengloding = false;
          this.$refs.movewrap.chenok()
        }
  },
  mounted(){
    this.$refs.movewrap.loding() 
   
  
  },
  computed: {
    ...vueX.mapState({
      fandList2: state => state.find.findata2,
      fandList3: state => state.find.findata3
    })
    
  },
  components:{
    Topnav,
    Centerfive
    
  },
   beforeRouteEnter(to,from,next){
          document.title = to.meta.title
          next()
   },
  
};
</script>

<style scoped lang="scss">
.iconfont {
  font-size: 0.6rem;
}

.find {
  width: 100%;
  height: 100%;
  //background: darkcyan;
  padding-bottom: 1rem;
  //position:relative; 
  //overflow:auto;
}
#top {
  width: 100%;
  height: 1rem;
  background: white;
  position: fixed;
  top: 0;
   left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  z-index:100;

  .top-left {
    width: 20%;
    /* background:sandybrown; */
    height: 0.9rem;
  }
  .top-center {
    width: 50%;
    /* background: olive; */
    display: flex;
    /* justify-content: space-between; */
    align-items: center;
    font-size: 18px;
    padding-left: 20%;
    color: #6f6f6f;
  }
  .top-right {
    width: 30%;
    /* background: salmon; */
    display: flex;
    align-items: center;
    font-size: 18px;
  }
  .top-right > p {
    padding-left: 20%;
  }
}

/* /////////////////////////////////////// */
#center {
      padding-top: 1rem;
      padding-bottom: 3rem;
      width: 100%;
      height: 100%;
      //background: gray;
    .center-2 {
      width: 100%;
      height: 4rem;
      display: flex;
      z-index: 80;
      /* justify-content: space-between; */
      align-items: center;
    }
    .center-2-r > img {
      width: 3.75rem;
      height: 4rem;
    }
    .center-2-l > img {
      width: 3.75rem;
      height: 2rem;
    }
    .center-3 {
      width: 100%;
      height: 2rem;
      margin-top: 0.1rem;
      margin-bottom: 0.1rem;
      z-index: 63
    }
    .center-3 > .center-3-img {
      width: 100%;
      height: 2rem;
    }
    .center-3-img > img {
      width: 100%;
      height: 2rem;
    }

    .center-4 {
      height: 4.8rem;
      width: 100%;
      z-index: 62
    }
    .center-4 > p {
      width: 3.75rem;
      height: 2.44rem;
      float: left;
    }
    .center-4 > p > img {
      width: 3.75rem;
      height: 2.44rem;
    }
    .center-5 {
      width: 100%;
      height: 100%;
      position: relative;
      padding-bottom:3rem ;
      overflow: hidden;
      //background: darkcyan;
    }
}
</style>