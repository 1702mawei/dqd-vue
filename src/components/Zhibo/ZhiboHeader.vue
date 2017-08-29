<template>
    <ul>
        <li>
            <p><img src="../../public/img/top.jpg"></p>
        </li>
        <li>
            <p>直播</p>
        </li>
        <li></li>
    </ul>
</template>
<style scoped>
    ul{
        width:100%;
        height:1.92rem;
        display: flex;
        padding: 0 .35rem;
        justify-content: space-between;
        box-sizing: border-box;
        background:#16b13a;
        padding-top:0.9rem;

    }
    ul li:nth-of-type(1) p img{
        width:0.79rem;
        height:0.79rem;
        padding-right: 0.2rem;
    }
    ul li:nth-of-type(1) p{
        font-size: .65rem;
        color:#fff;
    }
    /*ul li{*/
        /*display: flex;*/
    /*}*/
    ul li:nth-of-type(2) p{
        width:1.6rem;
        font-size: .6rem;
        color:#fff;
        font-weight: bold;
        position: absolute;
        left:46%;
    }
</style>
<script  type="text/ecmascript-6">

    export default {  }
</script>