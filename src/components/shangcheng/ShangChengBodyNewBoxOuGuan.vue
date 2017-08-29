<template>
    <div class="ouguan">
        <shang-cheng-body-new-box-ou-guan-left :left="left" ></shang-cheng-body-new-box-ou-guan-left>
        <shang-cheng-body-new-box-ou-guan-right :right="right"></shang-cheng-body-new-box-ou-guan-right>
    </div>
</template>
<script type="text/ecmascript-6">
    import "../../public/css/public.css";
    import "../../../node_modules/vue/dist/vue.js";
    import ShangChengBodyNewBoxOuGuanLeft from "./ShangChengBodyNewBoxOuGuanLeft.vue";
    import ShangChengBodyNewBoxOuGuanRight from "./ShangChengBodyNewBoxOuGuanRight.vue";
    export default {
        props:['left','right'],
        components: {
            ShangChengBodyNewBoxOuGuanLeft,
            ShangChengBodyNewBoxOuGuanRight

        }
    }
</script>
<style scoped>
    .ouguan{
        width:10.21rem;
        height: 5.85rem;
        position: relative;
        left:0.3rem;
        display: flex;
    }

</style>