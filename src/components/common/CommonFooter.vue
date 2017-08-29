<template>
    <footer>
        <div id="foottitle">
            <router-link to="/">
                <i class="iconfont icon-mulu"></i>
                <span>首页</span>
            </router-link>
            <router-link to="/Zhibo">
                <i class="iconfont icon-zhibo"></i>
                <span>直播</span>
            </router-link>
            <router-link to="/Zhudui">
                <i class="iconfont icon-tianjia"></i>
            </router-link>
            <router-link to="/QuanZi">
                <i class="iconfont icon-liuyan"></i>
                <span>圈子</span>
            </router-link>
            <router-link to="/Shuju">
                <i class="iconfont icon-shuju"></i>
                <span>数据</span>
            </router-link>
        </div>
    </footer>
</template>
<script type="text/ecmascript-6">
    export default {
    }
</script>
<style scoped>
    footer {
        width: 100%;
        position: fixed;
        height: 1.36rem;
        bottom: 0;
        left: 0;
        background-color:#f7f7f7;
        z-index: 2;
    }
    #foottitle{
        width: 100%;
        height: 1.36rem;
        display: flex;
        flex-direction: row;
    }
    #foottitle a{
        box-sizing: border-box;
        display: inline-block;
        text-align:center;
        flex-grow: 1;
        text-align: center;
        padding-top: 2px !important;
    }
    #foottitle a i{
        box-sizing: border-box;
        margin-top: .25rem;
        display: block;
        width: .68rem;
        height: .68rem;
        margin: 0 auto;
    }
    #foottitle a span{
        box-sizing: border-box;
        display: block;
        width: 100%;
        height: .3rem;
        margin-top: .08rem;
        font-size: 0.24rem;
        color: #555555;
    }
    #foottitle .router-link-active .iconfont{
        color: #16b13b;
    }
    #foottitle .router-link-active span{
        color: #16b13b;
    }
    @font-face {font-family: "iconfont";
        src: url('../../public/css/iconfont.eot?t=1503482291236'); /* IE9*/
        src: url('../../public/css/iconfont.eot?t=1503482291236#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('../../public/css/iconfont.woff?t=1503482291236') format('woff'), /* chrome, firefox */
        url('../../public/css/iconfont.ttf?t=1503482291236') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/
        url('../../public/css/iconfont.svg?t=1503482291236#iconfont') format('svg'); /* iOS 4.1- */
    }
    .iconfont {
        font-family:"iconfont" !important;
        font-size:0.7rem;
        font-style:normal;
        color: #333;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    .icon-tianjia:before { content: "\e605"; }
    .icon-mulu:before { content: "\e6f8"; }
    .icon-zhibo:before { content: "\e603"; }
    .icon-shuju:before { content: "\e604"; }
    .icon-liuyan:before { content: "\e61c"; }
</style>