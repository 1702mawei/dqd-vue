<template>
    <div class="tuijianBox">
        <img :src="n.pic"  v-for="(n,index) in navlist3">
    </div>

</template>
<script>
    export  default {
        props:['navlist3'],
    }
</script>

<style>
    .tuijianBox{
        width:100%;
        height:1.4rem;
        display: flex;
        position: absolute;
        top:1.34rem;
        justify-content: space-around;
        flex-wrap: wrap;
    }
    .tuijianBox img{
        width:1.45rem;
        height:1.4rem;
        flex-direction: column;
        justify-content: center;
        display: flex;
        align-items: center;
    }
</style>






























