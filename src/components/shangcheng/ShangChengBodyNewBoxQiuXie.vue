<template>
    <div class="qiuxie">
        <img :src="bottom.img">
    </div>
</template>
<script type="text/ecmascript-6">
    import "../../public/css/public.css";
    import "../../../node_modules/vue/dist/vue.js";
    export default {
        props:["bottom"]
    }
</script>
<style scoped>
    .qiuxie{
        width:100%;
        height:5rem;
        background: #f4f4f4;
        margin-top: 0.3rem;
    }
    .qiuxie img{
        position: relative;
        height:4.75rem;
        width: 100%;
        background-size: cover;
        top:0.28rem;
    }
</style>