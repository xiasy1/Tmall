<template>
  <!-- 特色导购内容 -->
  <div class="FuncService">
    <NavList>
      <h5 slot="title">本地生活</h5>
      <router-link to="/">
        <NavListItem v-for="(item, index) in 3" :key="index">
          <img slot="image" src="~assets/img/more/list1.png" alt="">
          <p slot="text">电影票</p>
        </NavListItem>
      </router-link>
    </NavList>

    <NavList>
      <h5 slot="title">旅游度假</h5>
      <router-link to="/">
        <NavListItem v-for="(item, index) in 7" :key="index">
          <img slot="image" src="~assets/img/more/list1.png" alt="">
          <p slot="text">电影票</p>
        </NavListItem>
      </router-link>
    </NavList>

    <NavList>
      <h5 slot="title">基础服务</h5>
      <router-link to="/">
        <NavListItem v-for="(item, index) in 4" :key="index">
          <img slot="image" src="~assets/img/more/list1.png" alt="">
          <p slot="text">电影票</p>
        </NavListItem>
      </router-link>
    </NavList>
  </div>
</template>

<script>
  import NavList from 'components/NavList';
  import NavListItem from 'components/NavListItem'

  export default {
    components: {
      NavList,
      NavListItem
    }
  }
</script>

<style lang="less" scoped>

</style>