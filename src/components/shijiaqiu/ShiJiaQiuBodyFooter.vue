<template>
    <div class="bisai" style="width:9.93rem;height:auto;margin:0 auto;margin-top: 0.85rem;">
        <img :src="sjq.img2" class="img" style="width:9.93rem;height:6.8rem;position: static !important;"/>
        <video controls="controls" :src="sjq.video"  class="vedio" style="width:9.93rem;height:6.8rem;position: static !important;">
            <source :src="sjq.video" type="video/mp4" />
        </video>
    </div>
</template>
<script type="text/ecmascript-6">
    import "../../public/css/public.css";
    import "../../../node_modules/vue/dist/vue.js";
    export default {
        props:["sjq"],
    }

</script>
<style scoped>
    /*.bisai{*/
        /*width:9.93rem;*/
        /*height:auto;*/
        /*margin:0 auto;*/
        /*margin-top: 0.85rem;*/
    /*}*/
    /*.bisai .img{*/
        /*width:9.93rem;*/
        /*height:6.8rem;*/
    /*}*/
    /*.bisai  .vedio{*/
        /*width:9.93rem;*/
        /*height:6.8rem;*/
    /*}*/
</style>