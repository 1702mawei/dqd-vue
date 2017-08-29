<template>
    <div>
        <index-head-box></index-head-box>
        <index-section :navlist9="indexdatagaokai" :navlist8="indexDatanews" :navlist="indexN" :navlist1="indexNewBoxData" :navlist2="indexNewsData" :navlist3="indexNewsDataImg" :navlist4="indexNewsDataName" :navlist5="indexDataFBiaoImg" :navlist6="indexDataBiSai" :navlist7="indexDataxinwen"></index-section>
        <!--<index-footer></index-footer>-->
        <common-footer></common-footer>
    </div>
</template>
<script>
    import IndexHeadBox from './IndexHeadBox.vue';
    import '../../public/css/index.css'
    import IndexFooter from './IndexFooter.vue'
    import IndexSection from './IndexSection.vue'
    import  indexfetch from '../../fetch/indexfetch.js';
    import CommonFooter from '../common/CommonFooter.vue'
    export default {
        data(){
            return {
                indexN:[],
                indexNewBoxData:[],
                indexNewsData:[],
                indexNewsDataImg:[],
                indexNewsDataName:[],
                indexDataFBiaoImg:[],
                indexDataBiSai:[],
                indexDataxinwen:[],
                indexDatanews:[],
                indexdatagaokai:[],
            }
        },
        components:{
            IndexHeadBox,
             IndexSection,
//            IndexFooter,
            CommonFooter
        },
        created:function (){
            this.initdataLunbo();
        },
        methods:{
            initdataLunbo:function () {
                indexfetch.getShujuinfo((data)=>{
                    this.indexN=data.indexSectionLunbo;
                    this.indexNewBoxData=data.indexSectionNewBox;
                    this.indexNewsData=data.indexSectionXinWen;
                    this.indexNewsDataImg=data.indexSectionDongQiuImg;
                    this.indexNewsDataName=data.indexSectionDingQiuSpan;
                    this.indexDataFBiaoImg=data.indexSectionFaBiaoImg;
                    this.indexDataBiSai=data.indexSectionbisai;
                    this.indexDataxinwen=data.indexSectionXiwen;
                    this.indexDatanews=data.indexSectionNews;
                    this.indexdatagaokai=data.indexSection;
                })
            },
        },
    }
</script>

<style>

</style>