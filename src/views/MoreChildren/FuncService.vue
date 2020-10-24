<template>
  <!-- 功能服务内容 -->
  <div class="FuncService">
    <NavList :navInfo="local"/>
    <NavList :navInfo="travel"/>
    <NavList :navInfo="base"/>
  </div>
</template>

<script>
import NavList from "components/NavList";

import {getNavListInfo} from 'network/more'

export default {
  data() {
    return {
      local: {},
      travel: {},
      base: {}
    };
  },
    created() {
    this.getNavListData("local")
    this.getNavListData("travel")
    this.getNavListData("base")
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
  },
};
</script>

<style lang="less" scoped>
</style>