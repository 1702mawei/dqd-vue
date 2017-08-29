<template>
    <div  class="qddt">
        <ul class="testt">
            <li>
                <div class="duu">
                    <p>{{qddt.num}}</p>
                    <p><img :src="qddt.img"></p>
                    <p>{{qddt.duiming}}</p>
                </div>
            </li>
            <li>{{qddt.num1}}</li>
            <li>{{qddt.num2}}</li>
            <li>{{qddt.num3}}</li>
            <li>{{qddt.num4}}</li>
            <li>{{qddt.num5}}</li>
            <li>{{qddt.num6}}</li>
        </ul>
    </div>
</template>
<script type="text/ecmascript-6">
    export default {
        props:["qddt"],
    }
</script>
<style scoped>
    .qddt{
        width:100%;
        height: 1.21rem;
        background: #333d46;
        border-bottom:solid 1px #2a343d;
    }
    .qddt .testt{
        width:10.28rem;
        height: 1.21rem;
        display: flex;
        position: relative;
        left:0.25rem;

    }
    .qddt .testt li{
        color: #faf9f7;
        font-size: 0.35rem;
        text-align: left;
        line-height: 1.21rem;
    }
    .qddt .testt li:nth-child(1){
        flex-grow: 0;

    }
    .qddt .testt li:nth-child(2){
        flex-grow: 1;
        padding-left: 0.1rem;
        box-sizing: border-box;
    }
    .qddt .testt li:nth-child(3){
        flex-grow: 1;
    }
    .qddt .testt li:nth-child(4){
        flex-grow: 1;
    }
    .qddt .testt li:nth-child(5){
        flex-grow: 1;
        padding-left: 0.2rem;
    }
    .qddt .testt li:nth-child(6){
        flex-grow: 2;
        padding-left: 0.3rem;
    }
    .qddt .testt li:nth-child(7){
        flex-grow: 1;
    }
    .duu{
        display: flex;
    }
    .duu p:nth-of-type(1){
        width:0.5rem;
        padding-left: 0.1rem;
    }
    .duu p:nth-of-type(2){
        width:0.98rem;
    }
    .duu p:nth-of-type(3){
        width:2.68rem;
        text-align: left;
        padding-left: 0.1rem;
    }
    .duu p:nth-of-type(2) img{
        width:0.71rem;
        height:0.71rem;
        margin-top: 0.26rem;
    }
</style>