<template>
    <div class="headBox">
        <shang-cheng-header></shang-cheng-header>
        <shang-cheng-search></shang-cheng-search>
    </div>
</template>
<script type="text/ecmascript-6">
    import ShangChengHeader from "./ShangChengHeader.vue";
    import ShangChengSearch from "./ShangChengSearch.vue";
    export default {
        components:{
            ShangChengHeader,
            ShangChengSearch
        }
    }
</script>
<style scoped>
    .headBox{
        width: 100%;
        z-index: 1;
        position: absolute;
        left:0;
        top:0;
        height:2.89rem;

    }
</style>