<template>
  <div class="navListItem">
    <div class="image">
      <slot name="image"></slot>
    </div>
    <router-link :to='"/"+routerAddr' class="text">
      <slot name="text"></slot>
    </router-link>
  </div>
</template>

<script>
  export default {
    props:['routerAddr']
  }
</script>

<style lang="less" scoped>
.navListItem{
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 5.5rem;
  margin: 1.25rem 0;
  .image{
    width: 2.8125rem;
    >*{
      width: 100%;
    }
  }
  .text{
    font-size: 0.75rem;
    text-align: center;
  }
}
</style>