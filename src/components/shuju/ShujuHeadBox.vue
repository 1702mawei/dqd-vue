<template>
    <div class="headBox">
        <shuju-head-box-header></shuju-head-box-header>
        <shuju-head-box-nav></shuju-head-box-nav>
    </div>
</template>
<script type="text/ecmascript-6">
    import ShujuHeadBoxHeader from "./ShujuHeadBoxHeader.vue";
    import ShujuHeadBoxNav from "./ShujuHeadBoxNav.vue";
    import '../../public/js/jquery.1.8.3.min.js'
    export default {
        components:{
            ShujuHeadBoxHeader,
            ShujuHeadBoxNav
        }

    }
</script>
<style scoped>
    .headBox{
        width: 100%;
        z-index: 1;
        position: absolute;
        left:0;
        top:0;
        height:2.89rem;
    }
</style>