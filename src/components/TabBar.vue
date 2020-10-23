<template>
  <div class="tabBar">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style lang="less" scoped>
.tabBar{
  height: 43px;
  display: flex;
  align-items: center;
  position: fixed;
  left: 0;
  bottom: 0;
  right: 0;
  border-top: 1px solid #e7e7e7;
  >*{
    flex-grow: 1;
    text-align: center;
  }
}
</style>