<template>
    <div id="foottitle">
        <list1li :listli="n" key="index" v-for="(n,index) in list1"></list1li>
    </div>
</template>
<script type="text/ecmascript-6">
    import "../../public/css/public.css";
    import "../../../node_modules/vue/dist/vue.js";
    import List1li from "./List1li.vue"
    export default {
        props:["list1"],
        components:{
            List1li
        }
    }
</script>
<style scoped>
    #foottitle{

        width: 100%;
        height: 2.08rem;
        display: flex;
        flex-direction: row;
        background:#ffffff;

    }


</style>