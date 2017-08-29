<template>
    <div>
        <!--<index></index>-->
        <!--<zhibo></zhibo>-->
        <router-view></router-view>
        <!--<shi-jia-qiu></shi-jia-qiu>-->
        <!--<quan-zi></quan-zi>-->
        <!--<shuju></shuju>-->
        <!--<shang-cheng></shang-cheng>-->
    </div>
</template>
<script
type="text/ecmascript-6">
   import Index from "./components/index/Index.vue";
//    import ShiJiaQiu from './components/shijiaqiu/ShiJiaQiu.vue'
//    import Zhibo from './components/Zhibo/Zhibo.vue';
//    import QuanZi from './components/quanzi/QuanZi.vue'
//import ShangCheng from "./components/shangcheng/ShangCheng.vue";
//    import Shuju from './components/shuju/Shuju.vue'
   import './public/css/public.css';
    export default{
        components:{
         Index,
//            ShangCheng
//            Zhibo,
//            ShiJiaQiu
//            QuanZi
//            Shuju
        }
    }
</script>