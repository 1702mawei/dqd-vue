<template>
    <div class="xinping">
        <p>{{top.day}}</p>
    </div>
</template>
<script type="text/ecmascript-6">
    import "../../public/css/public.css";
    import "../../../node_modules/vue/dist/vue.js";
    export default {
        props:["top"]
    }
</script>
<style scoped>
    .xinping{
        height: 1.54rem;
    }
    .xinping p{
        height:0.61rem;
        width:4.5rem;
        margin:0 auto;
        font-size: 0.6rem;
        color: #343434;
        line-height: 1.54rem;
        font-weight: bold;
    }

</style>