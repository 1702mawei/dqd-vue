<template>
    <div>
        <div class="gaoaki" v-for="(n,index) in navlist9">
            <p>{{n.title}}</p>
            <img :src="n.pic">
            <span>{{n.title2}}</span>
        </div>
    </div>
</template>
<script>
    export default {
        props:['navlist9'],
    }
</script>
<style>
    .gaoaki{
        width:100%;
        height: 6.13rem;
        background: #f7f7f7;
        position: relative;
        text-align: center;
        border-bottom: 2px solid #e9e9e9;
    }
    .gaoaki p{
        position: absolute;
        text-align: center;
        font-size: 0.44rem;
        color: #333333;
        top:0.3rem;
        width:100%;
        font-weight: bold;
    }
    .gaoaki img{
        position: absolute;
        left:0.34rem;
        top:1.23rem;
        width:10rem;
        height:4.07rem;
    }
    .gaoaki span{
        position: absolute;
        top:5.51rem;
        right:0.4rem;
        color: #555555;
        font-size: 0.42rem;
    }
</style>