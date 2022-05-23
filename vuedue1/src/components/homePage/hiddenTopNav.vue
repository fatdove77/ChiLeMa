<template>
  <div class="hiddenTopNav"  style=" box-shadow: 2px 2px 4px #BDBDBD;">
    <van-tabs v-model:active="active" @click-tab="toThat"  >
        <van-tab  :title="item"  v-for="(item,index) in titleList"> 
          
        </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import { computed } from '@vue/reactivity';
import {reactive,toRefs,onMounted,onUpdated,ref} from 'vue';
export default {
  props: ['listShow'],
  setup(props){
    const active = ref(0);
    const state = reactive({
      titleList:['进阶必看','面包课堂','人气烘焙','大厨好菜','家常面食','中式点心','猜你喜欢'],
      scrollTop:0,
    })
    onMounted(async()=>{
      window.addEventListener('scroll', () => {
        // let a = document.querySelector('.van-tabs__nav');
        // document.scrollTo(0,5344)
        // a.children[0].click();
        if(props.listShow==true){
          let top = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset
          //  a.children[0].click();
          console.log(top);
          if(top>=197&&top<1169){
            active.value = 0;
           }
           else if(top>=1169&&top<2035){
              active.value = 1;
           }
           else if(top>=2035&&top<2902){
             active.value = 2;
           }
           else if(top>=2902&&top<3763){
             active.value = 3;
           }
           else if(top>=3763&&top<4627){
             active.value = 4;
           }
           else if(top>=4627&&top<4775){
             active.value = 5;
           }
           else if(top>=4775){
             active.value = 6;
           }
      }
      })
    })
    onUpdated(()=>{

    })
    const toThat = ({ title })=>{
      let i = state.titleList.indexOf(title);
      console.log(i);
      active.value = i;
      if(title=='进阶必看'){
        const options = {
          top:300,
          left:0,
          behavior:'smooth'
        }
        window.scrollTo(options)
      }
      else if(title=='面包课堂'){
        const options = {
          top:1169,
          left:0,
          behavior:'smooth'
        }
        window.scrollTo(options)
      }
      else if(title=='人气烘焙'){
        const options = {
          top:2035,
          left:0,
          behavior:'smooth'
        }
        window.scrollTo(options)
      }
      else if(title=='大厨好菜'){
        const options = {
          top:2902,
          left:0,
          behavior:'smooth'
        }
        window.scrollTo(options)
      }
      else if(title=='家常面食'){
        const options = {
          top:3763,
          left:0,
          behavior:'smooth'
        }
        window.scrollTo(options)
      }
      else if(title=='中式点心'){
        const options = {
          top:4627,
          left:0,
          behavior:'smooth'
        }
        window.scrollTo(options)
      }
      else if(title=='猜你喜欢'){
        const options = {
          top:5069,
          left:0,
          behavior:'smooth'
        }
        window.scrollTo(options)
      }

    }
    return {
      ...toRefs(state),
      toThat,
      active
    }
  }

}
</script>

<style>
.hiddenTopNav{
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 100;
}
</style>