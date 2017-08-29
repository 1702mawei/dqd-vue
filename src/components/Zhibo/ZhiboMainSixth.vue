<template>
    <div class="swiper-slide">
        <div class="data">
            <p>2017-7-26周三 </p>
        </div>
        <div class="qiuduiy" v-for="(n,index) in mianlis4">
            <img  :src="n.pic1">
            <img  :src="n.pic2">
            <p>{{n.course}}</p>
            <p>{{n.result}}</p>
            <img  :src="n.pic3">
            <span>{{n.team1}}</span>
            <span>{{n.team2}}</span>
        </div>
    </div>
</template>
<script type="text/ecmascript-6">
    export default {
        props:['mianlis4',],

    }
</script>
<style scoped>
    .qiuduiy{
        background-color: #f7f7f7;
        height: 2.8rem;
        width:100%;
        /*padding-bottom: 1.4rem;*/
        /*padding-top: 2.89rem;*/
        position: relative;
        border-bottom: solid 2px #e9e9e9;
    }
    .qiuduiy img:nth-of-type(1){
        position: absolute;
        width: 1.07rem;
        height: 1.25rem;
        left:1.01rem;
        top: 0.42rem;
    }
    .qiuduiy img:nth-of-type(2){
        position: absolute;
        width: 1.07rem;
        height: 1.25rem;
        right:1.39rem;
        top: 0.42rem;
    }
    .qiuduiy p:nth-of-type(1){
        height:0.4rem;
        position: absolute;
        left:4.3rem;
        top: 0.43rem;
        font-size: 0.4rem;
        color: #878787;
    }
    .qiuduiy p:nth-of-type(2){
        height:0.53rem;
        position: absolute;
        left:4.9rem;
        top: 1.05rem;
        font-size: 0.53rem;
        color: #565656;
        font-weight: bold;
    }
    .qiuduiy img:nth-of-type(3){
        height:0.58rem;
        width:2.48rem;
        position: absolute;
        left: 4.02rem;
        top: 2.02rem;
        font-size: 0.38rem;

    }
    .qiuduiy span:nth-of-type(1){
        height:0.36rem;
        position: absolute;
        left:0.92rem;
        bottom: 0.53rem;
        font-size: 0.36rem;
        color: #2e2e2e;
        font-weight: bold;
    }
    .qiuduiy span:nth-of-type(2){
        height:0.36rem;
        position: absolute;
        right:1.3rem;
        bottom: 0.53rem;
        font-size: 0.36rem;
        color: #2e2e2e;
        font-weight: bold;
    }
</style>
