<template>
    <div class="headerNav">
        <div class="swiper-container nav">
            <div class="swiper-wrapper">
                <div class="swiper-slide p selected">头条</div>
                <div class="swiper-slide p">热门</div>
                <div class="swiper-slide p">懂球号</div>
                <div class="swiper-slide p">集锦</div>
                <div class="swiper-slide p">国内</div>
                <div class="swiper-slide p">深度</div>
                <div class="swiper-slide p">足彩</div>
                <div class="swiper-slide p">闲情</div>
                <div class="swiper-slide p">视频</div>
                <div class="swiper-slide p">英超</div>
                <div class="swiper-slide p">西甲</div>
                <div class="swiper-slide p">德甲</div>
                <div class="swiper-slide p">意甲</div>
                <div class="swiper-slide p">五洲</div>
                <div class="swiper-slide p">装备</div>
            </div>
        </div>
    </div>
</template>
<script type="text/ecmascript-6">
    import  '../../public/css/swiper.min.css';
    import  '../../public/js/swiper.min.js';
    import  '../../public/js/jquery.1.8.3.min.js';
    export default {
        mounted : function () {
            let navSwiper=new Swiper('.headerNav .nav',{
                slidesPerView:'auto',
                loopedSlides :8,
                loop:false,
            });
        },
    }
</script>
<style>
    .nav{
        width:100%;
        box-sizing: border-box;
        padding-left: .2rem;
    }
    .swiper-slide{
        width: 100%;
    }
    .p{
        width: 1.28rem !important;
        height:0.97rem;
        font-size:0.4rem;
        line-height:0.97rem;
        font-weight: bold;
        text-align: center;
        background: white;
    }

</style>