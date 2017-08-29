<template>
    <section>
        <shi-jia-qiu-body-header :sjq="sjq"></shi-jia-qiu-body-header>
        <shi-jia-qiu-body-body :sjq="sjq"></shi-jia-qiu-body-body>
        <shi-jia-qiu-body-footer :sjq="sjq"></shi-jia-qiu-body-footer>
    </section>
</template>
<script type="text/ecmascript-6">
    import ShiJiaQiuBodyHeader from "./ShiJiaQiuBodyHeader.vue";
    import ShiJiaQiuBodyBody from "./ShiJiaQiuBodyBody.vue";
    import ShiJiaQiuBodyFooter from "./ShiJiaQiuBodyFooter.vue";
    export default {
        props:["sjq"],
        components:{
            ShiJiaQiuBodyHeader,
            ShiJiaQiuBodyBody,
            ShiJiaQiuBodyFooter
        }
    }
</script>
<style scoped>
    section{
        overflow-x:hidden ;
        position: absolute;
        top:1.89rem;
        bottom:1.36rem ;
        width: 100%;
        overflow-y: auto;
        background: #f7f7f7;
    }
</style>