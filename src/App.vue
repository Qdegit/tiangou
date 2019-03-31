<template>
  <div id="app">
    <router-view/>
    <Footer/>
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

}

</style>
