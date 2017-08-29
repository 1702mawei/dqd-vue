<template>
    <div class="shijia">
        <img :src="sjq.img1"/>
    </div>
</template>
<script type="text/ecmascript-6">
    import "../../public/css/public.css";
    import "../../../node_modules/vue/dist/vue.js";
    export default {
        props:["sjq"]
    }
</script>
<style scoped>
    .shijia{
        width:9.95rem;
        height:1.04rem;
        margin:0 auto;
        margin-top: 0.5rem;
    }
    .shijia img{
        width: 9.95rem;
        height:1.04rem;
    }
</style>