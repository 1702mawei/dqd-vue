<template>
    <section>
            <shang-cheng-body-slide></shang-cheng-body-slide>
            <shang-cheng-body-list1 :list1="list1"></shang-cheng-body-list1>
            <shang-cheng-body-list2  :list2="list2"></shang-cheng-body-list2>
            <shang-cheng-body-jg></shang-cheng-body-jg>
            <shang-cheng-body-new-box  :left="left" :right="right" :top="top" :bottom="bottom"></shang-cheng-body-new-box>
            <shang-cheng-body-new-box :left="left" :right="right" :top="top" :bottom="bottom"></shang-cheng-body-new-box>
     </section>
</template>
<script type="text/ecmascript-6">
    import ShangChengBodySlide from "./ShangChengBodySlide.vue";
    import ShangChengBodyList1 from "./ShangChengBodyList1.vue";
    import ShangChengBodyList2 from "./ShangChengBodyList2.vue";
    import ShangChengBodyJg from "./ShangChengBodyJg.vue";
    import ShangChengBodyNewBox from "./ShangChengBodyNewBox.vue";
    import ShangChengBodyQiuXie from "./ShangChengBodyNewBoxQiuXie.vue";
    export default {
        props:["list1",'list2','left','right','top','bottom'],
        components:{
            ShangChengBodySlide,
            ShangChengBodyList1,
            ShangChengBodyList2,
            ShangChengBodyJg,
            ShangChengBodyNewBox,

        }


    }
</script>
<style scoped>
    section{
        overflow-x:hidden;
        position: absolute;
        top:3.3rem;
        bottom:1.36rem ;
        width: 100%;
        overflow-y: auto;
    }

</style>