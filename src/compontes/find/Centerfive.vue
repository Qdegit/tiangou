<template>

   <div class="sss">
     <div class="center-5-list" v-for="arr in fandList3">
                    <div class="center-5-list-top">
                        <div class="center-5-list-top-img">
                              <img :src="arr.headImageUrl" alt=""/> 
                        </div>

                        <div class="center-5-list-top-page">
                            <div class="center-5-list-top-l">
                                  <h3>{{arr.nickName}}</h3>
                                  <span>{{arr.timeStr}}</span>
                            </div>

                            <div class="center-5-list-top-r">
                                  <span></span>
                            </div>

                        </div>
                        
                    </div>

                   <div class="center-5-list-page">
                        <p>{{arr.content}}</p>
                        <p class="xx iconfont icon-dangmianfu
">{{arr.storeName}}</p>
                    </div>

                    <div class="center-5-list-img">

                        <div class="center-5-list-img-l">
                                <img :src="arr.image.imageUrl"/>
                        </div>

                        <div class="center-5-list-img-r">
                             <img :src="strc.imageUrl" v-for="strc in arr.imageUrls"/>
                        </div>

                    </div>

                    <div class="center-5-list-bottom">
                         <div class="ct-l"> 
                            <p class="iconfont icon-xiaoxi"><span>{{arr.commentSum}}</span></p>
                            <p class="iconfont icon-dingyue"><span>{{arr.browseNum}}</span></p>
                          </div>

                          <div class="ct-r"> 
                              <p><span class="iconfont icon-xinaixin">{{arr.likedSum}}</span></p>
                          </div>

                    </div>
                           
            
  </div>
</div>
</template>
<script>
import vueX from "vuex";
export default {
  name: "centerfive",
  created() {
    this.findata();
   // console.log(this.fandList3)
  },
  methods: {
    ...vueX.mapActions({
      findata: "find/findactions"
    })
  },
  computed: {
    ...vueX.mapState({
      fandList3: state => state.find.findata3
    })
  }
};
</script>
<style lang="scss" scoped>
  .center-5-list {
    width: 100%;
    height: 9rem;
    padding: 0.4rem  0.3rem  0  0.3rem; 
    border-top: 1px solid rgb(236, 236, 236); 
    //background: floralwhite;
    .center-5-list-top {
      width: 100%;
      height: 1rem;
      display: flex;
      //background: darkcyan;
     
      padding: 0.2rem;
      .center-5-list-top-img {
        float: left;
        height: 0.7rem;
        width: 0.7rem;
        //background: darkgoldenrod;
        img {
          width: 0.7rem;
          height: 0.7rem;
          border-radius: 20px;
        }
      }
      .center-5-list-top-page {
        float: right;
        height: 0.7rem;
        width: 6rem;
        //background: darkblue;
      }
      .center-5-list-top-l{
        padding-left:.2rem; 
        h3{
          font-weight: 900;
        }
        span{
          font-size: .2rem;
          color: #999999;
        }
      }


    }


    .center-5-list-page {
      width: 100%;
      height: 1.2rem;
      padding-top: .4rem;
       p{ 
           display: block;
        }
       
      //background: sandybrown;
    }
    .center-5-list-img {
      width: 100%;
      height: 4.4rem;
      padding-top: .4rem;
      padding-bottom: .4rem;
      //background: darkgray;
      .center-5-list-img-l {
        width: 3.98rem;
        height: 3.98rem;
        //display: block;
        float: left;
        overflow: hidden;
        display: flex;
        border-radius:.1rem; 
        //background: darkgreen;
        img {
          width: 100%;
          height: 100%;
          margin-bottom: 0.1rem
        }
      }
      .center-5-list-img-r {
        width: 2.82rem;
        height: 3.98rem;
        //display: block;
        float: right;
        border-radius:.1rem; 
        //background: darkgreen;
        img {
          width: 2.82rem;
          height: 1.94rem;
          border-radius:.1rem; 
          margin-bottom: 0.1rem;
         //background: salmon;
        }
      }
    }
    .center-5-list-bottom {
      padding-top: .4rem;
      font-size: 0.30rem;
      color: #666666;
      .iconfont {
        font-size: 0.30rem;
        color: #666666;
      }
      .ct-l {
        float: left;
        p {
          float: left;
          margin-left: 0.1rem;
          margin-right: 0.3rem;
        }
      }
      .ct-r {
        float: right;
        margin-right: 0.3rem;
        height: 0.5rem;
        width: 1rem;
        border-radius: 5px;
        padding-left: 0.1rem;
        border: 1px solid #6f6f6f;
      }
    }
    .xx{
          color: #25aaff;
          font-size: 11px;
          margin-top: .2rem;
    }
  }

</style>


