<template>
	<div class="header">
        <quan-zi-header></quan-zi-header>
        <quan-zi-nav></quan-zi-nav>
   </div>
</template>
<script type="text/ecmascript-6">
    import QuanZiHeader from "./QuanZiHeader.vue";
    import QuanZiNav from "./QuanZiNav.vue"
    export default {
        components:{
            QuanZiHeader,
            QuanZiNav
        }
    }
</script>
<style scoped>
    .header{
        width:100%;
        height:1.92rem;
        box-sizing: border-box;
        background:#16b13a;
    }
</style>