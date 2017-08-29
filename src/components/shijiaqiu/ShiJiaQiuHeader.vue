<template>
    <header>
        <div class="topHerd">
            <a href="index.html"><img src="../../public/img/jian.jpg"></a>
            <p>懂球帝</p>
            <span>399评论</span>
        </div>
    </header>
</template>
<script type="text/ecmascript-6">
    import "../../public/css/public.css";
    import "../../../node_modules/vue/dist/vue.js";
    export default {}
</script>
<style scoped>
    header{
        width:100%;
        height:1.89rem;
        position: absolute;
        left:0;
        top:0;
    }
    .topHerd{
        width:100%;
        height:1.89rem;
        position: relative;
        background: #15b038;
    }
    .topHerd img{
        width:0.68rem;
        height:0.51rem;
        position: absolute;
        left:0.37rem;
        top:1.03rem;
    }
    .topHerd p{
        width:1.95rem;
        height:0.6rem;
        position: absolute;
        left:4.41rem;
        top:0.98rem;
        font-size:0.6rem ;
        color: #fffeff;
        font-weight: bold;
    }
    .topHerd span{
        width:2.53rem;
        height:0.75rem;
        border:1px solid #fffeff;
        color:#fffeff;
        font-size: 0.35rem;
        line-height: 0.75rem;
        position: absolute;
        top:0.9rem;
        right:0.34rem;
        text-align: center;
        border-radius: 8%;
    }
</style>