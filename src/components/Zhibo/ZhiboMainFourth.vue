<template>
    <div class="swiper-slide">
        <div class="data">
            <p>2017-7-26周三</p>
        </div>
        <div class="tainxia">
            <img src="../../public/img/t211.jpg">
            <p>天下足球</p>
            <p>《2017.红与黑》</p>
            <p>已结束</p>
        </div>
        <div v-for="(n,index) in mianlis3">
            <div class="data" >
                <p>{{n.time}}</p>
            </div>
            <div class="tainxia">
                <img :src="n.pic1">
                <p>{{n.site}}</p>
                <p>{{n.fight}}</p>
                <p>{{n.running}}</p>
            </div>
        </div>
    </div>
</template>
<script type="text/ecmascript-6">
    export default {
        props:['mianlis3',],

    }
</script>
<style>
    .content{
        width:100%;
        padding-bottom: 1.4rem;
        padding-top: 2.89rem;
    }
    .selected{
        color:green;
        border-bottom: 2px solid green;
    }
    .data p{
        width:100%;
        height:0.94rem;
        background:#e9e9e9;
        line-height:0.94rem;
        text-align: center;
        color: #2f2f2f;
        font-size: 0.37rem;
        font-weight: bold;
    }
    .tainxia{
        background-color: #f7f7f7;
        height: 2.65rem;
        width:100%;
        position: relative;
        border-bottom: solid 2px #e9e9e9;
    }
    .tainxia img {
        position: absolute;
        width: 1.98rem;
        height: 0.73rem;
        left:0.77rem;
        top: 0.96rem;
    }
    .tainxia p:nth-of-type(1){
        height:0.4rem;
        position: absolute;
        left:4.47rem;
        top:0.4rem;
        font-size: 0.4rem;
        color: #878787;
    }
    .tainxia p:nth-of-type(2){
        height:0.4rem;
        position: absolute;
        left:3.77rem;
        top:1.13rem;
        font-size: 0.4rem;
        color: #878787;
    }
    .tainxia p:nth-of-type(3){
        height:0.4rem;
        position: absolute;
        left:4.75rem;
        top: 1.82rem;
        font-size: 0.4rem;
        color: #878787;
    }
    .qiudui{
        background-color: #f7f7f7;
        height: 2.8rem;
        width:100%;
        position: relative;
        border-bottom: solid 2px #e9e9e9;
    }
    .qiudui img:nth-of-type(1){
        position: absolute;
        width: 1.07rem;
        height: 1.25rem;
        left:1.2rem;
        top: 0.42rem;
    }
    .qiudui img:nth-of-type(2){
        position: absolute;
        width: 1.07rem;
        height: 1.25rem;
        right:1.29rem;
        top: 0.42rem;
    }
    .qiudui p:nth-of-type(1){
        height:0.4rem;
        position: absolute;
        left:4.3rem;
        top: 0.43rem;
        font-size: 0.4rem;
        color: #878787;
    }
    .qiudui p:nth-of-type(2){
        height:0.53rem;
        position: absolute;
        left:4.9rem;
        top: 1.05rem;
        font-size: 0.53rem;
        color: #565656;
        font-weight: bold;
    }
    .qiudui p:nth-of-type(3){
        height:0.38rem;
        position: absolute;
        left:4.92rem;
        top: 2.02rem;
        font-size: 0.38rem;
        color: #878787;
    }
    .qiudui span:nth-of-type(1){
        height:0.36rem;
        position: absolute;
        left:0.92rem;
        bottom: 0.53rem;
        font-size: 0.36rem;
        color: #2e2e2e;
        font-weight: bold;
    }
    .qiudui span:nth-of-type(2){
        height:0.36rem;
        position: absolute;
        right:1.3rem;
        bottom: 0.53rem;
        font-size: 0.36rem;
        color: #2e2e2e;
        font-weight: bold;
    }

</style>
