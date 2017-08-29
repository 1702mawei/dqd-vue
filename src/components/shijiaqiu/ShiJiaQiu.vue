<template>
    <div>
        <shi-jia-qiu-header></shi-jia-qiu-header>
        <shi-jia-qiu-body :sjq="sjqdata"></shi-jia-qiu-body>
        <!--<shi-jia-qiu-footer></shi-jia-qiu-footer>-->
        <common-footer></common-footer>
    </div>
</template>
<script type="text/ecmascript-6">
    import ShiJiaQiuHeader from "./ShiJiaQiuHeader.vue";
    import ShiJiaQiuBody from "./ShiJiaQiuBody.vue";
    import ShiJiaQiuFooter from "./ShiJiaQiuFooter.vue";
    import shijiaqiufetch from "../../fetch/shijiaqiufetch.js";
    import  CommonFooter from '../common/CommonFooter.vue'
    export default {
        data(){
            return{
                sjqdata:[]

            }
        },
        components:{
            ShiJiaQiuHeader,
            ShiJiaQiuBody,
//            ShiJiaQiuFooter
            CommonFooter
        },
        methods:{
            initdata:function () {
                shijiaqiufetch.getShijiaqiuinfo((data)=>{
                    console.log(data);
                    this.sjqdata = data.sjq;
                })
            }
        },
        created:function () {
            this.initdata();
        }
    }
</script>
<style scoped>

</style>