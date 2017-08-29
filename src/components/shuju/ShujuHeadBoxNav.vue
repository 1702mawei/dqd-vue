<template>
    <div class="swiper-container nav">
        <div class="swiper-wrapper">
            <!--------------------我的页面-------------------->
            <div class="swiper-slide p selected">英超</div>
            <div class="swiper-slide p">西甲</div>
            <div class="swiper-slide p">德甲</div>
            <div class="swiper-slide p">意甲</div>
            <div class="swiper-slide p">欧甲</div>
        </div>
    </div>
</template>
<script type="text/ecmascript-6">
    import "../../public/js/swiper.min";
    import "../../public/css/swiper.min.css";
    import '../../public/js/jquery.1.8.3.min.js'
    export default {
        mounted:function () {
            $(function(){
                var mySwiper = new Swiper('.nav',{
                    slidesPerView :5//'auto'
                    //slidesPerView : 3.7,
                })
            });
        }
    }
</script>
<style scoped>
    .selected{
        color:green;
        border-bottom: 2px solid green;
    }
    .nav{
        width:100%;
        box-sizing: border-box;
        padding-left: .2rem;

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
</style>