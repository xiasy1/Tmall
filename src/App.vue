<template>
  <div id="app">
    <router-view/>
    <MainTabBar v-if="$store.state.tabBarShow"/>
  </div>
</template>

<script>
import MainTabBar from './components/content/MainTabBar';

export default {
  data() {
    return {
      show:true
    }
  },
  components: {
    MainTabBar
  }
}
</script>

<style lang="less">
  @import 'assets/css/reset.css';
  @import  url('//at.alicdn.com/t/font_2153207_3x4ofp35lch.css');
  #app{
    height: 100%;
  }
</style>
