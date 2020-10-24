<template>
  <!-- 魅力惠页面 -->
  <div class="charm">
    <CharmNav />

    <swiper class="swiper" :options="swiperOption">
      <swiper-slide>
        <img src="~assets/img/more/charmBanner1.jpg" alt="" />
      </swiper-slide>
      <swiper-slide>
        <img src="~assets/img/more/charmBanner2.jpg" alt="" />
      </swiper-slide>
      <swiper-slide>
        <img src="~assets/img/more/charmBanner3.jpg" alt="" />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>

    <div class="newGoods">
      <h3>新品推荐</h3>
      <ul class="newGoodsList">
        <li v-for="item in 9" :key="item">
          <a href="javascript:;">
            <img src="~assets/img/more/bao.jpg" alt="">
            <em>新品</em>
            <p>SEE BY CHLOE</p>
            <p>2020春夏多色Joan牛皮流苏圆环迷你单肩斜挎包女包</p>
            <h5>￥2290 <del>￥2600</del></h5>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import CharmNav from "components/CharmNav";

export default {
  data() {
    return {
      swiperOption: {
        loop: true,
        pagination: {
          el: ".swiper-pagination",

        },
        autoplay: true,
      },
    };
  },
  components: {
    CharmNav,
  },
  created() {
    this.$store.commit("changeTabshow");
  },
  beforeRouteLeave(to, from, next) {
    this.$store.commit("changeTabnone");
    next();
  },
};
</script>

<style lang="less" scoped>
.charm {
  height: 2000px;
  .swiper {
    height: 17.625rem;
    --swiper-theme-color: #fff;
    img {
      height: 17.625rem;
    }
  }
  .newGoods {
    h3{
      height: 3.75rem;
      line-height: 3.75rem;
      text-align: center;
      color: #000;
      font-size: 21px;
      font-weight: 700;
      font-family: "PingFang SC";
    }
    .newGoodsList{
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      font-size: 0.75rem;
      padding: 0 0.625rem;
      li{
        width: 6.3125rem;
        height: 10.9375rem;
        // border: 1px solid silver;
        margin-bottom: 0.3125rem;
        img{
          width: 6.25rem;
          height: 6.25rem;
        }
        em{
          color: #fff;
          font-weight: bold;
          background: red;
          padding: 0.125rem;
          border-radius: 0.3125rem;
        }
        p{
          margin-top: 0.125rem;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      }
    }
  }
}
</style>