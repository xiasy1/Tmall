<template>
  <!-- 特色导购内容 -->
  <div class="feature">
    <!-- 特色市场 -->
    <NavList :navInfo="feature"/>
    <!-- 主题市场 -->
    <NavList :navInfo="theme"/>
  </div>
</template>

<script>
  import NavList from 'components/NavList'

  import {getNavListInfo} from 'network/more'

  export default {
    data() {
      return {
        feature: {},        // 特色市场数据
        theme: {}            // 主题市场数据
      };
    },
    created() {
      this.getNavListData("feature")
      this.getNavListData("theme")
    },
    methods: {
      getNavListData(content) {
        getNavListInfo().then(res=>{
          this[content] = res.data[content]
        })
      }
    },
    components: {
      NavList,
    }
  }
</script>

<style lang="less" scoped>

</style>