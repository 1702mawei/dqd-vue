<template>
    <div  class="endd">
        <ul class="testt">
            <li>
                <div class="duu">
                    <p>{{endd.num}}</p>
                    <p><img :src="endd.img"></p>
                    <p>{{endd.duiming}}</p>
                </div>
            </li>
            <li>{{endd.num1}}</li>
            <li>{{endd.num2}}</li>
            <li>{{endd.num3}}</li>
            <li>{{endd.num4}}</li>
            <li>{{endd.num5}}</li>
            <li>{{endd.num6}}</li>
        </ul>
    </div>
</template>
<script type="text/ecmascript-6">
    export default {
        props:["endd"]
    }
</script>
<style scoped>
    .endd{
        width:100%;
        height: 1.21rem;
        background: #3f4c55;
        border-bottom:solid 1px #27343c;
    }
    .endd .testt{
        width:10.28rem;
        height: 1.21rem;
        display: flex;
        pition: relative;
        left:0.25rem;

    }
    .endd .testt li{
        color: #faf9f7;
        font-size: 0.35rem;
        text-align: left;
        line-height: 1.21rem;
    }
    .endd .testt li:nth-child(1){
        flex-grow: 0;

    }
    .endd .testt li:nth-child(2){
        flex-grow: 1;
        padding-left: 0.1rem;
        box-sizing: border-box;
    }
    .endd .testt li:nth-child(3){
        flex-grow: 1;
    }
    .endd .testt li:nth-child(4){
        flex-grow: 1;
    }
    .endd .testt li:nth-child(5){
        flex-grow: 1;
        padding-left: 0.2rem;
    }
    .endd .testt li:nth-child(6){
        flex-grow: 2;
        padding-left: 0.3rem;
    }
    .endd .testt li:nth-child(7) {
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