<template>
  <div class="fatLoss">
    <div  v-for="(item,index) in foodList" class="box" @click="showSheet(index)">
      <div class="top">
        <img :src = "item.img" alt="" class="food">
        <div class="person">
          <div class="personBox">
            <img :src="item.avatar" alt="" class="avatar">
            <span class="name">{{item.name}}</span>
            <span class="slogan">{{item.slogan}}</span>
          </div>
        </div>
      </div>
      <div class="bottom">
        {{item.text}}
      </div>
    </div>


   <van-popup
    v-model:show="isShow"
    round
    position="bottom"
    :style="{ height: '70%' }"
    class="sheet"
  > 
      <img :src="sheetList.innerImg" alt="" class="innerImg">
      <div class="text">{{sheetList.text}}</div>
      <div class="title">专家介绍</div>
      <div class="introduce">
        <img :src="sheetList.avatar" alt="" class="avatar">
        <div class="name"> {{sheetList.name}}</div>
        <div v-for="item in sheetList.intro">
          {{item}}
        </div>
      </div>
      <div class="title">食谱理念</div>
      <div class="mind" v-text="sheetList.mind"></div>
      <van-grid :gutter="5">
        <van-grid-item v-for="item in sheetList.icons" :key="value"  class="iconsBox">
        <img :src = "item" alt="" class="icons">
        </van-grid-item>
      </van-grid>
    </van-popup>

    
     
  </div>

 

</template>

<script>
import { ref ,reactive ,toRefs,onMounted,onUpdated} from 'vue';
import { useStore } from 'vuex';
import { useRoute,useRouter } from 'vue-router';
import router from '@/router';
export default {

  setup(){
    const router = useRouter();
    const state = reactive({
      foodList:[
        {
          img:require('@/assets/fat/1.jpg'),
          text:'七日减脂计划|极简快手',
          avatar:require('@/assets/fat/11.jpg'),
          name:'顾中一',
          slogan:'遍历实用偶尔放松',
          innerImg:require('@/assets/fat//22.jpg'),
          mind:'我对食谱的理解可能和大家不太一样。除了我在三甲医院做临床营养师的8年，最近这几年我也给很多的明星、董事长配过餐，但要说效果好的客户往往还是对方很配合或者是能够长期接受我的指导与陪伴的人。在我看来，营养缺乏的人只要补上相应的营养素就会有立竿见影的效果，但想要靠一个短期的、固定的食谱来减肥却很难，毕竟每个人实际生活的状态、对于食谱的依从性、获取食材的难易程度都不一样。一份简单的食谱可以当作范例，但普适意义和长期效果往往不尽人意。授人以鱼不如授人以渔，我向来更赞成大家去学习如何控制总热量以及根据自己的实际情况调整饮食结构，长远来说这既有助于控制体重，还很健康不费力。',
          icons:[
            require('@/assets/fatLossIcon/1.png'),
            require('@/assets/fatLossIcon/2.png'),
            require('@/assets/fatLossIcon/3.png'),
            require('@/assets/fatLossIcon/4.png'),
            require('@/assets/fatLossIcon/5.png'),
            require('@/assets/fatLossIcon/6.png'),
            require('@/assets/fatLossIcon/7.png'),
            require('@/assets/fatLossIcon/8.png'),
          ],
          intro:[
            '北京营养师协会理事',
            '清华大学公共卫生硕士',
            '微博2021十大影响力健康医疗大V',
            '八年三甲医院营养师经验',
            '坚持健康科普14年',
            '全平台超过600W人在关注',
            '所著科普图书销售十余万册',
          ]
        },
        {
          img:require('@/assets/fat/1.jpg'),
          text:'七日减脂计划|极简快手',
          avatar:require('@/assets/fat/11.jpg'),
          name:'顾中一',
          slogan:'遍历实用偶尔放松',
          innerImg:require('@/assets/fat//22.jpg'),
          icons:[
            require('@/assets/fatLossIcon/1.png'),
            require('@/assets/fatLossIcon/1.png'),
            require('@/assets/fatLossIcon/1.png'),
            require('@/assets/fatLossIcon/1.png'),
            require('@/assets/fatLossIcon/1.png'),
            require('@/assets/fatLossIcon/1.png'),
            require('@/assets/fatLossIcon/1.png'),
          ]
        },
        {
          img:require('@/assets/fat/1.jpg'),
          text:'七日减脂计划|极简快手',
          avatar:require('@/assets/fat/11.jpg'),
          name:'顾中一',
          slogan:'遍历实用偶尔放松',
          innerImg:require('@/assets/fat//22.jpg'),
          icons:[
            require('@/assets/fatLossIcon/1.png'),
            require('@/assets/fatLossIcon/1.png'),
            require('@/assets/fatLossIcon/1.png'),
            require('@/assets/fatLossIcon/1.png'),
            require('@/assets/fatLossIcon/1.png'),
            require('@/assets/fatLossIcon/1.png'),
            require('@/assets/fatLossIcon/1.png'),
            require('@/assets/fatLossIcon/1.png'),
          ]
        },
        {
          img:require('@/assets/fat/1.jpg'),
          text:'七日减脂计划|极简快手',
          avatar:require('@/assets/fat/11.jpg'),
          name:'顾中一',
          slogan:'遍历实用偶尔放松',
          innerImg:require('@/assets/fat//22.jpg'),
          icons:[
            require('@/assets/fatLossIcon/1.png'),
            require('@/assets/fatLossIcon/1.png'),
            require('@/assets/fatLossIcon/1.png'),
            require('@/assets/fatLossIcon/1.png'),
            require('@/assets/fatLossIcon/1.png'),
            require('@/assets/fatLossIcon/1.png'),
            require('@/assets/fatLossIcon/1.png'),
            require('@/assets/fatLossIcon/1.png'),
          ]
        },
      ],
      sheetList:{
        
      },
      isShow: false,
      
    })
    const showSheet = (index)=>{
      console.log(state.isShow)
      state.isShow = true;
      state.sheetList = state.foodList[index];
      console.log(state.sheetList)
    }
    return {
      ...toRefs(state),
      showSheet
    }
  }
}
</script>

<style lang = "less" scoped >
.fatLoss{
  .box{
    width: 95%;
    height: 4.5rem;
    margin: .4rem auto;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: left;
    .top{
      width: 100%;
      height: 4rem;
      position: relative;
      .food{
        width: 100%;
        height: 100%;
        border-radius: .2rem;
        box-shadow:1px 1px 2px #bdbdbd;
        opacity:.8;
      }
      .person{
        position:absolute;
        z-index: 1;
        top: 1rem;
        left: 1rem;
        .personBox{
          display: flex;
          flex-direction: column;
          justify-content:space-around;
          align-items: center;
          height: 2rem;
          width: 5rem;
           .avatar{
              width: 1.2rem;
              height: 1.2rem;
              border-radius: 100%;
            }
            .name{
              color: white;
            }
            .slogan{
              color: white;
              font-weight: 550;
              font-size: .45rem;
            }
        }
      }
    }
    .bottom{
      margin-top:0.1rem;
      text-align: LEFT;
      COLOR: black;
      font-weight: 550;
      font-size: .3REM;
    }
  }
  .sheet{
    width: 90%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content:start;
    align-items: center;
    .introduce{
      width:95%;
      height: 5rem;
      display: flex;
      margin: 0 auto;
      flex-direction: column;
      justify-content:space-around;
      align-items: center;
      background-color: #f7f4f4;
      .avatar{
        width: 1.2rem;
              height: 1.2rem;
              border-radius: 100%;
        
      }
    }
    .text{
      font-weight: 600;
      font-size: .4rem;
    }
    .title{
      text-align: left;
      margin-left: .2rem;
      font-size: .3rem;
      font-weight: 550;
    }
    .mind{
      margin: 0 .2rem;
      display: flex;
      align-items: center;
      div{
        text-align: left;
        padding: 0  1rem;
        font-size: .25rem;
        text-indent: .1rem;
      }
    }
    .innerImg{
    width: 100%;
    height: 4rem;
  }
  .iconsBox{
    .icons{
        width: 80%;
        height: 80%;
      }
  }
  
  }
  
}

  

</style>