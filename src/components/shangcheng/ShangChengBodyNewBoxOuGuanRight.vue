<template>


        <div class="qiuxing">
            <ou-guan-rightli :rightli="n" key="index" v-for="(n,index) in right"></ou-guan-rightli>

            <!--<ou-guan-rightli></ou-guan-rightli>
            <ou-guan-rightli></ou-guan-rightli>-->
        </div>


</template>
<script type="text/ecmascript-6">
    import "../../public/css/public.css";
    import "../../../node_modules/vue/dist/vue.js";
    import OuGuanRightli from "./OuGuanRightli.vue";
    export default {
        props:["right"],
        components: {
            OuGuanRightli
        }
    }

</script>
<style scoped>
    .qiuxing{
        width: 4.96rem;
        height:5.85rem;
        flex-grow: 1;

        position: relative;

    }
</style>