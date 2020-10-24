<template>
  <!-- 腔调商店页面 -->
  <div class="Tone">
    <swiper class="swiper" :options="swiperOption">
      <swiper-slide>
        <img src="~assets/img/more/banner1.webp" alt="" />
      </swiper-slide>
      <swiper-slide>
        <img src="~assets/img/more/banner2.jpg" alt="" />
      </swiper-slide>
      <swiper-slide>
        <img src="~assets/img/more/banner3.jpg" alt="" />
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      swiperOption: {
        loop: true,
        pagination: {
          el: ".swiper-pagination",
        },
        // autoplay: true,
        // slidesPerView : 1,
        slidesOffsetBefore : 50,
        // slidesOffsetAfter : 50,
        // centerInsufficientSlides: true,
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
.swiper {
  width: 23.4375rem;
  height: 11.375rem;
  background: #f5f5f5;
  .swiper-slide {
    width: 18.75rem !important;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 18.75rem;
      height: 9.375rem;
      border-radius: 0.625rem;
    }
  }

  .swiper-pagination {
    bottom: 0;
  }
}
</style>