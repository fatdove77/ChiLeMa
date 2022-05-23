<template>
  <van-tabs v-model:active="active" >
  <transition enter-active-class="animate__animated animate__fadeInLeft animate__faster	" >
    <van-tab title="推荐" class="rec-box">
          <div class="item" v-for="item in list">
              <div  @click="jump(item.img,item.name)">
              <div class = "linkBox" >
                <img class="imgbox" :src="item.img" alt="">
                <span>{{item.name}}</span>
              </div>
            </div>
          </div>
      </van-tab>
  </transition>
  <transition enter-active-class="animate__animated animate__fadeInLeft animate__faster	" >
    <van-tab title="减脂">
      <fatLoss />
    </van-tab>
  </transition>
  <transition enter-active-class="animate__animated animate__fadeInLeft animate__faster	" >
    <van-tab title="分类"> 

      <kinds />
    </van-tab>
  </transition>
    
    <!-- <van-tab title="标签 4">内容 4</van-tab> -->
</van-tabs>
<div style="height: 2rem" ></div>



</template>

<script>
import { ref ,reactive ,toRefs,onMounted} from 'vue';
import { useStore } from 'vuex';
import { useRoute,useRouter } from 'vue-router';
import  fatLoss from '../classPage/fatLoss/fatLoss.vue'
import kinds from '@/views/kinds.vue';
export default {
  components:{
    fatLoss,
    kinds
  },
  setup(){
    const router = useRouter();
    const store = useStore();
    const state = reactive({
      list:[
        {
         img: require('@/assets/class/1.jpg'),
         name:'炒合菜',
         url:'cook1',
        },
        {
         img: require('@/assets/class/2.jpg'),
         name:'土豆炖牛肉',
         url:'cook2',
        },
        {
         img: require('@/assets/class/3.jpg'),
         name:'清蒸鲈鱼🐟',
         url:'cook3',
        },
        {
         img: require('@/assets/class/4.jpg'),
         name:'娃娃菜粉丝汤',
         url:'cook4',
        },
        {
         img: require('@/assets/class/5.jpg'),
         name:'番茄炒蛋',
         url:'cook5',
        },
        {
         img: require('@/assets/class/6.jpg'),
         name:'皮蛋拌黄瓜',
         url:'cook6',
        },
        {
         img: require('@/assets/class/7.jpg'),
         name:'虾仁芦笋',
         url:'cook7',
        },
        {
         img: require('@/assets/class/8.jpg'),
         name:'鱼香茄子',
         url:'cook8',
        },
        {
         img: require('@/assets/class/9.jpg'),
         name:'烧腐竹',
         url:'cook9',
        },
        {
         img: require('@/assets/class/10.jpg'),
         name:'蒜蓉金针菇',
         url:'cook10',
        },

        
      ],
    })
    onMounted(()=>{
        console.log(store.state.cook);
      })
    const jump = (img,text)=>{
      console.log(text);
      router.push({name:'cook1',params:{img:img,text:text}});
      //改进要用store存储，点击之后存到信息里显示

    }
    return {  
      ...toRefs(state),
      jump
    }
  }
}

</script>

<style lang="less" scoped>
.rec-box{
  width: 95%;
  height:auto;
  display:flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: -.2rem auto;
  justify-content: space-around;
  align-items: center;
  align-content: center;
  
  .item{
   width: 3.3rem;
    height: 4rem;
    display:flex;
    margin-top: .3rem;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content:start;
    align-items:left;
  }
  .linkBox{
    width: 3.3rem;
    height: 4rem;
    display:flex;
    margin-top: .3rem;
    flex-direction: column;
    justify-content:center;
    align-items:left;
    img{
      width: 100%;
      height: 3.5rem;
      border-radius: .2rem;
      box-shadow: 2px 2px 2px rgb(178, 175, 175);
    }
    span{
      margin-top: .1rem;
      text-align: left;
      color: black;
      font-weight: 550;
    }
  }


}

</style>