<template>
    <section>
        <div class="swiper-container content">
            <div class="swiper-wrapper">
                <shuju-main-one :qdd="qdd" :qddt="qddt" :endd="endd"></shuju-main-one>
                <shuju-main-two :qdd="qdd" :qddt="qddt" :endd="endd"></shuju-main-two>
                <shuju-main-three :qdd="qdd" :qddt="qddt" :endd="endd"></shuju-main-three>
                <shuju-main-four :qdd="qdd" :qddt="qddt" :endd="endd"></shuju-main-four>
                <shuju-main-five :qdd="qdd" :qddt="qddt" :endd="endd"></shuju-main-five>
            </div>
        </div>
    </section>
</template>
<script type="text/ecmascript-6">
    import ShujuMainOne from "./ShujuMainOne.vue";
    import ShujuMainTwo from "./ShujuMainTwo.vue";
    import ShujuMainThree from "./ShujuMainThree.vue";
    import ShujuMainFour from "./ShujuMainFour.vue";
    import ShujuMainFive from "./ShujuMainFive.vue";
    export default {
        props:["qdd","qddt","endd"],
        components:{
            ShujuMainOne,
            ShujuMainTwo,
            ShujuMainThree,
            ShujuMainFour,
            ShujuMainFive
        }
    }
</script>
<style scoped>
    section{
        position: absolute;
        top:2.89rem;
        bottom:1.36rem ;
        width: 100%;
        overflow-y: auto;
    }
    .content{
        width:100%;

    }


</style>