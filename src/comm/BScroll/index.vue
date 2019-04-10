<template>
    <div class="wrapper" ref="wrapper">
        <slot></slot>
    </div>
</template>

<script>
    import BScroll from "better-scroll";
	export default {
		name: "index",
        mounted(){
			this.scroll = new BScroll(this.$refs.wrapper,{
				click:true,
				tap:true,
				pullUpLoad: true
            });
            //console.log(this.scroll)

        },
        methods:{
	        getshopa() {
		        this.scroll.on("pullingUp", () => {
			        this.$store.dispatch("home/getshop");
		        });
	        },

	        update(){
		        //当数据加载完毕以后
		        this.scroll.finishPullUp();
	        },
	        getih(){
		        this.scroll.refresh();
	        },
            hande(t) {
                this.scroll.scrollTo(0, -t, 500);
            },
            loding() {
                this.scroll.on("pullingUp", () => {
                    this.$store.dispatch("find/findactions");
                    //console.log(1);
                });
            },
            chenok(){
                this.scroll.finishPullUp();
            }
        }
	}
</script>

<style scoped>
    .wrapper{
        height: 100%;

    }
</style>