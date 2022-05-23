<template>
  <div class="rank" >
    <div class="rankBox" v-for="(item,index) in rank">
      <div class="title">
        {{item.title}}
      </div>
      <div class="grid">
        <div class="item" v-for="(grid,i) in item.items">
          <img :src=grid.img alt="">
          <div class="name">{{grid.name}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide} from 'swiper';
import 'swiper/css'
import { ref ,reactive ,toRefs,onMounted} from 'vue';
import { useStore } from 'vuex';
import { useRoute,useRouter } from 'vue-router';
export default {
  setup(){
    const state = reactive({
      rank:[
        {
          title:'人气榜单',
          items:[
            {
              name:'最受欢迎',
              img:require('@/assets/rank1/1.jpg')
            },
            {
              name:'新秀菜谱',
              img:require('@/assets/rank1/2.jpg')
            },
            {
              name:'百人做过',
              img:require('@/assets/rank1/3.jpg')
            },
            {
              name:'10人收藏',
              img:require('@/assets/rank1/4.jpg')
            },
            {
              name:'达人收藏榜',
              img:require('@/assets/rank1/5.jpg')
            },
            {
              name:'达人跟做榜',
              img:require('@/assets/rank1/6.jpg')
            },
            {
              name:'潜力新菜谱',
              img:require('@/assets/rank1/7.jpg')
            },
            {
              name:'小众菜谱',
              img:require('@/assets/rank1/8.jpg')
            },
          ]
        },
        {
          title:'时令食材',
          items:[
            {
              name:'荠菜',
              img:require('@/assets/rank2/1.jpg')
            },
            {
              name:'小龙虾',
              img:require('@/assets/rank2/2.jpg')
            },
            {
              name:'龙虾',
              img:require('@/assets/rank2/3.jpg')
            },
            {
              name:'蒜蓉',
              img:require('@/assets/rank2/4.jpg')
            },
            {
              name:'韭菜',
              img:require('@/assets/rank2/5.jpg')
            },
            {
              name:'西葫芦',
              img:require('@/assets/rank2/6.jpg')
            },
            {
              name:'豌豆',
              img:require('@/assets/rank2/7.jpg')
            },
            {
              name:'三黄鸡',
              img:require('@/assets/rank2/8.jpg')
            },
          ]
        },
        {
          title:'热门分类',
          items:[
            {
              name:'家常菜',
              img:require('@/assets/rank3/1.jpg')
            },
            {
              name:'下饭菜',
              img:require('@/assets/rank3/2.jpg')
            },
            {
              name:'减肥减脂',
              img:require('@/assets/rank3/3.jpg')
            },
            {
              name:'早餐',
              img:require('@/assets/rank3/4.jpg')
            },
            {
              name:'快手菜',
              img:require('@/assets/rank3/5.jpg')
            },
            {
              name:'饮品',
              img:require('@/assets/rank3/6.jpg')
            },
            {
              name:'午餐',
              img:require('@/assets/rank3/7.jpg')
            },
            {
              name:'晚餐',
              img:require('@/assets/rank3/8.jpg')
            },
          ]
        },
        {
          title:'场景',
          items:[
            {
              name:'哄娃',
              img:require('@/assets/rank4/1.jpg')
            },
            {
              name:'夏天',
              img:require('@/assets/rank4/2.jpg')
            },
            {
              name:'下午茶',
              img:require('@/assets/rank4/3.jpg')
            },
            {
              name:'宵夜',
              img:require('@/assets/rank4/4.jpg')
            },
            {
              name:'宴会聚会',
              img:require('@/assets/rank4/5.jpg')
            },
            {
              name:'一人食',
              img:require('@/assets/rank4/6.jpg')
            },
            {
              name:'懒人食谱',
              img:require('@/assets/rank4/7.jpg')
            },
            {
              name:'寝室',
              img:require('@/assets/rank4/8.jpg')
            },
          ]
        },
        {
          title:'特色分类',
          items:[
            {
              name:'自制',
              img:require('@/assets/rank5/1.jpg')
            },
            {
              name:'创意菜',
              img:require('@/assets/rank5/2.jpg')
            },
            {
              name:'外貌协会',
              img:require('@/assets/rank5/3.jpg')
            },
            {
              name:'小清新',
              img:require('@/assets/rank5/4.jpg')
            },
            {
              name:'下厨技巧',
              img:require('@/assets/rank5/5.jpg')
            },
            {
              name:'水果',
              img:require('@/assets/rank5/6.jpg')
            },
            {
              name:'牛奶',
              img:require('@/assets/rank5/7.jpg')
            },
            {
              name:'腌肉',
              img:require('@/assets/rank5/8.jpg')
            },
          ]
        },
      ]
    })
    return {
      ...toRefs(state),
    }
  }
}
</script>

<style lang="less" scoped>
.rank{
  margin-top: .4rem;
  padding: 0 .2rem;
  .rankBox{
    height: 4rem;
    display:flex;
    flex-direction:column;
    justify-content: space-around;
    align-items: left;
    .title{
    font-weight: 550;
    font-size: .4rem;
    margin-top: .2rem;
    text-align: left;
    }
    .grid{
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      .item{
        position: relative;
        img{
        width: 1.5rem;
        border-radius: .2rem;
        height: 1.5rem;
        filter: blur(.3px);
        }
        .name{
          position:absolute;
          bottom: .1rem;
          width: 1.5rem;
          color: white;
          font-size: .2rem;
          font-weight: 600;

        }
      }
      
    }
  }

}
</style>