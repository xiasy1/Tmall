<template>
  <!-- 腔调商店页面 -->
  <div class="Tone">
    <swiper class="swiper1" :options="swiperOption1">
      <swiper-slide>
        <img src="~assets/img/more/banner1.webp" alt="" />
        <div class="imgDesc">
          <img src="~assets/img/more/logo.webp" alt="">
          <h5>
            <span>时裳</span>
            <em>VOL.040</em>
          </h5>
          <h2>无色胜有色</h2>
          <p>不过时的黑白灰   无法超越的经典。</p>
        </div>
      </swiper-slide>
      <swiper-slide>
        <img src="~assets/img/more/banner2.jpg" alt="" />
        <div class="imgDesc">
          <img src="~assets/img/more/logo.webp" alt="">
          <h5>
            <span>时裳</span>
            <em>VOL.040</em>
          </h5>
          <h2>无色胜有色</h2>
          <p>不过时的黑白灰   无法超越的经典。</p>
        </div>
      </swiper-slide>
      <swiper-slide>
        <img src="~assets/img/more/banner3.jpg" alt="" />
        <div class="imgDesc">
          <img src="~assets/img/more/logo.webp" alt="">
          <h5>
            <span>时裳</span>
            <em>VOL.040</em>
          </h5>
          <h2>无色胜有色</h2>
          <p>不过时的黑白灰   无法超越的经典。</p>
        </div>
      </swiper-slide>
      <swiper-slide>
        <img src="~assets/img/more/banner4.jpg" alt="" />
      </swiper-slide>
      <swiper-slide>
        <img src="~assets/img/more/banner5.jpg" alt="" />
      </swiper-slide>
      <swiper-slide>
        <img src="~assets/img/more/banner6.jpg" alt="" />
      </swiper-slide>
      <swiper-slide>
        <img src="~assets/img/more/banner7.jpg" alt="" />
      </swiper-slide>
      <swiper-slide>
        <img src="~assets/img/more/banner8.png" alt="" />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>

    <swiper class="swiper2" :options="swiperOption2">
      <swiper-slide v-for="item in 3" :key="item">
        <ul class="listTop">
          <li v-for="item in 4" :key="item">
            <a href="">
              <h5>冬新品{{ item }}</h5>
              <img
                src="//gw.alicdn.com/imgextra/i1/904521978/O1CN011QTxsdjPEDtfWRn_!!904521978.jpg_110x110Q50s100.jpg_.webp"
                alt=""
              />
            </a>
          </li>
        </ul>
        <ul class="listBottom">
          <li v-for="item in 4" :key="item">
            <a href="">
              <h5>冬新品{{ item }}</h5>
              <img
                src="//gw.alicdn.com/imgextra/i1/904521978/O1CN011QTxsdjPEDtfWRn_!!904521978.jpg_110x110Q50s100.jpg_.webp"
                alt=""
              />
            </a>
          </li>
        </ul>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>

    <nav>
      <a href="" v-for="item in 20" :key="item">
        <img src="~assets/img/more/banner3.jpg" alt="" />
        <div class="imgDesc">
          <img src="~assets/img/more/logo.webp" alt="">
          <h5>
            <span>时裳</span>
            <em>VOL.040</em>
          </h5>
          <h2>时髦红人的早秋搭配</h2>
          <p>不过时的黑白灰   无法超越的经典。</p>
        </div>
      </a>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      swiperOption1: {
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        autoplay: true,
        spaceBetween: -60,
      },

      swiperOption2: {
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        autoplay: true,
      },
    };
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
.Tone {
  background: #f5f5f5;
}
.swiper1 {
  width: 23.4375rem;
  height: 11.375rem;
  background: #f5f5f5;
  --swiper-theme-color: #242424;
  .swiper-slide {
    height: 9.0625rem;
    margin-top: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    >img {
      width: 18.75rem;
      height: 9.375rem;
      border-radius: 0.625rem;
    }
    // 图片蒙版样式
    .imgDesc{
      width: 18.75rem;
      height: 9.375rem;
      padding-top: 70px;
      box-sizing: border-box;
      border-radius: 0.625rem;
      position: absolute;
      top: -1pxs;
      left: 38px;
      background: #70707641;
      img{
        width: 41px;
        height: 43px;
        position: absolute;
        top: 6px;
        left: 6px;
      }
      h5{
        width: 94px;
        height: 17px;
        line-height: 17px;
        font-size: 0.75rem;
        display: flex;
        position: absolute;
        top: 5px;
        right: 5px;
        border-radius: 10px;
        background: #bbab7d;
        span{
          color: #fff;
          padding: 0 5px;
        }
        em{
          flex: 1;
          line-height: 17px;
          color: #bbab7d;
          text-align: center;
          background: #fff;
          border-radius: 0 10px 10px 0;
        }
      }
      h2{
        color: #fff;
        font-size: 20px;
        font-weight: 900;
        text-align: center;
      }
      p{
        color: #fff;
        font-size: 0.75rem;
        text-align: center;
      }
    }
  }
  .swiper-pagination {
    bottom: 0.25rem;
  }
}
.swiper2 {
  height: 15rem;
  margin-left: auto;
  margin-right: auto;
  --swiper-theme-color: #242424;
  background: #fff;
  .swiper-slide {
    ul {
      width: 100%;
      height: 6.875rem;
      display: flex;
      li {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        border-right: 1px solid silver;
        &:last-child{
          border-right: none;
        }
        img {
          width: 3.25rem;
          height: 3.25rem;
        }
      }
    }
    .listTop {
      border-bottom: 1px solid silver;
    }
  }
  .swiper-pagination {
    bottom: 0;
  }
}
nav {
  border-top: 1px solid silver;
  margin-top: 0.625rem;
  a {
    display: block;
    width: 335px;
    height: 167px;
    margin: 0.625rem auto;
    position: relative;
  }
  img {
    width: 100%;
    height: 100%;
    border-radius: 0.625rem;
  }
    // 图片蒙版样式
  .imgDesc{
    width: 20.9375rem;
    height: 10.4375rem;
    padding-top: 5rem;
    box-sizing: border-box;
    border-radius: 0.625rem;
    position: absolute;
    top: 0;
    left: 0;
    background: #45454aa1;
    img{
      width: 41px;
      height: 43px;
      position: absolute;
      top: 6px;
      left: 6px;
    }
    h5{
      width: 5.875rem;
      height: 1.0625rem;
      line-height: 17px;
      font-size: 0.75rem;
      display: flex;
      position: absolute;
      top: 5px;
      right: 5px;
      border-radius: 10px;
      background: #bbab7d;
      span{
        color: #fff;
        padding: 0 5px;
      }
      em{
        flex: 1;
        line-height: 17px;
        color: #bbab7d;
        text-align: center;
        background: #fff;
        border-radius: 0 10px 10px 0;
      }
    }
    h2{
      color: #fff;
      font-size: 23px;
      font-weight: 900;
      text-align: center;
    }
    p{
      color: #fff;
      font-size: 0.75rem;
      text-align: center;
    }
  }
}
</style>