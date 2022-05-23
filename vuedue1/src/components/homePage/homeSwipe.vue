<template>
  <div class="homeSwipe">
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="pink">
        <van-swipe-item v-for="(item,index) in imgList"> 
            <img  :src = "item" >
        </van-swipe-item>
        
    </van-swipe>
  </div>
</template>

<script>
import {reactive,toRefs} from 'vue';
export default {
 setup() {
      const state = reactive({
        imgList:[
          require('@/assets/轮播图/1.jpg'),
          require('@/assets/轮播图/2.jpg'),
          require('@/assets/轮播图/3.jpg'),
        ]
      })

      return{
          ...toRefs(state),
      }
  }
}
</script>

<style lang = "less" scoped>
    .homeSwipe{
        width: 7.5rem;
        height: 150px;
        margin-top: .2rem;
        .my-swipe{
            width: 95%;
            margin: 0 2.5%;
            height: 100%;
            img{
                width: 100%;
                height: 100%;
            }
        }
    }

    .scrollbar-flex-content {
  display: flex;
}

</style>