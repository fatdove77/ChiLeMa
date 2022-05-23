<template>
  <div class="tab1">
    <div class="divi"><span class="divi1">致力让隔离生活充满</span> 
     <span class="divi2">美食</span> 
     </div>
      <div class="tab1-title">进阶必看</div>
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
            img:require('@/assets/tab1/1.jpg'),
            word:'手撕包菜&蒜蓉金针菇'
          },
          {
            img:require('@/assets/tab1/2.jpg'),
            word:'戚风蛋糕翻车事故现场'
          },
          {
            img:require('@/assets/tab1/3.jpg'),
            word:'水合法特技炼乳棉白吐司'
          },
          {
            img:require('@/assets/tab1/4.jpg'),
            word:'醋溜土豆丝&凉拌香辣土豆丝|比肉还香'
          },
          {
            img:require('@/assets/tab1/5.jpg'),
            word:'酸辣臊子面&香炝黄瓜条'
          },
          {
            img:require('@/assets/tab1/6.jpg'),
            word:'三种家常饼：原味&辣椒&糖饼'
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
      display: flex;
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