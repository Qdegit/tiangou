<template>
  <div id="app">
    <keep-alive>
      <router-view/>
    </keep-alive>
    <Footer v-show="this.$route.meta.flag"/>
  </div>
</template>
<script>
    import Footer from "@/comm/footer";
    export default {
    	name:"app",
        components:{
	        Footer
        }
    }
</script>
<style lang="scss">
#app {
  height: 100%;
}

</style>
