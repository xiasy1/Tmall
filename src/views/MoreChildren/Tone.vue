<template>
  <!-- 腔调商店页面 -->
  <div class="Tone">
    <swiper class="swiper" :options="swiperOption">
      <swiper-slide>
        <img src="~assets/img/more/banner1.webp" alt="" />
      </swiper-slide>
      <swiper-slide>
        <img src="~assets/img/more/banner1.webp" alt="" />
      </swiper-slide>
      <swiper-slide>
        <img src="~assets/img/more/banner1.webp" alt="" />
      </swiper-slide>
      <swiper-slide>
        <img src="~assets/img/more/banner1.webp" alt="" />
      </swiper-slide>
      <swiper-slide>
        <img src="~assets/img/more/banner1.webp" alt="" />
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
          pagination: {
            el: ".swiper-pagination",
          },
          autoplay: true,
        },
      }
    },
    created() {
      this.$store.commit('changeTabshow')
    },
    beforeRouteLeave (to, from, next) {
      this.$store.commit('changeTabnone')
      next()
    }
  }
</script>

<style lang="less" scoped>
.swiper{
  width: 23.4375rem;
  height: 11.375rem;
  background: #f5f5f5;
  .swiper-slide{
    width: 18.75rem;
    display: flex;
    justify-content: center;
    align-items: center;
    img{
      width: 18.75rem;
      height: 9.375rem;
      border-radius: 0.625rem;
    }
  }

  .swiper-pagination{
    bottom: 0;
  }
}
</style>