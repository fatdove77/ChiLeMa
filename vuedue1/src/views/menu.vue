<template>
<van-nav-bar
    title="食谱"
    class="title"
  />
  <bottomBar />

  <div class="menu">
    <div class="top">
      <img :src = "icon" >
      <span>好的,今天我们来做菜!</span>
    </div>
    <h2> 🥘 先选一下食材 </h2>
    <h3> 🥬 菜菜们 </h3>
    <div class="vegList">
      <span class="items" :class="{active:item.flag}" v-for="(item,index) in vegList " @click="addVeg(index)">
        {{item.icon}} {{item.name}}
      </span>
    </div>

    <h3>  🥩 肉肉们  </h3>
    <div class="meetList">
      <span class="items" :class="{active:item.flag}" v-for="(item,index) in meetList " @click="addMeet(index)">
        {{item.icon}} {{item.name}}
      </span>
    </div>

    <div class="result">
      <h3> 🍲 来看看组合出的菜谱吧！ </h3>
      <span v-for="(item,index) in resultList" class="result-item">
        {{item.name}}
      </span>
    </div>
  </div>
  <div style="height:2rem"> </div>
</template>

<script>
import {getCook} from '../api/index.js'
import bottomBar from '../components/bottomBar.vue'
import {reactive,toRefs,onMounted,ref,onUpdated} from 'vue'
import { useStore } from 'vuex';
import {useRoute,useRouter} from 'vue-router'
export default {
  components:{
    bottomBar,
  },
  setup(){
    const state = reactive({
        icon:require('@/assets/menu/锅.png'),
        vegList:[
          {
            icon:'🥔',
            name:'土豆',
            flag:false,
          },
          {
            icon:'🥕',
            name:'胡萝卜',
            flag:false,
          },
          {
            icon:'🥦',
            name:'花菜',
            flag:false,
          },
          {
            icon:'🥣',
            name:'白萝卜',
            flag:false,
          },
          {
            icon:'🥒',
            name:'西葫芦',
            flag:false,
          },
          {
            icon:'🍅',
            name:'番茄',
            flag:false,
          },
          {
            icon:'🥬',
            name:'芹菜',
            flag:false,
          },
          {
            icon:'🥒',
            name:'黄瓜',
            flag:false,
          },
          {
            icon:'🧅',
            name:'洋葱',
            flag:false,
          },
          {
            icon:'🎍',
            name:'莴苣',
            flag:false,
          },
          {
            icon:'🍄',
            name:'菌菇',
            flag:false,
          },
          {
            icon:'🍆',
            name:'茄子',
            flag:false,
          },
          {
            icon:'🍲',
            name:'豆腐',
            flag:false,
          },
          {
            icon:'🥗',
            name:'包菜',
            flag:false,
          },
          {
            icon:'🥬',
            name:'白菜',
            flag:false,
          },
        ],
        meetList:[
          {
            icon:'🥓',
            name:'午餐肉',
            flag:false,
          },
          {
            icon:'🌭',
            name:'香肠',
            flag:false,
          },
          {
            icon:'🌭',
            name:'腊肠',
            flag:false,
          },
          {
            icon:'🐤',
            name:'鸡肉',
            flag:false,
          },
          {
            icon:'🐷',
            name:'猪肉',
            flag:false,
          },
          {
            icon:'🥚',
            name:'鸡蛋',
            flag:false,
          },
          {
            icon:'🦐',
            name:'虾',
            flag:false,
          },
          {
            icon:'🐮',
            name:'牛肉',
            flag:false,
          },
          {
            icon:'🦴',
            name:'骨头',
            flag:false,
          },
        ],
        searchString:[],
        list:'',
        resultList:[],
    })
    // onMounted(async()=>{
    //   let list = await getCook('白菜',1);
    //   console.log(list);
    // })
    onUpdated(async()=>{
      state.list = state.searchString.join('');
      let result = await getCook(state.list,1);
      state.resultList = result.data.data;
      // console.log(state.resultList)
    })
    const addVeg = (index)=>{
      if(state.vegList[index].flag==false){
        //加入到搜索中
        state.searchString.push(state.vegList[index].name);
      }
      else {
        let a = state.searchString.indexOf(state.vegList[index].name);
        state.searchString.splice(a,1);
      }
      state.vegList[index].flag = state.vegList[index].flag==true?false:true;
    }

    const addMeet = (index)=>{
      if(state.meetList[index].flag==false){
        //加入到搜索中
        state.searchString.push(state.meetList[index].name);
      }
      else {
        let a = state.searchString.indexOf(state.meetList[index].name);
        state.searchString.splice(a,1);
      }
      state.meetList[index].flag = state.meetList[index].flag==true?false:true;
    }
    return {
      ...toRefs(state),
      addVeg,
      addMeet
    }
  }
}
</script>

<style lang="less" scoped>
.title{
   border: none;
   background:radial-gradient(circle 5rem at center center ,skyblue,pink) 
}

.menu{
  padding: 0 .2rem;
  flex-direction: column;
  justify-content:space-between;
  align-items:center;
  .top{
    height: 1.4rem;
    margin-top: .3rem;
    display:flex;
    flex-direction: column;
    justify-content:space-between;
    align-items:center;
    img{
      width: .8rem;
    }
  }
  h2{
    margin-top: .2rem;
  }
  h3{
    margin-top: .4rem;
  }
  .vegList{
    width: 6.8rem;
    height: 3.2rem;
    display:flex;
    flex-wrap: wrap;
    justify-content:space-around;
    .items{
      padding: .1rem;
      margin: .1rem;
      background-color: #e7fcee;
      color: #16655e;
      border:1px solid #8decad;
      border-radius: .1rem;
    }
    .items.active{
      padding: .1rem;
      margin: .1rem;
      background-color: #2dac5c;
      color: #dcfce7;
      border:1px solid #8decad;
      border-radius: .1rem;
    }
  }
  .meetList{
    width: 6.8rem;
    height: 3.2rem;
    display:flex;
    flex-wrap: wrap;
    justify-content:space-around;
    .items{
      padding: .1rem;
      margin: .1rem;
      display:flex;
      justify-content:space-around;
      align-items:center;
      background-color: #feeded;
      color: #b31b1b;
      border:1px solid #fecaca;
      border-radius: .1rem;
    }
    .items.active{
      padding: .1rem;
      margin: .1rem;
      background-color: #f15656;
      color: #fee2d9;
      border:1px solid #fecaca;
      border-radius: .1rem;
    }
  }
  .result{
      display:flex;
      margin-top: .3rem;
      flex-direction: column;
      justify-content:space-between;
      align-items:center;
      padding: .1rem .2rem;
      background-color: #f7f8f9;
      .result-item{
        padding: .1rem;
        background-color: #e3edfa;
        color: #2454d9;
        margin-top: .1rem;
        border:1px solid #c1dcfe;
        border-radius: .1rem;
        
      }
    }
}
</style>