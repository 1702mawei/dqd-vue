<template>
    <div id="foottitlee">
        <list2li :listlii="n" key="index" v-for="(n,index) in list2"></list2li>
    </div>
</template>
<script type="text/ecmascript-6">
    import "../../public/css/public.css";
    import "../../../node_modules/vue/dist/vue.js";
    import List2li from "./List2li.vue"
    export default {
        props:["list2"],
        components:{
            List2li
        }
    }
</script>
<style scoped>
    #foottitlee{
        width: 100%;
        height: 2.58rem;
        display: flex;
        flex-direction: row;
        background:#ffffff;

    }
</style>