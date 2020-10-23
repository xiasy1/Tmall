<template>
  <div class="MainTabBar">
    <TabBar>
      <router-link to="/">
        <TabBarItem>
          <div slot="item-icon" class="iconfont icon-home"></div>
          <div slot="item-text">首页</div>
        </TabBarItem>
      </router-link>
      <router-link to="/cart">
        <TabBarItem>
          <div slot="item-icon" class="iconfont icon-cart"></div>
          <div slot="item-text">购物车</div>
        </TabBarItem>
      </router-link>
      <router-link to="/list">
        <TabBarItem>
          <div slot="item-icon" class="iconfont icon-list"></div>
          <div slot="item-text">订单列表</div>
        </TabBarItem>
      </router-link>
      <router-link to="/profile">
        <TabBarItem>
          <div slot="item-icon" class="iconfont icon-profile"></div>
          <div slot="item-text">我的淘宝</div>
        </TabBarItem>
      </router-link>
       <router-link to="/more">
        <TabBarItem>
          <div slot="item-icon" class="iconfont icon-more"></div>
          <div slot="item-text">更多</div>
        </TabBarItem>
      </router-link>
    </TabBar>
  </div>
</template>

<script>
import TabBar from "../TabBar";
import TabBarItem from "../TabBarItem";
export default {
  name: "MainTabBar",
  components: {
    TabBar,
    TabBarItem,
  },
};
</script>

<style lang="less" scoped>
  .router-link-exact-active{
    color: #ff852a;
  }
</style>