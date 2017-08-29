<template>
    <div>
        <div class="swiper-container" id="swiper">
            <div class="swiper-wrapper pic1">
                <div class="swiper-slide" v-for="(n,index) in navlist">
                    <img :src="n.pic"/>
                </div>
            </div>
            <!-- Add Pagination -->
            <div class="swiper-pagination"></div>
        </div>
    </div>
</template>
<script>
    import '../../public/js/swiper.min.js';
    import  '../../public/css/swiper.min.css';
   // import Swiper from 'swiper';
    export  default {
        props:['navlist'],
        mounted:function () {
            setTimeout(function () {
                 const  swiperObj =  new Swiper('#swiper', {
                    loop: true,
                    pagination: '.swiper-pagination',
                    autoplay: 3000,
                     autoplayDisableOnInteraction : false,
                });
            }, 100)
        }
    }
</script>
<style>
    #swiper{
        height:5.4rem;
        width:100%;
    }
    .pic1{
        width:100%;
    }
    img{
        width:100%;
        height: 100%;
    }
</style>