<template>
    <section>
        <div class="swiper-container content">
            <div class="swiper-wrapper">
                <div class="swiper-slide first">
                    <index-section-lun-bo :navlist="navlist"></index-section-lun-bo>
                    <div class="newBox">
                        <index-section-new-box :navlist1="navlist1"></index-section-new-box>
                    </div>
                </div>
                <div class="swiper-slide">
                    <index-section-news  :navlist2="navlist2"></index-section-news>
                </div>
                <div class="swiper-slide">
                    <div class="inp">
                        <input type="text" placeholder="搜索懂球号"/>
                    </div>
                    <div class="tuijian">
                        <div  class="tital">
                            <p>热门推荐</p>
                            <p>更多></p>
                            <index-section-dong-qiu-img :navlist3="navlist3"></index-section-dong-qiu-img>
                            <index-section-dong-qiu-name :navlist4="navlist4"></index-section-dong-qiu-name>
                        </div>
                    </div>
                    <div class="kg">
                    </div>
                    <div class="zuixin">
                        <p>最新发表</p>
                        <p>奥斯卡加盟中超？米兰迟迟不能收购？意大利小伙有活要说</p>
                        <index-section-fa-biao :navlist5="navlist5"></index-section-fa-biao>
                        <span>唯喔fanTV</span>
                        <span> 11评论</span>
                    </div>
                    <index-section-news  :navlist2="navlist2"></index-section-news>
                </div>
                <div class="swiper-slide">
                    <index-section-bi-sai :navlist6="navlist6"></index-section-bi-sai>
                </div>
                <div class="swiper-slide">
                    <index-section-xi-wen :navlist7="navlist7"></index-section-xi-wen>
                </div>
                <div class="swiper-slide">
                    <index-section-xin-wen-new :navlisr8="navlist8"></index-section-xin-wen-new>
                    <index-section-gao-ki :navlist9="navlist9"></index-section-gao-ki>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
    import '../../public/js/jquery.1.8.3.min';
    import '../../public/js/swiper.min.js';
    import  '../../public/css/swiper.min.css';
    import IndexSectionLunBo from './IndexSectionLunBo.vue';
    import IndexSectionNewBox from './IndexSectionNewBox.vue';
    import IndexSectionNews from './IndexSectionNews.vue';
    import IndexSectionDongQiuImg from './IndexSectionDongQiuImg.vue';
    import IndexSectionDongQiuName from './IndexSectionDongQiuName.vue';
    import IndexSectionFaBiao from './IndexSectionFaBiao.vue';
    import IndexSectionBiSai from './IndexSectionBiSai.vue';
    import IndexSectionXinWen from './IndexSectionXinWen.vue';
    import IndexSectionXiWen from './IndexSectionXinWen.vue';
    import IndexSectionXinWenNew from './IndexSectionXinWenNew.vue';
    import IndexSectionGaoKi from './IndexSectionGaoKi.vue';
    export  default {
        props:['navlist9','navlist','navlist1','navlist2','navlist3','navlist4','navlist5','navlist6','navlist7','navlist8'],
        mounted: function () {
            $(".tui p").toggle(function(){
                $(this).nextAll(".kuaiBox").show();
                $(".tui i img").css("translate","rotate(180deg)")
            },function(){
                $(this).nextAll(".kuaiBox").hide();
            });
            let mySwiper = new Swiper('.content', {
                autoHeight:'auto',
                direction:'horizontal',
                onSlideChangeStart:function(sw) {
                    let index = sw.activeIndex;
                    $(".p").eq(index).addClass("selected").siblings().removeClass("selected");
                },
            });
            $(".p").click(function(){
                $(this).addClass("selected").siblings().removeClass("selected");
                mySwiper.slideTo($(this).index());
            });
        },
        components:{
            IndexSectionLunBo,
            IndexSectionNewBox,
            IndexSectionNews,
            IndexSectionDongQiuImg,
            IndexSectionDongQiuName,
            IndexSectionFaBiao,
            IndexSectionBiSai,
            IndexSectionXiWen,
            IndexSectionXinWenNew,
            IndexSectionGaoKi,
        },
    }
</script>
<style>
    section{
        position: absolute;
        top:2.89rem;
        bottom:1.36rem ;
        width: 100%;
        overflow-y: auto;
        margin-top:.2rem;
    }
    .content{
        width:100%;
    }
    .newBox{
        width:100%;
        background:#f7f7f7;
    }
    .inp{
        width:100%;
        height:1.34rem;
        background:#eeeeee ;
        display: flex;
    }
    .inp input{
        width:10.4rem;
        height:.94rem;
        position: relative;
        top: 7px;
        left: 5px;
        background:  white ;
    }
    .tuijian{
        width:100%;
        height:3.98rem;
        background: #f7f7f7;
        position: relative;
    }
    .tital{
        height:0.5rem;
    }
    .tital p:nth-child(1){
        position: absolute;
        left:0.36rem;
        top:0.37rem;
        color: #555555;
        font-weight: bold;
        font-size: 0.4rem;
    }
    .tital p:nth-child(2){
        position: absolute;
        right:0.36rem;
        top:0.37rem;
        color: #555555;
        font-weight: bold;
        font-size: 0.4rem;
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
    .kg{
        width:100%;
        height:0.24rem;
        background: #eeeeee;
    }
    .zuixin{
        height:6.29rem;
        width:100%;
        background: #f7f7f7;
        position: relative;
        border-bottom: 2px solid #e9e9e9;
    }
    .zuixin p:nth-child(1){
        position: absolute;
        top:0.35rem;
        left:0.32rem;
        font-size: 0.45rem;
        color: #555555;
        font-weight: bold;
    }
    .zuixin p:nth-child(2){
        position: absolute;
        top:1.33rem;
        left:0.32rem;
        font-size: 0.55rem;
        color: #333333;
        font-weight: bold;
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
    .zuixin span:nth-of-type(1){
        position: absolute;
        left:0.35rem;
        height:0.4rem;
        font-size: 0.4rem;
        bottom: 0.2rem;
    }
    .zuixin span:nth-of-type(2){
        position: absolute;
        right:0.35rem;
        height:0.4rem;
        font-size: 0.4rem;
        bottom: 0.2rem;
    }
</style>


















