<template>
    <div class="fontBox">
        <p>{{sjq.title1}}</p>
        <ul class="list">
            <li>雷则声</li>
            <li>06-27</li>
            <li>9:50</li>
        </ul>
        <p>{{sjq.title2}}</p>
    </div>
</template>
<script type="text/ecmascript-6">
    import "../../public/css/public.css";
    import "../../../node_modules/vue/dist/vue.js";
    export default {
        props:["sjq"]
    }
</script>
<style scoped>
    .fontBox{
        width:100%;
        height:7.77rem;
        position: relative;

    }
    .fontBox p:nth-of-type(1){
        width:9.85rem;
        height:2.11rem;
        font-size: 0.9rem;
        font-weight: bold;
        color: #333333;
        position: absolute;
        left:0.4rem;
        top:0.68rem;
    }
    .list{
        width:4.95rem;
        height:0.4rem;
        display: flex;
        position: absolute;
        top:3.55rem;
        left: 0.43rem;
    }
    .list li:nth-of-type(1){
        font-size: 0.4rem;
        color: #13b339;
        flex-grow: 1;
        text-align: center;
    }
    .list li:nth-of-type(2){
        font-size: 0.4rem;
        color: #868686;
        flex-grow: 1;
        text-align: center;
    }
    .list li:nth-of-type(3){
        font-size: 0.4rem;
        color: #868686;
        flex-grow: 1;
        text-align: center;
    }
    .fontBox p:nth-of-type(2){
        width:9.85rem;
        height:2.11rem;
        font-size: 0.64rem;
        font-weight: bold;
        color: #333333;
        position: absolute;
        left: 0.43rem;
        top:4.53rem;
    }

</style>