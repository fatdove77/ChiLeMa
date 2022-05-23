<template>
  <div class="cookBottom">
    <div>
      <img :src="imgs[1]">
      <span @click="collect" v-if="!isCollect">收藏</span>
      <span @click="collect" v-else >已收藏</span>
    </div>
    <div>
      <img :src="imgs[0]" >
      <span >传作品</span>
    </div>
  </div>

<transition enter-active-class="animate__animated animate__fadeInDown animate__faster	" leave-active-class="animate__animated animate__fadeOutDown animate__faster ">
  <div class="notice" v-show="isNotice"> ⭐收藏成功</div>
</transition>
  
</template>

<script>
import {onMounted,reactive,toRefs} from 'vue'
import { useStore } from 'vuex';
import {useRoute} from 'vue-router'
export default {
  data(){
    return {
      imgs:[
        require('@/assets/class图标/4.png'),
        require('@/assets/class图标/5.png'),
      ],
      
    }
  },
  setup(props,{emit}){
    const route = useRoute();
    const store = useStore();
    const state = reactive({
      isNotice:false,
      isCollect:false,
    })
    const collect = ()=>{
      state.isNotice = true;
      state.isCollect = true;
      setTimeout(() => {
        state.isNotice = false;
      },2000)
      emit('event')
      console.log(111);
      
    }
    return {
       ...toRefs(state),
      collect,
    }
  }

}
</script>

<style lang="less" scoped>
.cookBottom{
  width: 100%;
  height: .8rem;
  display: flex;
  justify-content: start;
  align-items: center;
  position:fixed;
  bottom: 0;
  background-color: #fff;
  div{
    display: flex;
    justify-content: start;
    align-items: center;
    img{
      margin: 0rem .1rem;
    }
    span:active{
      font-weight: 600;
    }
  }
}
.notice{
  position: fixed;
  top: 44%;
  left: 38%;
  width: 2rem;
  height: 1rem;
  font-weight: 600;
  line-height: 1rem;
  background: rgba(255, 186, 186, 0.8);
  border-radius: .1rem;
}

</style>