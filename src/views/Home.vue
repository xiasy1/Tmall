<template>
  <div class="home">
    <!-- 顶部搜索栏 -->
    <header class="search">
      <h2 class="iconfont icon-taobao"></h2>
      <router-link to="/">
        <span>
          <i class="iconfont icon-fangdajing"></i>
          寻找宝贝店铺
        </span>
      </router-link>
    </header>
    <!-- 首页轮播图 -->
    <swiper class="swiper" :options="swiperOption">
      <swiper-slide>
        <img src="~assets/img/home/banner1.jpg" alt="" />
      </swiper-slide>
      <swiper-slide>
        <img src="~assets/img/home/banner2.jpg" alt="" />
      </swiper-slide>
      <swiper-slide>
        <img src="~assets/img/home/banner3.jpg" alt="" />
      </swiper-slide>
      <swiper-slide>
        <img src="~assets/img/home/banner4.jpg" alt="" />
      </swiper-slide>
      <swiper-slide>
        <img src="~assets/img/home/banner5.jpg" alt="" />
      </swiper-slide>
      <swiper-slide>
        <img src="~assets/img/home/banner6.jpg" alt="" />
      </swiper-slide>
      <swiper-slide>
        <img src="~assets/img/home/banner7.jpg" alt="" />
      </swiper-slide>
      <swiper-slide>
        <img src="~assets/img/home/banner8.jpg" alt="" />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    <!-- 滑动导航栏 -->
    <div class="banner">
      

    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      swiperOption: {
        pagination: {
          el: ".swiper-pagination",
        },
        autoplay: true,
      },
    };
  },
};
</script>

<style lang="less" scoped>
.home {
  header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 2.3125rem;
    background: #ff852a;
    padding: 0 0.5rem;
    display: flex;
    align-items: center;
    z-index: 200;
    h2 {
      color: #fff;
      font-size: 1.75rem;
      margin-right: 0.3125rem;
    }
    a {
      flex: 1;
      height: 1.5625rem;
      line-height: 1.5625rem;
      color: #fff;
      font-size: 0.75rem;
      text-align: center;
      background: #ff4e22;
      border-radius: 0.3125rem;
    }
  }
  .swiper {
    margin-top: 2.3125rem;
    height: 7.5rem;
    img {
      width: 100%;
    }
  }
  .content{
    height: 1000px;
  }
}
</style>