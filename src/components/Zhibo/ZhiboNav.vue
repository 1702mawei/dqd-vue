<template>
    <div class="swiper-container nav">
        <div class="swiper-wrapper">
            <div class="swiper-slide p selected">重要</div>
            <div class="swiper-slide p">关注</div>
            <div class="swiper-slide p">足彩</div>
            <div class="swiper-slide p">节目</div>
            <div class="swiper-slide p">中超</div>
            <div class="swiper-slide p">英超</div>
            <div class="swiper-slide p">西甲</div>
            <div class="swiper-slide p">德甲</div>
            <div class="swiper-slide p">意甲</div>
        </div>
    </div>
</template>
<style scoped>
    .nav{
        width:100%;
        box-sizing: border-box;
    }
    .swiper-slide{
        width:100%;
    }
    .p{
        width: 1.28rem;
        height:0.97rem;
        font-size:0.4rem;
        line-height:0.97rem;
        font-weight: bold;
        text-align: center;
        background: white;
    }
    .selected{
        color:green;
        border-bottom: 2px solid green;
    }

</style>
<script  type="text/ecmascript-6">
    import "../../public/css/swiper.min.css";
    import "../../public/js/swiper.min.js";
    import "../../public/js/swiper.animate.min.js";

    export default {
        mounted: function () {
            var mySwiper = new Swiper('.nav', {
                slidesPerView: 6//'auto'
                //slidesPerView : 3.7,
            });

            $(".p").click(function () {
                $(this).addClass("selected").siblings().removeClass("selected");
                mySwiper.slideTo($(this).index());
            });
        }
    }
</script>