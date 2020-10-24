<template>
  <div class="more">
    <ul class="serviceTab" @click="tabChangeClick">
      <li data-cmpname='Feature' :class="{tabActive:isActive}">特色导购</li>
      <li data-cmpname='FuncServise' :class="{tabActive:!isActive}">功能服务</li>
    </ul>
    <keep-alive>
      <component :is="componentId"></component>
    </keep-alive>
  </div>
</template>

<script>
  import Feature from './MoreChildren/Feature';
  import FuncServise from './MoreChildren/FuncService';

  export default {
    created() {
      this.$store.commit('changeTabshow')
    },
    beforeRouteLeave (to, from, next) {
      this.$store.commit('changeTabnone')
      next()
    },
    data() {
      return {
        componentId:'Feature',
        isActive:true
      }
    },
    components: {
      Feature,
      FuncServise
    },
    methods: {
      tabChangeClick(ev){
        const cmpName = ev.target.dataset.cmpname
        if(cmpName) {
          this.componentId = cmpName
          this.isActive = !this.isActive
        }
      }
    },
  }
</script>

<style lang="less" scoped>
.serviceTab{
  display: flex;
  width: 22.1875rem;
  height: 1.875rem;
  line-height: 1.875rem;
  margin: 0.625rem auto;
  border: 1px solid #5f646e;
  border-radius: 0.5rem;
  li{
    height: 100%;
    flex: 1;
    font-size: 0.875rem;
    text-align: center;
    &:first-child{
      border-radius: 0.5rem 0 0 0.5rem;
    }
    &:last-child{
      border-radius: 0 0.5rem 0.5rem 0;
    }
    &.tabActive{
      color: #fff;
      background: #5f646e;
    }
  }
}
</style>