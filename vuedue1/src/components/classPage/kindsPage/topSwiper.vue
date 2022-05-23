<template>

  <div class="topSwiper">
    <div class="title">厨房精选</div>
    <div class="swiper mySwiper">
      <div class="swiper-wrapper" >
        <div class="swiper-slide" v-for="item in imgs1 ">
          <img :src="item"/>
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
    <div class="swiper mySwiper">
      <div class="swiper-wrapper" >
        <div class="swiper-slide" v-for="item in imgs2 ">
          <img :src="item"/>
        </div>
      </div>
      <div class="swiper-pagination"></div>
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
      imgs1:[
        require('@/assets/hs1/1.jpg'),
        require('@/assets/hs1/2.jpg'),
        require('@/assets/hs1/3.jpg'),
        require('@/assets/hs1/4.jpg'),
        require('@/assets/hs1/5.jpg'),
        require('@/assets/hs1/6.jpg'),
      ],
      imgs2:[
        require('@/assets/hs2/1.jpg'),
        require('@/assets/hs2/2.jpg'),
        require('@/assets/hs2/3.jpg'),
        require('@/assets/hs2/4.jpg'),
        require('@/assets/hs2/5.jpg'),
        require('@/assets/hs2/6.jpg'),
      ],
    })
    onMounted(async()=>{
      var swiper = new Swiper(".mySwiper", {
            slidesPerView: 2.5,   //一次显示三个
            spaceBetween: 10,  //每个间距
            loop: true,
            grid:{
              rows:2
            },
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

<style scoped lang="less">
.topSwiper{
  padding: 0 .2rem;
  .title{
    font-weight: 550;
    font-size: .4rem;
    margin-top: .2rem;
    text-align: left;
  }
  .swiper {
    margin-top: .2rem;
        width: 100%;
        height: 100%;
        margin-left: auto;
        margin-right: auto;
      }

      .swiper-slide{
            height: 3rem;
            width: 3.5rem;
            display: flex;
            flex-direction: column;
            align-items: center;
            img{
                width: 100%;
                height: 100%;
                border-radius: .1rem;
            }
}
}
 
</style>