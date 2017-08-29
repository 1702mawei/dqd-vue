<template>

        <div class="taoku">
            <img :src="left.img1">
            <p>{{left.mc}}</p>
            <p>{{left.xpr}}</p>
            <del>{{left.ypr}}</del>
            <img :src="left.img2">
            <img :src="left.img3">
          <!--  <img src="../../public/img/new.jpg">
            <p>欧冠授权足球训练裤套装</p>
            <p>￥245</p>
            <del>316</del>
            <img src="../../public/img/duanku.jpg">
            <img src="../../public/img/changku.jpg">-->
        </div>

</template>
<script type="text/ecmascript-6">
    import "../../public/css/public.css";
    import "../../../node_modules/vue/dist/vue.js";
    export default {
        props:["left"]
    }
</script>
<style scoped>

    .taoku{
        width: 4.96rem;
        height:5.85rem;
        flex-grow: 1;
        background: #f4f4f4;
        position: relative;
        margin-right: 0.1rem;
        box-sizing: border-box;
    }
    .taoku img:nth-of-type(1){
        width:0.98rem;
        height:0.72rem;
        position: absolute;
        left: 0;
        top:0;
    }
    .taoku p:nth-of-type(1){
        width:3.92rem;
        height:1.06rem;
        position: absolute;
        left:0.26rem;
        top:1.11rem;
        font-size: 0.46rem;
        color: #323232;
    }
    .taoku p:nth-of-type(2){
        width:1.07rem;
        height:0.4rem;
        position: absolute;
        left:0.26rem;
        top:2.34rem;
        font-size: 0.40rem;
        color: #ff3838;
    }
    .taoku del{
        width:0.7rem;
        height:0.3rem;
        position: absolute;
        left:1.59rem;
        top:2.34rem;
        font-size: 0.3rem;
        color: #bababa;
    }
    .taoku img:nth-of-type(2){
        width:1.92rem;
        height:1.90rem;
        position: absolute;
        left: 0.76rem;
        top:3.43rem;
    }
    .taoku img:nth-of-type(3){
        width:1.29rem;
        height:3.38rem;
        position: absolute;
        left: 2.84rem;
        top:2.43rem;
    }

</style>