<template>
  <div class="tabBarItem">
    <slot name="item-icon"></slot>
    <slot name="item-text"></slot>
  </div>
</template>

<script>
  export default {
    name: 'TabBarItem',
  }
</script>

<style lang="less" scoped>
.tabBarItem{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 12px;
}
</style>