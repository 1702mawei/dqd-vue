<template>
    <div class="searchBox">
        <div  class="btn">
            <input type="button">
            <input type="text" placeholder="搜索你要找的商品">
        </div>
    </div>
</template>
<script type="text/ecmascript-6">
    import "../../public/css/public.css";
    import "../../../node_modules/vue/dist/vue.js";
    export default {
    }
</script>
<style scoped>
    .searchBox{
        width: 100%;
        height:1.34rem;
        background: #ffffff;
        position: relative;
    }
    .btn{
        height:0.88rem;
        width:10.39rem;
        border:solid 1px #e5e5e5;
        position: absolute;
        left:0.2rem;
        top:0.24rem;
        display: flex;
    }
    .btn input:nth-of-type(1){

        margin-top:0.3rem;
        margin-left:0.25rem;
        width: 0.39rem;
        height:0.39rem;
        background: url("../../public/img/ss.jpg") no-repeat center ;
        background-size: cover;
    }
    .btn input:nth-of-type(2){
        width: 9.56rem;
        height:0.87rem;
        line-height: 0.87rem;
        outline: none;
    }
</style>