<template>
    <div class="swiper-slide first">
        <div  class="shuju">
            <ul class="list">
                <li>积分</li>
                <li>球员榜</li>
                <li>球队榜</li>
                <li>赛程</li>
            </ul>
        </div>
        <div  class="qd">
            <ul class="test">
                <li>球队</li>
                <li>赛</li>
                <li>胜</li>
                <li>平</li>
                <li>负</li>
                <li>进/失</li>
                <li>积分</li>
            </ul>
        </div>
        <shuju-main-qdd :qdd="n" key="index" v-for="(n,index) in qdd"></shuju-main-qdd>
        <shuju-main-qddt :qddt="n" key="index" v-for="(n,index) in qddt" ></shuju-main-qddt>
        <shuju-main-endd :endd="n" key="index" v-for="(n,index) in endd" ></shuju-main-endd>
    </div>
</template>
<script type="text/ecmascript-6">
    import ShujuMainQdd from "./ShujuMainQdd.vue";
    import ShujuMainQddt from "./ShujuMainQddt.vue";
    import ShujuMainEndd from "./ShujuMainEndd.vue";
    export default {
        props:["qdd","qddt","endd"],
        components:{
            ShujuMainQdd,
            ShujuMainQddt,
            ShujuMainEndd
        }
    }
</script>
<style scoped>
    .shuju{
        width:100%;
        height: 1.16rem;
        background: #333d46;
    }
    .list{
        width:10.19rem;
        height: 0.74rem;
        position: relative;
        left:0.31rem;
        top:0.2rem;
        border:1px  #1b2326 solid;
        display: flex;
    }
    .list li{
        flex-grow: 1;
        color: #8f9cac;
        font-size: 0.46rem;
        text-align: center;
        line-height: 0.74rem;
    }
    .list li:nth-of-type(1){
        border-right: 1px solid #1b2326;
        background: #1b2326;
        color: #ffffff;
    }
    .list li:nth-of-type(2){
        border-right: 1px solid #1b2326;
    }
    .list li:nth-of-type(3){
        border-right: 1px solid #1b2326;
    }
    .qd{
        width:100%;
        height: 0.73rem;
        background: #3f4c55;
    }
    .qd .test{
        width:10.28rem;
        height: 0.73rem;
        display: flex;
        position: relative;
        left:0.25rem;

    }
    .qd .test li{
        color: #faf9f7;
        font-size: 0.35rem;
        text-align: center;
        line-height: 0.73rem;
    }
    .qd .test li:nth-child(1){
        flex-grow: 8;

    }
    .qd .test li:nth-child(2){
        flex-grow: 1;
    }
    .qd .test li:nth-child(3){
        flex-grow: 1;
    }
    .qd .test li:nth-child(4){
        flex-grow: 1;
    }
    .qd .test li:nth-child(5){
        flex-grow: 1;
    }
    .qd .test li:nth-child(6){
        flex-grow: 2;
    }
    .qd .test li:nth-child(7){
        flex-grow: 1;
    }



</style>