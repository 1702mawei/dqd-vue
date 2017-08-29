<template>
            <div class="topBox">
                <img :src="rightli.img1">
                <p>{{rightli.mc}}</p>
                <p>￥{{rightli.xpr}}</p>
                <del>{{rightli.ypr}}</del>
                <img :src="rightli.img2">
                <img :src="rightli.img3">
            </div>
</template>
<script type="text/ecmascript-6">
    import "../../public/css/public.css";
    import "../../../node_modules/vue/dist/vue.js";
    export default {
        props:["rightli"]
    }
</script>
<style scoped>
    .topBox{
        width:4.97rem;
        height:2.76rem;
        position: relative;
        margin-bottom: 0.3rem;
        background: #f4f4f4;
    }
    .topBox img:nth-of-type(1){
        width:0.98rem;
        height:0.72rem;
        position: absolute;
        left: 0;
        top:0;
    }
    .topBox img:nth-of-type(2){
        width:2.56rem;
        height:0.52rem;
        position: absolute;
        right:0;
        top:0;
    }
    .topBox p:nth-of-type(1){
        width:2.5rem;
        height:0.82rem;
        position: absolute;
        left:0.26rem;
        top:0.82rem;
        font-size: 0.36rem;
        color: #323232;
    }
    .topBox p:nth-of-type(2){
        width:1.07rem;
        height:0.4rem;
        position: absolute;
        left:0.26rem;
        top:1.96rem;
        font-size: 0.40rem;
        color: #ff3838;
    }
    .topBox del{
        width:0.7rem;
        height:0.3rem;
        position: absolute;
        left:1.59rem;
        top:1.96rem;
        font-size: 0.3rem;
        color: #bababa;
    }
    .topBox img:nth-of-type(3) {
        width: 1.55rem;
        height: 2.04rem;
        position: absolute;
        right: 0.08rem;
        bottom: 0.26rem;
    }
</style>