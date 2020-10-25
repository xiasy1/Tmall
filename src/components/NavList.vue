<template>
  <div class="navList">
    <h5 class="title">{{navInfo.title}}</h5>
    <ul class="content">
      <li v-for="(item,i) in navInfo.content" :key="i">
        <router-link :to="item.link">
          <img :src="item.imgUrl" alt="">
          <p>{{item.name}}</p>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    props: {
      navInfo:{
        type: Object,
      }
    }
  }
</script>

<style lang="less" scoped>
.navList{
  width: 22.1875rem;
  margin: 0.625rem auto;
  .title{
    margin: 1.25rem 0 0.625rem;
  }
  .content{
    display: flex;
    flex-wrap: wrap;
    border: 1px solid silver;
    li{
      a{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 5.5rem;
        margin: 1rem 0;        
      }
      img{
        width: 3rem;
      }
      p{
        font-size: 0.75rem;
        text-align: center;
        margin-top: 0.375rem;
      }
    }
  }
}
</style>