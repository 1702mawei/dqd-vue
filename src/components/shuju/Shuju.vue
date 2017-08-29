<template>
   <div>
       <shuju-head-box></shuju-head-box>
       <shuju-main :qdd="qdd" :qddt="qddt" :endd="endd"></shuju-main>
       <common-footer></common-footer>
   </div>
</template>
<script type="text/ecmascript-6">
    import ShujuHeadBox from "./ShujuHeadBox.vue";
    import ShujuMain from "./ShujuMain.vue";
    import shujufetch from "../../fetch/shujufetch.js"
    import '../../public/js/jquery.1.8.3.min.js';
    import CommonFooter from '../common/CommonFooter.vue'
    export default {
        data(){
            return{
                qdd:[],
                qddt:[],
                endd:[]
            }
        },
        components:{
            ShujuHeadBox,
            ShujuMain,
            CommonFooter
        },
        mounted:function () {
            $(function(){
                var mySwiper = new Swiper('.nav',{
                    slidesPerView :5//'auto'
                    //slidesPerView : 3.7,
                })
            });
            var mySwiper = new Swiper('.content', {
                //autoplay:1000,//可选选项，自动滑动
                //loop:true  //循环播放

                onSlideChangeStart:function(sw) {
                    var index = sw.activeIndex;//当前运动页面的index
                    // console.log(index);
                    $(".p").eq(index).addClass("selected").siblings().removeClass("selected");
                },
            });
            // -------------点击时对应到所对应的页面上-------
            $(".p").click(function(){
                $(this).addClass("selected").siblings().removeClass("selected");
                mySwiper.slideTo($(this).index());
            });
        },
        created:function(){
            this.initialData();
        },
        methods: {
            initialData: function () {
                shujufetch.getShujuinfo((data) => {
                    this.qdd = data.qdd;
                    this.qddt = data.qddt;
                    this.endd = data.endd;
                });
            }
        }
    }
</script>
<style scoped>

</style>