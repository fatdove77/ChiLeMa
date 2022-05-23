<template>
<van-nav-bar
    title="菜篮"
    left-text="返回"
    left-arrow
    right-text="添加"
    @click-left="onClickLeft"
    @click-right="addBasket"
    class="title"
  />
<div class="basket">
  <!-- 空蓝子 -->
  <div class="empty" v-if="isEmpty">
    <span>再也不要忘记卖葱了</span>
    <span>
      将用料加入菜篮子，每次去超市就不会忘记买需要的东西了
    </span>
    <span @click="addBasket">添加食材用料</span>
  </div>
  <!-- 显示列表 -->
  <div class="noEmpty" v-else>
      <div class="item" v-for="(item,index) in cookList">
        <input type="radio" :checked = "item.isChecked" @click="buy(index)">
        <span class="cookName" :class="{active:item.isChecked}">{{item.cookName}}</span>
        <span class="cookNum" :class="{active:item.isChecked}">{{item.cookNum}}</span>
        <van-button class="btn" color="linear-gradient(to bottom, skyblue, pink)"  @click="deleteCook(index)">
          删除
        </van-button>
      </div>
  </div>
  <!-- 弹出层加入食材 -->
  <van-popup
  v-model:show="isShow"
  round
  position="bottom"
  :style="{ height: '20%' }"
  class="pop"
  > 
  <div class="top">
    <span>添加新内容</span>
    <van-button :disabled = "isFinished" color="linear-gradient(to bottom, skyblue, pink)" @click="addToList">
      完成
    </van-button>
  </div>
  <div class="bottom">
    <div class="bottom-title">食材信息</div>
    <div class="inputBox">
      <input type="text" placeholder = "填写食材名称" v-model="cook.cookName" @input="finish">
      <input type="text" placeholder = "填写用量" v-model="cook.cookNum">
    </div>
  </div>
  </van-popup>


</div>
  
</template>

<script>
import {reactive,toRefs,onMounted,ref,onUpdated} from 'vue'
import { useStore } from 'vuex';
import {useRoute,useRouter} from 'vue-router'
export default {
  components:{
  },
  setup(){
    const router = useRouter();
    const state  = reactive({
      isEmpty:true,  //菜篮子是否为空
      isShow:false, //弹出层是否显示
      isFinished:true, //是否填入需要食材 按钮的disabled
      cook:{
        cookName:'', //食材信息
        cookNum:''  ,//食材用量
        isChecked:false,  //控制每一行是否完成 单选框
      },
      cookList:[
        
      ]  //将弹框中加入的食材加入到这个数组中显示到菜篮中

    })
    onUpdated(()=>{
      if(state.cook.cookName&&state.cook.cookNum){
        state.isFinished = false; //关闭按钮禁用
      }
      
    })
    const onClickLeft = ()=>{
      router.go(-1);
    }
    const addBasket = ()=>{
      state.cook.cookName = '';
      state.cook.cookNum = '';
      state.isShow = true;
    }
    const finish = ()=>{
      if(state.cook.cookName==''){
        state.isFinished = true
      }
      else{
        state.isFinished = false
      }
      
    }
    const addToList = ()=>{
      var c = {};
      c.cookName = state.cook.cookName;
      c.cookNum = state.cook.cookNum;
      c.isChecked = state.cook.isChecked;
      console.log(c);
      c = state.cook
      state.cookList.push(c);
      console.log(state.cookList);
      state.isShow = false;
      state.isEmpty = false; //添加到菜篮子之后 非空
    }
    const buy = (index)=>{
      state.cookList[index].isChecked = state.cookList[index].isChecked ==true?false:true;

    }
    const deleteCook = (index)=>{
      state.cookList.splice(index,1);
      console.log(state.cookList)
      if(state.cookList.length==0){
        state.isEmpty = true;
      }
    }
    return {
      ...toRefs(state),
      onClickLeft,
      addBasket,
      finish,
      addToList,
      buy,
      deleteCook
    }
  }

}
</script>

<style lang="less" scoped>
.basket{
  padding: 0 .2rem ;
  .empty{
    display:flex;
    flex-direction: column;
    justify-content:space-around;
    align-items: center;
    margin-top: 3rem;
    :nth-child(1){
      font-weight: 600;
      font-size: .4rem;
    }
    :nth-child(2){
      font-size: .2rem;
    }
    :nth-child(3){
      margin-top: .6rem;
      color: skyblue;
    }
  }
  .pop{
    .top{
      margin-top: .3rem;
      padding: 0 .2rem;
      display:flex;
      justify-content: space-between;
      align-items:center;
      :nth-child(1){
        font-weight: 550;
      }
    }
    .bottom{
      padding: 0 .2rem;
      display:flex;
      flex-direction: column;
      align-items: left;
      justify-content: space-around;
      .bottom-title{
        text-align: left;
        font-size: .2rem;
      }
      .inputBox{
        display:flex;
        margin-top: .3rem;
        justify-content: space-between
      }
    }
  }
  .noEmpty{
    
    padding: 0 .2rem;
    .item{
      margin-top: .3rem;
      display:flex;
      justify-content: start;
      align-items: center;
      .cookName{
        width: 1rem;
        margin-left: .5rem;
      }
      .cookName.active{
        margin-left: .5rem;
        width: 1rem;
        text-decoration: line-through;
        color: darkgrey;
      }
      .cookNum{
        width: 1rem;
        margin-left: 3rem
      }
      .cookNum.active{
        width: 1rem;
        color: darkgrey;
        margin-left: 3rem;
        text-decoration: line-through;
      }
      .btn{
        width: 2rem;
        height: .6rem;
        margin-left: .3rem;
      }
    }

  }
  
}
.title{
   border: none;
   background:radial-gradient(circle 5rem at center center ,skyblue,pink) 
}
</style>