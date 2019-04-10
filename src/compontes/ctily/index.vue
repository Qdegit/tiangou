<template>
    <div class="ctily">
         <div class="ctliyTop">
             <i class="iconfont icon-zuo" @touchstart="this.Routerback"></i>
             <h2>选择门店</h2>
         </div>
         <div class="beforeCtliy">
             <p class="before-p">当前城市 ：<span class="displace">可替换城市</span></p>
         </div>
          
          <BScroll ref="BScroll">
            <div class="ctily-list" ref="city_list">
             
                <div class="ctily-itme" v-for="(arr,index) in  ctilyList">
                    <h2 class="ctily-itme-page">{{arr.index}}</h2>
                    <div class="ctily-itme-list">
                            <div :class="ctliyindex" 
                            v-for="(itme,index) in arr.list" 
                            @touchstart="CityTored(index)"
                            >{{itme.name}}</div>
                    </div>
                </div> 
             
            </div>
          </BScroll>
         <div class="ctily-left">
           <ul>
              <li v-for="(item,index) in ctilyList"  @touchstart="Check(index)">{{item.index}}</li>
          </ul> 
         </div>
        
    </div>
</template>
<script>
import vue from "vue";
import vueX from "vuex";
export default {
  name: "ctily",
  beforeRouteEnter(to, from, next) {
    document.title = to.meta.title;
    next();
  },
  data() {
    return {
      ctliyindex: "ctliy-index"
    };
  },
  created() {
    this.getCtily();
  },
  computed: {
    ...vueX.mapState({
      ctilyList: state => state.ctily.ctilyList
    })
  },
  methods: {
    ...vueX.mapActions({
      getCtily: "ctily/ctilyactions"
    }),
    Routerback() {
      this.$router.back();
    },
    Check(index){
    let  on =  this.$refs.city_list.getElementsByTagName("h2")[index].offsetTop
    this.$refs.BScroll.hande(on) 
    
    }
    
  }
};
</script>
<style lang="scss" scoped>
.ctily {
  width: 100%;
  height: 100%;
  background: rgb(238, 238, 238);
  position: relative;
  .ctliyTop {
    width: 100%;
    height: 0.88rem;
    background: white;
    border-bottom: 0.01rem solid rgb(214, 214, 214);
    display: flex;
    position: fixed;
    z-index: 80;
    top: 0;
    left: 0;
    //justify-content: space-around;
    align-items: center;
    i {
      width: 0.8rem;
      height: 100%;
      font-size: 0.36rem;
      text-align: center;
      line-height: 0.88rem;
    }
    h2 {
      flex: 1;
      text-align: center;
      font-size: 0.36rem;
      margin-right: 0.8rem;
    }
  }
  .beforeCtliy {
    width: 100%;
    height: 0.72rem;
    display: flex;
    padding: 0.2rem;
    background: white;
    font-size: 0.24rem;
    position: fixed;
    top: .88rem;
    left: 0;
    z-index: 69;
    .displace {
      color: red;
    }
  }
  .ctily-list {
    margin-top: 0.2rem;
    width: 100%;
    min-height: 1rem;
    padding-right: .5rem;
    background: white;
  margin-top:1.72rem; 
    .ctily-itme-page {
      width: 100%;
      height: 0.61rem;
      background: #fafafa;
      padding: 0.1rem 0 0.1rem 0.3rem;
      font-size: 0.3rem;
    }
    .ctily-itme-list {
      width: 100%;
      min-height: 0.9rem;
      background: white;
    }
    .ctily-itme-list > div {
      width: 100%;
      height: 0.9rem;
      padding: 0.2rem 0.3rem;
      font-size: 0.24rem;
      color: #666;
      //line-height:.90rem;
      border-bottom: 1px solid #ebebeb;
    }
  }
  .ctily-left {
    position: fixed;
    right: 0;
    top: 1.8rem;
    z-index: 6;
    border-left:2px solid #ebebeb
  }
  .ctily-left > ul > li {
    padding: 0.14rem 0.12rem;
    text-align: center;
  }
}
</style>