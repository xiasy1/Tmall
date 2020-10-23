<template>
  <div class="navList">
    <div class="title">
      <slot name="title"></slot>
    </div>
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style lang="less" scoped>
.navList{
  width: 22.1875rem;
  margin: 0.625rem auto;
  .title{
    font-size: 1.125rem;
    margin: 1.25rem 0 0.625rem;
  }
  .content{
    border: 1px solid silver;
    >*{
      display: flex;
      flex-wrap: wrap;
    }
  }
}
</style>