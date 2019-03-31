<template>
    <footer>
        <router-link
                class="box"
                v-for="(item,index) in arr"
                :class="activeIndex == index ?'active':''"

                :to="item.to" tag="div"
                @onclick="head(index)">
            <i :class="item.i"></i>
            <p>{{item.p}}</p>
        </router-link>
    </footer>
</template>

<script>
    export default {
        name: "index",
        data(){
            return{
                arr : [
                    {i: "iconfont icon-shangcheng",p:"逛商场",to:"/home"},
                    {i: "iconfont icon-xiangji",p:"发现",to :"/find"},
                    {i: "iconfont icon-shangpin",p:"购物",to: "/shop"},
                    {i: "iconfont icon-haiwaigou",p:"全球购",to :"/overseas"},
                    {i: "iconfont icon-Icon_wode",p:"我的",to: "/mine"}
                ],
                activeIndex : 0,
            }
        },
        methods:{
            head(n){
                this.activeIndex = n;
                this.$emit("headl",n);
            }
        }
    }
</script>

<style scoped lang="scss">
    footer{
        width: 100%;
        height: 1rem;
        border-top:1px solid #f1f1f1;
        background: #ffffff;
        display: flex;
        position: fixed;
        left: 0;
        bottom: 0;
        .box{
            width: 18%;
            margin: 1%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            i{
                font-size: .4rem;
            }
            font-size: .3rem;
            color: #666;

        }
        .router-link-active{
            color: #e33;
        }
    }
</style>