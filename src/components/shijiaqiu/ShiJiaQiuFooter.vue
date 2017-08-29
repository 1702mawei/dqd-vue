<template>
    <footer>
        <div id="foottitle">
            <a href="index.html">
                <em></em>
                <span style="color: #15b038;">首页</span>
            </a>
            <a href="zhibo.html">
                <em></em>
                <span>直播</span>
            </a>

            <a href="zhudui.html">
                <em></em>
            </a>

            <a href="quanzi.html">
                <em></em>
                <span>圈子</span>
            </a>

            <a href="shuju.html">
                <em></em>
                <span>数据</span>
            </a>
        </div>
    </footer>
</template>
<script type="text/ecmascript-6">
    import "../../public/css/public.css";
    import "../../../node_modules/vue/dist/vue.js";
    export default {
    }
</script>
<style scoped>
    footer {
        display:flex;
        justify-content: space-between;
        width: 100%;
        position: fixed;
        height: 1.36rem;
        bottom: 0;
        left: 0;
        background-color:#f7f7f7;
        z-index: 2;
    }
    #foottitle{
        width: 100%;
        height: 1.36rem;
        display: flex;
        flex-direction: row;


    }
    #foottitle a{
        box-sizing: border-box;
        display: inline-block;
        text-align:center;
        flex-grow: 1;
        text-align: center;
        padding-top: 6px;
    }
    #foottitle a em{
        box-sizing: border-box;
        margin-top: .25rem;
        display: block;
        width: .7rem;
        height: .68rem;
        background: url(../../public/img/f1.jpg) no-repeat center;
        background-size: cover;
        margin: 0 auto;
    }

    #foottitle a span{
        box-sizing: border-box;
        display: block;
        width: 100%;
        height: .3rem;
        margin-top: .08rem;
        font-size: 0.24rem;
        color: #555555;
    }

    #foottitle a:nth-of-type(1) span{
        color: #555555;
    }
    #foottitle a:nth-of-type(2) em{
        background: url(../../public/img/f222.jpg) no-repeat center;
        background-size: cover;
    }
    #foottitle a:nth-of-type(3) em{
        width:1.2rem;
        height:1.12rem;
        background: url(../../public/img/f3.jpg) no-repeat center;
        background-size: cover;
    }
    #foottitle a:nth-of-type(4) em{
        background: url(../../public/img/f4.jpg) no-repeat center;
        background-size: cover;
    }
    #foottitle a:nth-of-type(5) em{
        background: url(../../public/img/f6.jpg) no-repeat center;
        background-size: cover;
    }
</style>