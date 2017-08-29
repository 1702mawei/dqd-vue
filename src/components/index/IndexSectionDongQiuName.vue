<template>
    <div class="wenzi" >
        <span v-for="(n,index) in navlist4">{{n.title}}</span>
    </div>
</template>

<style>
    .wenzi {
        width: 100%;
        height: 0.5rem;
        position: absolute;
        top: 3.02rem;
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
    }
    .wenzi span{
        font-size: 0.43rem;
        color: #333333;
        flex-direction: column;
        justify-content: center;
        display: flex;
        align-items: center;
        padding-right: 0.4rem;
        box-sizing: border-box;

    }

</style>


<script>
    export default {
        props:['navlist4'],
    }

</script>













