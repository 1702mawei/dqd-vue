<template>
    <div id="app">
        <zhibo-head-box></zhibo-head-box>
        <zhibo-main :mianlist="getData1" :mianlist1="getData2" :mianlist2="getData3" :mianlist3="getData4"></zhibo-main>
        <!--<zhibo-footer></zhibo-footer>-->
        <common-footer></common-footer>
    </div>
</template>
    <script type="text/ecmascript-6">
        import ZhiboHeadBox from "./ZhiboHeadBox.vue";
        import ZhiboMain from "./ZhiboMain.vue";
        import "../../public/css/swiper.min.css";
        import "../../public/js/swiper.min.js";
        import "../../public/js/swiper.animate.min.js";
        import "../../public/js/idangerous.swiper.scrollbar-2.1";
        import zhibofetch from "../../fetch/zhibofetch.js";
        import ZhiboFooter from './ZhiboFooter.vue'
        import CommonFooter from '../common/CommonFooter.vue'
        export default {
            data(){
                return {
                    getData1:[],
                    getData2:[],
                    getData3:[],
                    getData4:[],
                }
            },
            components:{
                ZhiboHeadBox,
                ZhiboMain,
//                ZhiboFooter
                CommonFooter
            },
            created:function () {
                this.initDta();
            },
            methods:{
                initDta:function () {
                    zhibofetch.getShujuinfo((data)=>{
                        this.getData1=data.ZhiBoMainData;
                        this.getData2=data.ZhiBoMainData1;
                        this.getData3=data.ZhiBoMainData2;
                        this.getData4=data.ZhiBoMainData3;
                    })
                }
            }
        }

    </script>

    <style scoped>

    </style>
