<template>
  <!-- 魅力惠页面 -->
  <div class="charm" @scroll="pageScroll">
    <CharmNav :navTitle="navTitle" />

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

    <section class="newGoods">
      <h3>新品推荐</h3>
      <ul class="newGoodsList">
        <li v-for="(item,i) in newGoods" :key="i">
          <a href="javascript:;">
            <img :src="item.imgUrl" alt="" />
            <em v-if="item.new">新品</em>
            <h4>{{item.enName}}</h4>
            <p>{{item.desc}}</p>
            <h5>￥{{item.price}}<del>￥{{item.countPice}}</del></h5>
          </a>
        </li>
      </ul>
    </section>

    <section class="famousBrands">
      <h2>大牌推荐</h2>
      <ul class="famousList">
        <li v-for="(item,i) in famousBrands" :key="i">
          <img :src="item.imgName" alt="" />
          <img :src="item.imgUrl" alt="" />
          <p>古驰的奇幻世界</p>
          <div class="cover"></div>
        </li>
      </ul>
    </section>

    <section class="recommend">
      <h2>穿搭推荐</h2>
      <div class="recContent">
        <div class="recTop">
          <h3>LOOK.01</h3>
          <p>口红+skii套装+菲拉格慕香水+迪奥999+skii钻白小灯泡，挚爱奢宠，送给你最爱的她</p>  
          <img src="" alt="">        
        </div>
        <ul class="recBottom">
          <li></li>
          <li>
            <div>
              <img src="~assets/img/more/sk-II.webp" alt="">  
              <h6>SK-II</h6>  
              <p>市场价：<del>￥3000.0</del></p>
              <strong>到手价：￥3080</strong>
            </div>
            <div>
              <img src="~assets/img/more/sk-II2.webp" alt="">  
              <p>市场价：<del>￥700.0</del></p>
              <strong>到手价：￥189</strong>
            </div>
          </li>
          <li>
            <div>
              <img src="~assets/img/more/sk-II3.webp" alt="">  
              <h6>SK-II</h6>  
              <p>市场价：<del>￥1040.0</del></p>
              <strong>到手价：￥819</strong>
            </div>
          </li>
        </ul>
      </div>
      <ol class="recList">
        <li v-for="(item,i) in recommendInfo" :key="i">
          <a href="javascript:;">
            <img :src="item.imgUrl" alt="">
            <p>{{item.title}}</p>
            <div class="cover"></div>
          </a>
        </li>
      </ol>
    </section>

    <div class="guessYouLike">
      <h2>猜你喜欢</h2>
      <nav class="likeList">
        <a href="javascript:;" v-for="(item,i) in lovelyInfo" :key="i">
          <img :src="item.imgUrl" alt="" />
          <em v-if="item.new">新品</em>
          <h4>{{item.eName}}</h4>
          <p>{{item.desc}}</p>
          <h5>
            <div class="price">
              ￥{{item.price}} <del v-show="item.oldPrice">&yen;{{item.oldPrice}}</del>
            </div>
            <div class="count">{{item.count}}折</div>
          </h5> 
        </a>
      </nav>
      <div class="loading" ref="load">加载中...</div>
    </div>
  </div>
</template>

<script>
import CharmNav from "components/CharmNav";

import {getCharmInfo} from "network/more"

export default {
  data() {
    return {
      navTitle: [],     //导航栏标题
      newGoods: [],       //新品推荐数据
      famousBrands: [],   //大牌推荐数据
      recommendInfo: [],  //穿搭推荐数据
      lovelyInfo: [],     //猜你喜欢数据
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
    this.getGoods("navTitle");
    this.getGoods("newGoods");
    this.getGoods("famousBrands");
    this.getGoods("recommendInfo");
    this.getGoods("lovelyInfo");
  },
  beforeRouteLeave(to, from, next) {
    this.$store.commit("changeTabnone");
    next();
  },

  methods: {
    getGoods(content) {
      getCharmInfo().then(res=>{
        this[content] = res.data[content]
      })
    },
    pageScroll() {
      let distance = this.$refs.load.getBoundingClientRect().top
      if(distance < ih) {
        setTimeout(() => {
          getCharmInfo().then(res=>{
            let increInfo = []
            increInfo = res.data.lovelyInfo
            this.lovelyInfo = this.lovelyInfo.concat(increInfo)
          })          
        }, 2000);
      }
    }
  }
};
</script>

<style lang="less" scoped>
.charm {
  height: 100%;
  overflow-y: auto;
  font-family: "PingFang SC";
  .swiper {
    height: 17.625rem;
    --swiper-theme-color: #fff;
    img {
      height: 17.625rem;
    }
  }
  .newGoods {
    h3 {
      height: 3.75rem;
      line-height: 3.75rem;
      text-align: center;
      color: #000;
      font-size: 21px;
      font-weight: 700;
      font-family: "PingFang SC";
    }
    .newGoodsList {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      font-size: 0.75rem;
      padding: 0 0.625rem;
      li {
        width: 6.3125rem;
        height: 10.9375rem;
        // border: 1px solid silver;
        margin-bottom: 0.3125rem;
        img {
          width: 6.25rem;
          height: 6.25rem;
        }
        em {
          color: #fff;
          font-weight: bold;
          background: red;
          padding: 0.125rem;
          border-radius: 0.3125rem;
        }
        h4{
          color: #000;
          margin: 0.125rem 0;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        p {
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        h5{
          color: #d62727;
          font-weight: bold;
          del{
            font-weight: normal;
            color: #999;
          }
        }
      }
    }
  }
  .famousBrands {
    margin-bottom: 1.0625rem;
    h2 {
      color: #000;
      font-size: 21px;
      font-weight: 700;
      height: 3.75rem;
      line-height: 3.75rem;
      padding-left: 0.9375rem;
    }
    .famousList {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      li {
        width: 7.125rem;
        height: 12rem;
        font-size: 0;
        margin-bottom: 0.625rem;
        margin-right: 0.125rem;
        position: relative;
        img {
          width: 100%;
        }
        p {
          margin-top: -15px;
          width: 7.125rem;
          height: 2.8125rem;
          line-height: 3.8125rem;
          text-align: center;
          font-size: 12px;
          font-weight: 700;
          background-image:url('//gw.alicdn.com/tfs/TB1Ki8ar.Y1gK0jSZFCXXcwqXXa-342-135.png_230x230q75.jpg_.webp');
          background-size: 100% 100%;
          background-position: 50% 50%;
          color: rgb(255, 255, 255);
        }
        .cover{
          width: 7.125rem;
          height: 12rem;          
          position: absolute;
          top: 0;
          left: 0;
          background: rgba(0, 0, 0, 0.03);
        }
      }
    }
  }
  .recommend{
    h2{
      height: 3.75rem;
      line-height: 3.75rem;
      text-align: center;
      color: #000;
      font-size: 21px;
    }
    .recContent{
      width: 22.3125rem;
      height: 22.3125rem;
      box-sizing: border-box;
      background: #fcfcfc;
      margin: 0 auto;
      padding: 0 0.625rem;
      font-size: 0.75rem;
      box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
      .recTop{
        padding-bottom: 0.125rem;
        position: relative;
        border-bottom: 1px solid #000;
        h3{
          color: #000;
          font-size: 1.25rem;
          font-weight: bold;
        }
        p{
          width: 18.75rem;
          color: #000;
          font-size: 0.875rem;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        >img{
          position: absolute;
          top: 0;
          right: 0;
        }
      }
      .recBottom{
        height: 16.6875rem;
        display: flex;
        margin-top: 0.625rem;
        li{
          display: flex;
          flex-direction: column;
          justify-content: center;
          text-align: center;
          img{
            width: 5.625rem;
          }  
          &:first-child{
            min-width: 147px;
            background: url('~assets/img/more/Dior.webp') center center;
            background-size: cover;
          }        
        }
        p{
          white-space: nowrap;
          text-overflow: ellipsis;
        }
        strong{
          color: #dd2828;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

      }
    }
    .recList{
      display: flex;
      margin-top: 0.625rem;
      padding-left: 0.5625rem;
      li{
        width: 4.5625rem;
        height: 5.75rem;
        margin-right: 0.625rem;
        text-align: center;
        font-size: 0.75rem;
        color: #000;
        border-radius: 0.3125rem;
        box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px;
        background:#e5e5e5;
        &:first-child{
          background:#fff;
        }
        a{
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          position: relative;
        }
        img{
          width: 4.0625rem;
          height: 4.0625rem;
        }
        p{
          margin-top: 0.3125rem;
        }
      }
    }
  }
  .guessYouLike{
    h2{
      color: #000;
      font-size: 21px;
      font-weight: 700;
      height: 6rem;
      line-height: 6rem;
      padding-left: 0.9375rem;
    }
    .likeList{
      width: 351px;
      margin: 0 auto;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      a{
        width: 171px;
        height: 263px;
        font-size: 0.875rem;
        box-sizing: border-box;
        border-radius: 0.3125rem;
        padding: 0 0.3125rem;
        margin-bottom: 0.625rem;
        position: relative;
        background-color: #f7f7f7;
        img{
          width: 100%;
          opacity: 0.9;
        }
        em{
          font-size: 0.75rem;
          padding: 0 0.125rem;
          border: 1px solid #000;
        }
        h4{
          color: #000;
          font-weight: bold;
        }
        p{
          font-size: 12px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          margin: 0.3125rem 0;
        }
        h5{
          display: flex;
          align-items: center;
          justify-content: space-between;
          .price{
            color:#d62727;
            font-size: 0.875rem;
            font-weight: bold;
            del{
              color: #9494a3;
              font-weight: normal;
              font-size: 0.75rem;
            }
          }
          .count{
            background: #000;
            color: #fff;
          }
        }
      }
    }
    .loading{
      text-align: center;
    }
  }
}
</style>