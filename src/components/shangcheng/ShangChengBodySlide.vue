<template>
    <div class="swiper-container lunbo">
        <div class="swiper-wrapper">
            <div class="swiper-slide pic1"></div>
            <div class="swiper-slide pic2"></div>
            <div class="swiper-slide pic3"></div>
            <div class="swiper-slide pic4"></div>
            <div class="swiper-slide pic5"></div>
        </div>
        <div  class="swiper-pagination"></div>
    </div>
</template>
<script type="text/ecmascript-6">
    import "../../public/css/public.css";
    import "../../../node_modules/vue/dist/vue.js";
    import "../../public/css/swiper.min.css";
    import "../../public/js/jquery.1.8.3.min.js";
    import "../../public/js/swiper.min.js";


   /* import "../../public/css/idangerous.swiper.scrollbar.css";
    import "../../public/js/idangerous.swiper.scrollbar-2.1.js";
    import "../../public/css/animate.min.css";
    import "../../public/js/swiper.animate.min.js";
    import "../../public/js/iscroll-probe.js";*/
    export default {
        mounted:function(){
            const  mySwiper1 = new Swiper('.lunbo', {
                autoplay:3000,//可选选项，自动滑动
                loop:true, //循环播放
                pagination : '.swiper-pagination'

            });
        }

    }
</script>
<style scoped>
    #wrapper{
        width:100%;
        height:100%;
    }
    .lunbo{
        height:5.4rem;
        width:100%;
    }
    .pic1{
        width:100%;
        background: url("../../public/img/1.jpg") no-repeat center;
        background-size: 100% 100%;
    }

    .pic2{
        background: url("../../public/img/2.jpg") no-repeat center;
        background-size: 100% 100%;
    }
    .pic3{
        background: url("../../public/img/1.jpg") no-repeat center;
        background-size: 100% 100%;
    }
    .pic4{
        background: url("../../public/img/1.jpg") no-repeat center;
        background-size: 100% 100%;
    }
    .pic5{
        background: url("../../public/img/1.jpg") no-repeat center;
        background-size: 100% 100%;
    }
    .swiper-pagination{
        position:absolute;
        width:4rem;
        height:0.6rem;
        bottom:0.8rem;
        right:0;
    }
</style>