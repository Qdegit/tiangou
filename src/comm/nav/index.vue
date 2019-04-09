<template>
    <nav>
        <div class="nav_l">
            <p>综合</p>
            <p>销量</p>
            <p>价格</p>
        </div>
        <div class="nav_r">
            <i class="iconfont ">&#xe6ef;</i>
            <i class="iconfont ">筛选&#xe697;</i>
        </div>
    </nav>
</template>

<script>
	export default {
		name: "index"
	}
</script>

<style scoped lang="scss">
    nav{
        height: .77rem;
        border-bottom: 1px solid #cccccc;
        display: flex;
        .nav_l{
            width: 5rem;
            display: flex;
            align-items: center;
            justify-content: space-around;
            font-size: .28rem;
            color: #666;
        }
        .nav_r{
            width: 3rem;
            display: flex;
            justify-content: space-around;
            align-items: center;
            font-size: .28rem;
            color: #666;
        }
    }
</style>