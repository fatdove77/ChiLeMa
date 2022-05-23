<template>
  <van-tabbar v-model="active" route >
  <van-tabbar-item icon="home-o" replace to="/">主页</van-tabbar-item>
  <van-tabbar-item icon="tv-o" replace to="/class">课堂</van-tabbar-item>
   <van-tabbar-item icon="apps-o" replace to="/menu">食谱</van-tabbar-item>
  <van-tabbar-item icon="star-o" replace to="/collect">收藏</van-tabbar-item>
 
</van-tabbar>
</template>

<script>
  import {ref} from 'vue'
  import { useRouter } from 'vue-router';
export default {

  setup(){
    const router = useRouter();
    const active = ref(0);
    
    return {
      active,
    }
  }
}
</script>

<style lang="less" scoped>

</style>