<template>
    <div>
        <div class="bisai" v-for="(n,index) in navlist6">
            <img :src="n.pic">
            <p>{{n.title1}}</p>
            <p>{{n.title2}}</p>
        </div>
    </div>
</template>

<script>
    export default {
        props:['navlist6']
    }

</script>

<style>
    .bisai{
        width:100%;
        height:2.7rem;
        background: #f7f7f7;
        border-bottom:2px solid #e9e9e9;
        position: relative;
    }
    .bisai img{
        width:2.7rem;
        height: 2rem;
        position: absolute;
        left:0.3rem;
        top:0.36rem;
    }
    .bisai p:nth-of-type(1){
        font-size: 0.5rem;
        height:0.5rem;
        position: absolute;
        top: 0.36rem;
        left:3.44rem;
        color: #333333;
        font-weight: bold;
    }
    .bisai p:nth-of-type(2){
        font-size:0.41rem;
        height:0.41rem;
        position: absolute;
        bottom:0.38rem;
        right:0.28rem;
        color: #555555;
    }
</style>