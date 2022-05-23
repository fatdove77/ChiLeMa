<template>
  <div class="tab1">
    <div class="divi"><span class="divi1">致力让隔离生活充满</span> 
     <span class="divi2">美食</span> 
     </div>
      <div class="tab1-title">面包课堂</div>
      <div class="tab1-box">
        <div class="tab1-content" v-for="(item,index) in text">
          <img :src=item.img alt="">
          <div class="word">{{item.word}}</div>
        </div>
      </div>
  </div>
</template>

<script>
import { toPairs } from 'lodash';
import {reactive,toRefs} from 'vue';
export default {
    setup(){
      const state = reactive({
        text:[
          {
            img:require('@/assets/tab2/1.jpg'),
            word:'麻薯芋泥面包&可可栗子小巨蛋'
          },
          {
            img:require('@/assets/tab2/2.jpg'),
            word:'全麦裂纹贝果：裂纹面包全解析'
          },
          {
            img:require('@/assets/tab2/3.jpg'),
            word:'吃过最Q软的40%全麦汤种吐司'
          },
          {
            img:require('@/assets/tab2/4.jpg'),
            word:'德国碱水面包|普蕾结'
          },
          {
            img:require('@/assets/tab2/5.jpg'),
            word:'人见人爱的热狗香肠卷和芝士肠仔面包'
          },
          {
            img:require('@/assets/tab2/6.jpg'),
            word:'热狗飞碟小面包'
          },
          
        ]
      })

      return{
        ...toRefs(state),
      }
    }

}
</script>

<style lang="less" scoped>
 .tab1{
    width:95%;
    height:17rem;
    margin:.3rem auto;
    // background-color: pink;
    .divi{
      box-shadow: 2px 2px 2px #BDBDBD;
      height: .8rem;
       background:radial-gradient(circle 5rem at center center ,skyblue,pink) ;
      font-family: STHupo;
      display: flex;
      align-items: center;
      justify-content:center;
      .divi1{
        font-family: STHupo;
        color: white;
        line-height: .8rem;
      }
      .divi2{
        font-family: STHupo;
        color: pink;
        line-height: .8rem;
        font-size: .5rem;
      }
    }
    .tab1-title{
      text-align: left;
      font-size: .45rem;
      font-weight: 600;
      margin-top: .2rem;
      margin-bottom: .1rem;
    }
    .tab1-box{
      display:flex;
      width: 100%;
      height: 15.5rem;
      justify-content:space-between;
      align-items: center;
      flex-wrap: wrap;
      align-content: space-between;
      .tab1-content{
        box-shadow: 1px 2px 2px #BDBDBD;
        width: 3.5rem;
        height: 5rem;
        display:flex;
        justify-content:start;
        align-items: left;
        flex-direction: column;
        border-radius: .2rem;
        img{
          border-radius: .2rem;
          width: 100%;
          height: 4.3rem;
        }
        .word{
          margin-left: .05rem;
          margin-top: .1rem;
          font-size: .2rem;
          font-weight: 600;
          text-align: left;
        }

      }
    }
  }
</style>