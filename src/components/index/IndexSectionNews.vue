<template>
    <div>
        <div class="data">
            <p>2017-7-26</p>
        </div>
        <div class="xinwen" v-for="(n,index) in navlist2">
            <div class="tupian">
                <img  :src="n.pic">
            </div>
            <div class="font">
                <p>{{n.title1}}</p>
                <span>{{n.title2}}</span>
            </div>
        </div>
    </div>
</template>
<script>
    export  default {
        props:['navlist2'],
    }
</script>
<style>
    .font p{
        font-size:0.56rem;
        font-weight: bold;
    }
    .font span{
        width:2.2rem;
        height:0.35rem;
        font-size:0.35rem;
        padding-left: 1rem;
        display: block;
        position: absolute;
        bottom: 10%;
        right:5%;
    }
    /*two*/
    .data p{
        width:100%;
        height:0.94rem;
        background:#e9e9e9;
        line-height:0.94rem;
        text-align: center;
        color: #16b13a;
        font-size: 0.37rem;
    }
</style>