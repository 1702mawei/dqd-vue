<template>
    <a href="###">
        <em><img :src="listlii.pic"/></em>
        <span>{{listlii.name}}</span>
    </a>
</template>
<script type="text/ecmascript-6">

    export default {
        props:["listlii"]
    }
</script>
<style scoped>
    #foottitlee a{
        box-sizing: border-box;
        display: inline-block;
        text-align:center;
        flex-grow: 1;
        text-align: center;
        padding-top: 0.35rem;
    }
    #foottitlee a em{
        box-sizing: border-box;
        margin-top: .25rem;
        display: block;
        width: 1.10rem;
        height: 1.10rem;
        margin: 0 auto;
    }
    #foottitlee a em img{
        display:inline-block;
        width:100%;
        height:100%;
    }
    #foottitlee a span{
        box-sizing: border-box;
        display: block;
        width: 100%;
        height: .35rem;
        margin-top: .30rem;
        font-size: 0.35rem;
        color: #373737;
    }
    #foottitlee a:nth-of-type(1) span{
        color: #373737;
    }

</style>