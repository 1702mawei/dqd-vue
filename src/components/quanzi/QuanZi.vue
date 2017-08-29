<template>
	<div class="headerBox">
    	<quan-zi-header-box></quan-zi-header-box>
		<quan-zi-index-main></quan-zi-index-main>
		<!--<quan-zi-footer></quan-zi-footer>-->
		<common-footer></common-footer>
   </div>
</template>   
<script type="text/ecmascript-6">
    import QuanZiHeaderBox from './QuanZiHeaderBox.vue';
    import QuanZiIndexMain from './QuanZiIndexMain.vue';
    import CommonFooter from '../common/CommonFooter.vue';
//    import  QuanZiFooter from './QuanZiFooter.vue';
    import '../../public/css/quanzi.css';
    import '../../public/js/quanzi.js';
    export default {
        components:{
            QuanZiHeaderBox,
            QuanZiIndexMain,
//            QuanZiFooter
            CommonFooter
        }
    }
</script>
<style scoped>

</style>