

$(function(){
   /* var mySwiper2 = new Swiper('.bbox',{
    })*/ 
    var mySwiper = new Swiper('.content', {
        //autoplay:1000,//可选选项，自动滑动
        //loop:true  //循环播放

       onSlideChangeStart:function(sw) {
           var index = sw.activeIndex;//当前运动页面的index
           // console.log(index);
           $(".p").eq(index).addClass("selected").siblings().removeClass("selected");
           },
       });
    // -------------点击时对应到所对应的页面上-------
    $(".p").click(function(){
        $(this).addClass("selected").siblings().removeClass("selected");
        mySwiper.slideTo($(this).index());
    });

    /*轮播图*/
    var mySwiper1 = new Swiper('.lunbo', {
        autoplay:3000,//可选选项，自动滑动
        loop:true, //循环播放
        pagination : '.swiper-pagination'

    });
    $(".tui p").toggle(function(){
        $(this).nextAll(".kuaiBox").show();
        $(".tui i img").css("translate","rotate(180deg)")

    },function(){
        $(this).nextAll(".kuaiBox").hide();
    })

    });

