<template>
    <div class="homeNavBar" >
        <van-nav-bar title="主页" class="title" > 
            <template #right >
                <van-icon name="info-o" size="18" @click="show = true"  />
                <van-overlay :show="show" @click="show = false" >
                    <about />
                </van-overlay>
            </template>
        </van-nav-bar>
    </div>
   
</template>

<script>
import {reactive,toRefs,ref} from 'vue';
import about from '@/views/AboutView.vue';
export default {
    components:{
        about
    },
    setup(){
         const show = ref(false);
        return { show };
    }
    
}
</script>

<style scoped>
.homeNavBar{
    background-color: pink;
    z-index: 100;
}
.title{
   border: none;
   background:radial-gradient(circle 5rem at center center ,skyblue,pink) 
}
</style>