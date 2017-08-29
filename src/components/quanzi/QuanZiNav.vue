<template>
    <div>
        <div class="swiper-container nav">
            <div class="swiper-wrapper">
                <div class="swiper-slide p selected">圈子</div>
                <div class="swiper-slide p">热门</div>
            </div>
        </div>
    </div>
</template>
<script type="text/ecmascript-6">
    import "../../public/css/swiper-3.4.2.min.css";
    import  "../../public/js/swiper-3.4.2.min.js";
	import "../../public/js/jquery.1.8.3.min.js"
    export default {
        mounted:function () {
            var mySwiper = new Swiper('.content', {
            //autoplay:1000,//可选选项，自动滑动
            //loop:true  //循环播放
            onSlideChangeStart:function(sw) {
                var index = sw.activeIndex;//当前运动页面的index
                // console.log(index);
                $(".p").eq(index).addClass("selected").siblings().removeClass("selected");
            },
        });
        
           var mySwiper1 = new Swiper('.nav', {
                slidesPerView: 2//'auto'
                //slidesPerView : 3.7,
            });

            $(".p").click(function () {
                $(this).addClass("selected").siblings().removeClass("selected");
                mySwiper.slideTo($(this).index());
            });
        }
    }
</script>
<style scoped>
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