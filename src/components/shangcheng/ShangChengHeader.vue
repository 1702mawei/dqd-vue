<template>
    <header>
        <ul>
            <li>
                <p><img src="../../public/img/top.jpg"></p>
                <p>懂球帝</p>
            </li>
            <li>
			 <!--<router-link to='/shequ'>
			 <p><a href="index.html" style="color:#fff">社区</a></p>
			 </router-link>-->
                <router-link to="/shequ" style="width:1.6rem;font-size: .6rem;color:#64e581;font-weight: bold;">社区</router-link>
                <!--<p><a href="index.html" style="color:#fff">社区</a></p>-->
                <p><a href="shangchen.html" style="color: #fff;">商城</a></p>
            </li>
        </ul>
    </header>
</template>
<script type="text/ecmascript-6">
    import "../../public/css/public.css";
    import "../../../node_modules/vue/dist/vue.js";
    import "../../../node_modules/vue-router/dist/vue-router.js";
    export default {}
</script>
<style scoped>
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