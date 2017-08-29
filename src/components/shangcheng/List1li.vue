<template>
    <a href="###">
        <em><img :src="listli.pic"/></em>
        <span>{{listli.name}}</span>
    </a>
</template>
<script type="text/ecmascript-6">

    export default {
        props:["listli"]

    }
</script>
<style scoped>
    #foottitle a{
        box-sizing: border-box;
        display: inline-block;
        text-align:center;
        flex-grow: 1;
        text-align: center;
        padding-top: 0.35rem;
    }
    #foottitle a em{
        box-sizing: border-box;
        margin-top: .25rem;
        display: block;
        width: 1.10rem;
        height: 1.10rem;
        margin: 0 auto;
    }
    #foottitle a em img{
        display:inline-block;
        width:100%;
        height:100%;
    }
    #foottitle a span{
        box-sizing: border-box;
        display: block;
        width: 100%;
        height: .35rem;
        margin-top: .30rem;
        font-size: 0.35rem;
        color: #373737;
    }

</style>