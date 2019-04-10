<template>
        <div class="swiper-container" ref="banner">
              <div class="swiper-wrapper con" >
                  <div class="swiper-slide"  v-for="items in fandList">
                        <img :src="items.imageUrl" >
                  </div>
  
              </div>

              <div class="swiper-pagination banner-pagination"></div>

        </div>
  
</template>
<script>
import vue from "vue";
import vueX from "vuex";
import Swiper from "swiper";
import "swiper/dist/css/swiper.css";
export default {
  name: "tapnav",
  created() {
    this.findata();
  },
  methods: {
    ...vueX.mapActions({
      findata: "find/findactions"
    })
  },
  computed: {
    ...vueX.mapState({
      fandList: state => state.find.findata
    })
  },

  updated() {
    if (!this.swiper) {
      this.swiper = new Swiper(this.$refs.banner, {
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

};
</script>
<style lang="scss" scoped>
.con {
  width: 100%;
  height: 4.4rem;
  img {
    width: 100%;
    height: 4.4rem;
  }

}
</style>


