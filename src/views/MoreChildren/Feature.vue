<template>
  <!-- 功能服务内容 -->
  <div class="feature">
    <NavList>
      <h5 slot="title">特色市场</h5>
      <div>
        <NavListItem v-for="(item, index) in 30" :key="index" :routerAddr='addr'>
          <img slot="image" src="~assets/img/more/list1.png" alt="">
          <p slot="text">腔调</p>
        </NavListItem>
      </div>
    </NavList>

    <NavList>
      <h5 slot="title">主题市场</h5>
      <div>
        <NavListItem v-for="(item, index) in 4" :key="index" :routerAddr='addr'>
          <img slot="image" src="~assets/img/more/list1.png" alt="">
          <p slot="text">阿里健康</p>
        </NavListItem>        
      </div>
    </NavList>
  </div>
</template>

<script>
  import NavList from 'components/NavList'
  import NavListItem from 'components/NavListItem'

  export default {
    data() {
      return {
        addr:'Tone'
      }
    },
    components: {
      NavList,
      NavListItem
    }
  }
</script>

<style lang="less" scoped>

</style>