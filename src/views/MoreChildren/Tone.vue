<template>
  <!-- 腔调商店页面 -->
  <div class="Tone">
    <swiper class="swiper1" :options="swiperOption1">
      <swiper-slide v-for="(item,i) in swiper1Info" :key="i">
        <img :src="item.imgUrl" alt="" />
        <div class="imgDesc">
          <img src="~assets/img/more/logo.webp" alt="">
          <h5>
            <span>时裳</span>
            <em>VOL.0{{item.Vol}}</em>
          </h5>
          <h2>{{item.title}}</h2>
          <p>{{item.tip}}</p>
        </div>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>

    <swiper class="swiper2" :options="swiperOption2">
      <swiper-slide v-for="(obj,i) in swiper2Info" :key="i">
        <ul class="listTop">
          <li v-for="(item1,j) in obj.top" :key="j">
            <a href="">
              <h5>{{ item1.title }}</h5>
              <img :src="item1.imgUrl" alt=""/>
            </a>
          </li>
        </ul>
        <ul class="listBottom">
          <li v-for="(item2,k) in obj.bottom" :key="k+10">
            <a href="">
              <h5>{{ item2.title }}</h5>
              <img :src="item2.imgUrl" alt="" />
            </a>
          </li>
        </ul>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>

    <nav>
      <a href="" v-for="(item,i) in goodsDetails" :key="i+20">
        <img :src="item.imgUrl" alt="" />
        <div class="imgDesc">
          <img src="~assets/img/more/logo.webp" alt="">
          <h5>
            <span>时裳</span>
            <em>VOL.0{{item.vol}}</em>
          </h5>
          <h2>{{item.title}}</h2>
          <p>{{item.tip}}</p>
        </div>
      </a>
    </nav>
  </div>
</template>

<script>
import {getToneInfo} from "network/more"

export default {
  data() {
    return {
      swiperOption1: {
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        autoplay: true,
        spaceBetween: -60,
      },

      swiperOption2: {
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        autoplay: {
          delay: 4000
        },
      },

      swiper1Info: [],    //轮播图1数据
      swiper2Info: [],    //轮播图2数据
      goodsDetails: []    //商品详情数据
    };
  },
  created() {
    this.$store.commit("changeTabshow");
    this.getToneGoods("swiper1Info");
    this.getToneGoods("swiper2Info");
    this.getToneGoods("goodsDetails");
  },
  beforeRouteLeave(to, from, next) {
    this.$store.commit("changeTabnone");
    next();
  },
  methods: {
    getToneGoods(content) {
      getToneInfo().then(res=>{
        this[content] = res.data[content]
      })
    }
  }
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
    background: #302e307e;
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