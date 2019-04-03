<template>
        <header>
            <i class="iconfont icon-zuo" @touchstart="header"></i>

            <p>{{title}}</p>
            <h2>
                <i class="iconfont icon-gouwuche2
" ></i>
                <i class="iconfont icon-gengduo"></i>
            </h2>
        </header>
</template>

<script>
	export default {
		name: "index",
        props:{
			title:{
				type:String,
                default:"购物去"
            }
        },
        methods:{
            header(){
            	this.$router.push("/home");
            }
        }
	}
</script>

<style scoped lang="scss">
    header{
        height: 0.88rem;
        width: 100%;
        display: flex;
        justify-content: space-between;
        background: #ffffff;
        align-items: center;
        color: #404040;
        position: fixed;
        left: 0;
        top: 0;
        i{
            font-size: 0.4rem;
        }
        p{
            width: 4.3rem;
            height: 100%;
            font-size: .36rem;
            text-align: center;
            line-height: 0.88rem;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
        }
        h2{
            width: 1.2rem;
            display: flex;
            justify-content: space-between;
        }
        padding: 0 2%;
    }
</style>