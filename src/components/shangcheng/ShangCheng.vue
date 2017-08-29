<template>
    <div>
        <shang-cheng-head-box></shang-cheng-head-box>
        <shang-cheng-body :list1="list1data" :list2="list2data" :left="leftdata" :right="rightdata" :top="topdata" :bottom="bottomdata"></shang-cheng-body>
        <!--<shang-cheng-footer></shang-cheng-footer>-->
        <common-footer></common-footer>
    </div>
</template>
<script type="text/ecmascript-6">
    import ShangChengHeadBox from "./ShangChengHeadBox.vue"
    import ShangChengBody from "./ShangChengBody.vue"
//    import ShangChengFooter from "./ShangChengFooter.vue"
    import shangchengfetch from "../../fetch/shangchengfetch.js"
    import CommonFooter from '../common/CommonFooter.vue'
    export default {
        data(){
            return{
                list1data:[],
                list2data:[],
                leftdata:[],
                rightdata:[],
                topdata:[],
                bottomdata:[]
            }
        },
        components:{
            ShangChengHeadBox,
            ShangChengBody,
//            ShangChengFooter
            CommonFooter
        },
        methods:{
          initdata:function () {
              shangchengfetch.getShangchenginfo((data)=>{
                  console.log(data)
                  this.list1data = data.list1;
                  this.list2data = data.list2;
                  this.leftdata=data.left;
                  this.rightdata=data.right;
                  this.topdata=data.top;
                  this.bottomdata=data.bottom;
                  console.log(data.list1[0].name);

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