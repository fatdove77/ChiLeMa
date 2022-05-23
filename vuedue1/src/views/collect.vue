<template>
  <van-nav-bar title="收藏" class="title"
  right-text="菜篮"
  @click-right = "basket" />
  
  <van-empty description="描述文字" v-if="!isCollect" ></van-empty>
  <div v-else>  
    <!-- //添加菜品之后 -->
    <van-card
      title="菜谱"
      :desc="$store.state.cook.text"
      :thumb="$store.state.cook.img"
    >
      <!-- <template #tags>
        <van-tag plain type="danger">标签</van-tag>
        <van-tag plain type="danger">标签</van-tag>
      </template> -->
      <template #footer>
        <van-button size="mini" @click="goDetail">查看详情</van-button>
        <van-button size="mini" @click="deleteC">删除</van-button>
      </template>
    </van-card>
  </div>  
  <bottomBar> </bottomBar>
</template>

<script>
import { ref ,reactive ,toRefs,onMounted,onUpdated} from 'vue';
import { useStore } from 'vuex';
import { useRoute,useRouter } from 'vue-router';
import bottomBar from '../components/bottomBar.vue'
export default {
  components:{
    bottomBar,

  },
  setup(){
    const store = useStore();
    const router = useRouter();
    const route = useRoute()
    const state = reactive({
      isCollect:false,
    })
    onMounted(()=>{
      state.isCollect = store.state.cook.isCollect;
    })
    onUpdated(()=>{
      state.isCollect = store.state.cook.isCollect;
    })
    const goDetail = ()=>{
        router.push({name:'cook1',params:{img:store.state.cook.img,text:store.state.cook.text}});
    }
    // 清空当前收藏
    const deleteC = ()=>{
      store.state.cook.img='';
      store.state.cook.text='';
      store.state.cook.isCollect=false;
    }
    const basket  = ()=>{
      router.push('/basket')
    }
    return {
      ...toRefs(state),
      goDetail,
      deleteC,
      basket
    }
  }


}
</script>

<style lang="less" scoped>
.title{
  background:radial-gradient(circle 5rem at center center ,skyblue,pink) ;
}

</style>