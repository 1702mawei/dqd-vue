<template>
    <div>
        <div class="imgHe" >
            <img :src="n.pic" v-for="(n,index) in navlist5"/>
        </div>
    </div>
</template>
<script>

export  default {
    props:['navlist5'],
}

</script>

<style>
    .imgHe{
        width:10.1rem;
        height:2.45rem;
        position: absolute;
        display: flex;
        top:2.98rem;
        left:0.35rem;
    }
    .imgHe img:nth-child(1){
        width:3.27rem;
        height:2.45rem;
        flex-grow: 1;
    }
    .imgHe img:nth-child(2){
        width:3.27rem;
        height:2.45rem;
        flex-grow: 1;
    }
    .imgHe img:nth-child(3){
        width:3.27rem;
        height:2.45rem;
        flex-grow: 1;
    }
</style>

