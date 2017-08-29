<template>
    <div>
        <router-link to="/ShiJiaQiu" style="color:#000;">
            <div class="xinwen" v-for="(n,index) in navlist1">
                <div class="tupian">
                    <img :src="n.pic">
                </div>
                <div class="font">
                    <p>{{n.title1}}</p>
                    <span>{{n.title2}}</span>
                </div>
            </div>
        </router-link>
    </div>
</template>
<script>
    export  default {
        props:["navlist1"],
    }
</script>
<style>
    .xinwen{
        display: flex;
        height:2.73rem;
        border-bottom:2px solid #e9e9e9;
        background:#f7f7f7;
    }
    .xinwen .tupian{
        width:2.71rem;
        height:2rem;
        box-sizing: border-box;
        padding-top: 0.4rem;
        padding-left: 0.3rem;
    }
    .xinwen .tupian img{
        width:2.71rem;
        height:2rem;
    }
    .xinwen .font {
        padding-top: 0.4rem;
        width: 7.16rem;
        left: 0.6rem;
        position: relative;
    }
</style>

