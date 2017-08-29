<template>
    <header>
        <ul>
            <li>
                <p><img src="../../public/img/top.jpg"></p>
                <p>懂球帝</p>
            </li>
            <li>
                <p><a href="index.html" style="color:#fff">社区</a></p>
                <!--<p><a href="shangchen.html" style="color: #64e581;">商城</a></p>-->
                <router-link to="/ShangCheng" style="color: #64e581;font-size: .65rem;">商城</router-link>
            </li>
        </ul>
    </header>
</template>
<script type="text/ecmascript-6">
    export  default {

    }
</script>
<style>
    header{
        width:100%;
        height:1.92rem;
        box-sizing: border-box;
        background:#16b13a;
    }
    header ul li:nth-of-type(1) p img{
        width:0.79rem;
        height:0.79rem;
        padding-right: 0.2rem;
    }
    header  ul li:nth-of-type(1) p{
        font-size: .65rem;
        color:#fff;
    }
    header  ul{
        width:100%;
        padding: 0 .35rem;
        display: flex;
        box-sizing: border-box;
        -webkit-justify-content: space-between;
        justify-content:space-between;
        padding-top:0.9rem;
    }
    header  ul li{
        display: flex;
    }
    header  ul li:nth-of-type(2) p {
        width:1.6rem;
        font-size: .6rem;
        color:#fff;
        font-weight: bold;
    }

</style>