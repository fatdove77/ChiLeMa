<template>
<div class="bottomSwipe">
<div class="divi"><span class="divi1">致力让隔离生活充满</span> 
     <span class="divi2">美食</span> 
     </div>
     <div class="tab1-title">猜你喜欢</div>
  <div class="swiper mySwiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="item in text ">
          <img :src="item.img"/>
        </div>
        
      </div>
      <div class="swiper-pagination"></div>
    </div>
</div>

    
</template>



<script>
import { Swiper, SwiperSlide} from 'swiper';
import 'swiper/css'
import {onMounted,reactive,toRefs} from 'vue'
export default {
  setup(){
      const state = reactive({
        text:[
          {
            img:require('@/assets/tab7/1.jpg'),
            word:'手撕包菜&蒜蓉金针菇'
          },
          {
            img:require('@/assets/tab7/2.jpg'),
            word:'戚风蛋糕翻车事故现场'
          },
          {
            img:require('@/assets/tab7/3.jpg'),
            word:'水合法特技炼乳棉白吐司'
          },
          {
            img:require('@/assets/tab7/4.jpg'),
            word:'醋溜土豆丝&凉拌香辣土豆丝|比肉还香'
          },
          {
            img:require('@/assets/tab7/5.jpg'),
            word:'酸辣臊子面&香炝黄瓜条'
          },
          {
            img:require('@/assets/tab7/6.jpg'),
            word:'三种家常饼：原味&辣椒&糖饼'
          },
          {
            img:require('@/assets/tab7/7.jpg'),
            word:'三种家常饼：原味&辣椒&糖饼'
          },
          
        ]
      })
        onMounted(async()=>{
            var swiper = new Swiper(".mySwiper", {
            slidesPerView: 2.5,   //一次显示三个
            spaceBetween: 10,  //每个间距
            loop: true,
            pagination: {
            el: ".swiper-pagination",
            clickable: true,
            }
        }); 
        })

        return {
          ...toRefs(state),
        }
    }
}
</script>

<style lang="less" scoped >
.bottomSwipe{
  width:95%;
    height:6.5rem;
    margin:.3rem auto;
}
.divi{
      height: .8rem;
       background:radial-gradient(circle 5rem at center center ,skyblue,#99CC33) ;
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
.swiper-slide{
            height: 4.3rem;
            width: 3.5rem;
            display: flex;
            flex-direction: column;
            align-items: center;
            position: relative;
            img{
                width: 100%;
                border-radius: .1rem;
                height: auto;
            }
}
</style>