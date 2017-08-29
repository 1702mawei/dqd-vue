<template>
    <div>
       <shang-cheng-body-new-box-xin-pin :top="top"></shang-cheng-body-new-box-xin-pin>
       <shang-cheng-body-new-box-ou-guan  :left="left" :right="right"></shang-cheng-body-new-box-ou-guan>
        <shang-cheng-body-new-box-qiu-xie :bottom="bottom"></shang-cheng-body-new-box-qiu-xie>
    </div>
</template>
<script type="text/ecmascript-6">
    import ShangChengBodyNewBoxXinPin from "./ShangChengBodyNewBoxXinPin.vue";
    import ShangChengBodyNewBoxOuGuan from "./ShangChengBodyNewBoxOuGuan.vue";
    import ShangChengBodyNewBoxQiuXie from "./ShangChengBodyNewBoxQiuXie.vue";

    export default {
        props:['left','right','top','bottom'],
        components: {
            ShangChengBodyNewBoxXinPin,
            ShangChengBodyNewBoxOuGuan,
            ShangChengBodyNewBoxQiuXie
        }
    }
</script>
<style scoped>

</style>