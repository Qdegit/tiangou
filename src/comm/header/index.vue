<template>
    <div>
        <header>
            <i class="iconfont icon-zuo"></i>
            <p></p>
            <h2>
                <i class="iconfont icon-gouwuche2
" ></i>
                <i class="iconfont icon-gengduo"></i>
            </h2>
        </header>
    </div>
</template>

<script>
	export default {
		name: "index"
	}
</script>

<style scoped lang="scss">
    header{
        height: 0.88rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: #404040;
        position: fixed;
        left: 0;
        top: 0;
        i{
            font-size: 0.4rem;
        }
        p{
            display: flex;
            width: 4rem;
            height: 100%;
            align-items: center;
            font-size: 18px;
            margin-left: 1rem;
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