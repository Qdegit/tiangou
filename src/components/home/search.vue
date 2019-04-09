<template>
    <div>
        <nav>
            <div>
                <input type="text" placeholder="搜索超市商品">
            </div>
            <i class="iconfont">&#xe65c;
            </i>
        </nav>
    </div>
</template>

<script>
	export default {
		name: "search"
	}
</script>

<style scoped lang="scss">
    nav{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-left: 0.3rem;
        height: 1rem;
        border-bottom: 1px solid #cccccc;
        input{
            width: 6.3rem;
            height: 0.56rem;
            line-height: 0.5rem;
            font-size: .3rem;
        }
        i{
            width: 0.8rem;
            height: 0.56rem;
            text-align: center;
            line-height: 0.56rem;
            font-weight: 700;
            color: #999;
        }
    }
</style>