<template>
    <div class="headBox">
        <ZhiboHeader></ZhiboHeader>
        <ZhiboNav></ZhiboNav>
    </div>
</template>
<script type="text/ecmascript-6">
    import ZhiboHeader from "./ZhiboHeader.vue"
    import ZhiboNav from "./ZhiboNav.vue"
    export default {
        components:{
            ZhiboHeader,
            ZhiboNav
        }
    }
</script>
<style scoped>
.headBox{
    position: fixed;
    top: 0;
    z-index: 2;
}
</style>