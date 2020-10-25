<template>
  <div class="nav">
    <ul class="navbar" @click="navItemClick">
      <li v-for="(item,i) in navTitle" :key='i'
        :class="{isActive: currentIndex == i}"
        :data-key= i
      >{{item}}</li>
    </ul>    
    <div class="line"></div>
  </div>
</template>

<script>
  export default {
    props: {
      navTitle:{
        type: Array
      }
    },
    data() {
      return {
        currentIndex: 0
      }
    },
    methods: {
      navItemClick(ev) {
        const key = ev.target.dataset.key
        if(key) {
          this.currentIndex = key
        }
      }
    }
  }
</script>

<style lang="less" scoped>
.nav{
  position: relative;
  height: 2.125rem;
  z-index: 100;
  .navbar{
    color: #dddddd;
    width: 100%;
    height: 2.125rem;
    background: #25211e;
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    overflow-x: auto;
    li{
      min-width: 3.625rem;
      font-size: 0.875rem;
      text-align: center;
      line-height: 2.125rem;
      &.isActive{
        color: #ffad7d;
      }
    }
  }  
  .line{
    width: 100%;
    height: 8px;
    background: #25211e;
    position: fixed;
    top: 1.625rem;
    z-index: 100;
  }
}
</style>