<template>
    <div  class="qdd">
        <ul class="testt">
            <li>
                <div class="duu">
                    <p>{{qdd.num}}</p>
                    <p><img :src="qdd.img"></p>
                    <p>{{qdd.duiming}}</p>
                </div>
            </li>
            <li>{{ qdd.num1}}</li>
            <li>{{ qdd.num2}}</li>
            <li>{{ qdd.num3}}</li>
            <li>{{ qdd.num4}}</li>
            <li>{{ qdd.num5}}</li>
            <li>{{ qdd.num6}}</li>
        </ul>
    </div>
</template>
<script type="text/ecmascript-6">
    export default {
        props:["qdd"],
    }
</script>
<style scoped>
    .qdd{
        width:100%;
        height: 1.21rem;
        background: #15b038;
        border-bottom:solid 1px #129e33;
    }
    .qdd .testt{
        width:10.28rem;
        height: 1.21rem;
        display: flex;
        position: relative;
        left:0.25rem;

    }
    .qdd .testt li{
        color: #faf9f7;
        font-size: 0.35rem;
        text-align: left;
        line-height: 1.21rem;
    }
    .qdd .testt li:nth-child(1){
        flex-grow: 0;

    }
    .qdd .testt li:nth-child(2){
        flex-grow: 1;
        padding-left: 0.1rem;
        box-sizing: border-box;
    }
    .qdd .testt li:nth-child(3){
        flex-grow: 1;
    }
    .qdd .testt li:nth-child(4){
        flex-grow: 1;
    }
    .qdd .testt li:nth-child(5){
        flex-grow: 1;
        padding-left: 0.2rem;
    }
    .qdd .testt li:nth-child(6){
        flex-grow: 2;
        padding-left: 0.3rem;
    }
    .qdd .testt li:nth-child(7){
        flex-grow: 1;
    }
    .duu{
        display: flex;
    }
    .duu p:nth-of-type(1){
        width:0.5rem;
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