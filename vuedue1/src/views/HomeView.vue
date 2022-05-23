<template>
  <div class="home">
    <homeNavBar />
    <homeIconList/>
    <homeSwipe />
      <hiddenTopNav v-show="listShow" :listShow = "listShow"/>
    
    <tab1 />
    <tab2 />
    <tab3 />
    <tab4 />
    <tab5 />
    <tab6 />
    <bottomSwipe />
    <bottomBar />
  </div>
</template>

<script>
import {reactive,toRefs,onMounted,ref} from 'vue';
import bottomBar from '../components/bottomBar.vue';
import homeSwipe from '../components/homePage/homeSwipe.vue'
import homeNavBar from '../components/homePage/homeNavBar.vue'
import homeIconList from '../components/homePage/homeIconList.vue'
import hiddenTopNav from '../components/homePage/hiddenTopNav.vue'
import tab1 from '../components/homePage/tab1.vue'
import tab2 from '../components/homePage/tab2.vue'
import tab3 from '../components/homePage/tab3.vue'
import tab4 from '../components/homePage/tab4.vue'
import tab5 from '../components/homePage/tab5.vue'
import tab6 from '../components/homePage/tab6.vue'
import bottomSwipe from '../components/homePage/bottomSwipe.vue'
// @ is an alias to /src
export default{
  components:{
    homeSwipe,
    homeNavBar,
    homeIconList,
    hiddenTopNav,
    tab1,
    tab2,
    tab3,
    tab4,
    tab5,
    tab6,
    bottomSwipe,
    bottomBar
  },
  setup(){
    const state = reactive({
      listShow: false,
    })
    onMounted(()=>{
      window.addEventListener('scroll', () => {
        let top = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset
        if(top>=197){
          state.listShow = true;
        }
        else {
          state.listShow = false;
        }
      })
    })
    return {
      ...toRefs(state),
    }
  }
 
}
</script>
