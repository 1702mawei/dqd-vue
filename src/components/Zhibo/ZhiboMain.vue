<template>
    <div class="swiper-container content">
        <div class="swiper-wrapper">
            <zhibo-main-first :manlilist="mianlist"></zhibo-main-first>
            <zhibo-main-second></zhibo-main-second>
            <zhibo-main-third :mianlis2="mianlist1"></zhibo-main-third>
            <zhibo-main-fourth :mianlis3="mianlist2"></zhibo-main-fourth>
            <zhibo-main-fifth></zhibo-main-fifth>
            <zhibo-main-sixth :mianlis4="mianlist3"></zhibo-main-sixth>
        </div>
    </div>
</template>
<script type="text/ecmascript-6">
    import ZhiboMainFirst  from "./ZhiboMainFirst.vue"
    import ZhiboMainSecond  from "./ZhiboMainSecond.vue"
    import ZhiboMainThird  from "./ZhiboMainThird.vue"
    import ZhiboMainFourth  from "./ZhiboMainFourth.vue"
    import ZhiboMainFifth  from "./ZhiboMainFifth.vue"
    import ZhiboMainSixth  from "./ZhiboMainSixth.vue"
    import "../../public/js/swiper.min.js";
    import "../../public/css/swiper.min.css"
    export default {
        props:['mianlist','mianlist1','mianlist2','mianlist3'],
        components:{
            ZhiboMainFirst,
            ZhiboMainSecond,
            ZhiboMainThird,
            ZhiboMainFourth,
            ZhiboMainFifth,
            ZhiboMainSixth
        },
        mounted:function () {
            let mySwiper = new Swiper('.content', {
                //autoplay:1000,//可选选项，自动滑动
                //loop:true  //循环播放

                onSlideChangeStart:function(sw) {
                    let index = sw.activeIndex;//当前运动页面的index
                    // console.log(index);
                    $(".p").eq(index).addClass("selected").siblings().removeClass("selected");
                },
            });
            // -------------点击时对应到所对应的页面上-------
            $(".p").click(function(){
                $(this).addClass("selected").siblings().removeClass("selected");
                mySwiper.slideTo($(this).index());
            });
        }

    }
</script>

<style scoped>
    .content{
        width:100%;
    }

    .data p{
        width:100%;
        height:0.94rem;
        background:#e9e9e9;
        line-height:0.94rem;
        text-align: center;
        color: #2f2f2f;
        font-size: 0.37rem;
        font-weight: bold;
    }
    .tainxia{
        background-color: #f7f7f7;
        height: 2.65rem;
        width:100%;
        position: relative;
        border-bottom: solid 2px #e9e9e9;
    }
    .tainxia img {
        position: absolute;
        width: 1.98rem;
        height: 0.73rem;
        left:0.77rem;
        top: 0.96rem;
    }
    .tainxia p:nth-of-type(1){
        height:0.4rem;
        position: absolute;
        left:4.47rem;
        top:0.4rem;
        font-size: 0.4rem;
        color: #878787;
    }
    .tainxia p:nth-of-type(2){
        height:0.4rem;
        position: absolute;
        left:3.77rem;
        top:1.13rem;
        font-size: 0.4rem;
        color: #878787;
    }
    .tainxia p:nth-of-type(3){
        height:0.4rem;
        position: absolute;
        left:4.75rem;
        top: 1.82rem;
        font-size: 0.4rem;
        color: #878787;
    }
    .qiudui{
        background-color: #f7f7f7;
        height: 2.8rem;
        width:100%;
        position: relative;
        border-bottom: solid 2px #e9e9e9;
    }
    .qiudui img:nth-of-type(1){
        position: absolute;
        width: 1.07rem;
        height: 1.25rem;
        left:1.2rem;
        top: 0.42rem;
    }
    .qiudui img:nth-of-type(2){
        position: absolute;
        width: 1.07rem;
        height: 1.25rem;
        right:1.29rem;
        top: 0.42rem;
    }
    .qiudui p:nth-of-type(1){
        height:0.4rem;
        position: absolute;
        left:4.3rem;
        top: 0.43rem;
        font-size: 0.4rem;
        color: #878787;
    }
    .qiudui p:nth-of-type(2){
        height:0.53rem;
        position: absolute;
        left:4.9rem;
        top: 1.05rem;
        font-size: 0.53rem;
        color: #565656;
        font-weight: bold;
    }
    .qiudui p:nth-of-type(3){
        height:0.38rem;
        position: absolute;
        left:4.92rem;
        top: 2.02rem;
        font-size: 0.38rem;
        color: #878787;
    }
    .qiudui span:nth-of-type(1){
        height:0.36rem;
        position: absolute;
        left:0.92rem;
        bottom: 0.53rem;
        font-size: 0.36rem;
        color: #2e2e2e;
        font-weight: bold;
    }
    .qiudui span:nth-of-type(2){
        height:0.36rem;
        position: absolute;
        right:1.3rem;
        bottom: 0.53rem;
        font-size: 0.36rem;
        color: #2e2e2e;
        font-weight: bold;
    }
    .weixinbi img{
        width:100%;
        height:1.57rem;
    }
    .qiuduiy{
        background-color: #f7f7f7;
        height: 2.8rem;
        width:100%;
        position: relative;
        border-bottom: solid 2px #e9e9e9;
    }
    .qiuduiy img:nth-of-type(1){
        position: absolute;
        width: 1.07rem;
        height: 1.25rem;
        left:1.01rem;
        top: 0.42rem;
    }
    .qiuduiy img:nth-of-type(2){
        position: absolute;
        width: 1.07rem;
        height: 1.25rem;
        right:1.39rem;
        top: 0.42rem;
    }
    .qiuduiy p:nth-of-type(1){
        height:0.4rem;
        position: absolute;
        left:4.3rem;
        top: 0.43rem;
        font-size: 0.4rem;
        color: #878787;
    }
    .qiuduiy p:nth-of-type(2){
        height:0.53rem;
        position: absolute;
        left:4.9rem;
        top: 1.05rem;
        font-size: 0.53rem;
        color: #565656;
        font-weight: bold;
    }
    .qiuduiy img:nth-of-type(3){
        height:0.58rem;
        width:2.48rem;
        position: absolute;
        left: 4.02rem;
        top: 2.02rem;
        font-size: 0.38rem;

    }
    .qiuduiy span:nth-of-type(1){
        height:0.36rem;
        position: absolute;
        left:0.92rem;
        bottom: 0.53rem;
        font-size: 0.36rem;
        color: #2e2e2e;
        font-weight: bold;
    }
    .qiuduiy span:nth-of-type(2){
        height:0.36rem;
        position: absolute;
        right:1.3rem;
        bottom: 0.53rem;
        font-size: 0.36rem;
        color: #2e2e2e;
        font-weight: bold;
    }
    .guanzhu p{
        margin: 0 auto;
        color: #150808;
        font-size: 0.5rem;
        width: 7.8rem;
        text-align: center;
        font-weight: bold;
        margin-top: 5rem;
    }
    .zhongchao p{
        margin: 0 auto;
        color: #150808;
        font-size: 0.5rem;
        width: 7.8rem;
        text-align: center;
        font-weight: bold;
        margin-top: 5rem;
    }
</style>
