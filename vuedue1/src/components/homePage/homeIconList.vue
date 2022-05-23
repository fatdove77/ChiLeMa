<template>
  <div class="homeIconList">
    <div class="box" v-for="(item,index) in imgList">
      <img   :src="item.src" alt="">
      <span>{{item.name}} </span>
    </div>
    
  </div>
</template>

<script>
import {reactive,toRefs,ref} from 'vue';
export default {
  setup(){
    const state = reactive({
      imgList:[{
        name:'中式料理',
        src:require('@/assets/主页图标/中餐.svg')
      },
      {
        name:'蛋糕',
        src:require('@/assets/主页图标/蛋糕.svg'),
      },
      {
        name:'面食点心',
        src:require('@/assets/主页图标/面食.svg'),
      },
      {
        name:'面包',
        src:require('@/assets/主页图标/面包.svg'),
      },
      {
        name:'甜品饼干',
        src:require('@/assets/主页图标/甜甜圈.svg'),
      },
      {
        name:'异国美食',
        src:require('@/assets/主页图标/美食_披萨.svg'),
      },
      {
        name:'饮品冰品',
        src:require('@/assets/主页图标/饮品.svg'),
      },
      {
        name:'健康减脂',
        src:require('@/assets/主页图标/牛油果.svg'),
      },
      {
        name:'海鲜刺身',
        src:require('@/assets/主页图标/海鲜.svg'),
      },
      {
        name:'生活美学',
        src:require('@/assets/主页图标/盆栽.svg'),
      },
      ]
    })
    return {
      ...toRefs(state),
    }
  }
}
</script>

<style lang = "less" scoped>
  .homeIconList {
    box-shadow: 0px 4px 2px #BDBDBD;
    width: 7.5rem;
    height: 2.6rem;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content:space-around;
    align-items: center;
    align-content: center;
    background:radial-gradient(circle 5rem at center center ,skyblue,pink) ;
    .box{
      width: 1.5rem;
      height: auto;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content:space-around;
      margin: .1rem 0rem;
    }
    img{
      width: .7rem;
      height: .7rem;
    }
  }

</style>