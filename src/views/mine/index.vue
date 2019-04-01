<template>
    <div>
        <MyHeader></MyHeader>
        <MyOrder></MyOrder>
        <MyWord></MyWord>
        <MyRecommend></MyRecommend>
    </div>
</template>

<script>
	import MyHeader from "@/components/my/myheader.vue";
	import MyOrder from "@/components/my/myorder.vue";
	import MyWord from "@/components/my/myword.vue";
	import MyRecommend from "@/components/my/myrecommend.vue";
	export default {
		name: "mine",
		components:{
			MyHeader,
			MyOrder,
			MyWord,
			MyRecommend
		}
	}
</script>

<style scoped lang="scss">

</style>