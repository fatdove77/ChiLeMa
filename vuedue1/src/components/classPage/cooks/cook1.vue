<template>
  <div class="cook"  >
    <div class="cookBar">
      <img class="btn1" :src = "imgs[0]" @click="$router.go(-1)">
      <img class="btn2" :src="imgs[1]" @click="share">
    </div>
    <div class="cookBar1" ></div>
    <img class="imgbox" :src="$route.params.img" alt="">
    <div class="text"> {{$route.params.text}}</div>
    <div class="need">
      <div class="title">
        <span>用料</span>
        <img :src="imgs[2]" alt="">
      </div>
      <div class = "shadow">
        <div class="need-item" v-for="item in needs">
        <div class="item-name">{{item.name}}</div>
        <div class="item-account">{{item.account}}</div>
      </div>
      </div>
      
      <div class="steps" v-for="(item,index) in steps">
        <span>步骤{{index+1}}</span>
        <img :src=item.img alt="">
        <div class="dis">{{item.dis}}</div>
        <el-divider border-style="dashed" />
      </div>
    </div>
  </div>

<cookBottom @event="addCollect"> </cookBottom>
  <van-share-sheet
  v-model:show="showShare"
  title="立即分享给好友"
  :options="options"
/>


    
    
  
</template>

<script>
import { StarFilled } from '@element-plus/icons-vue'
import cookBottom from '@/components/classPage/cooks/cookBottom.vue';
import {reactive,toRefs,onMounted,ref} from 'vue'
import { useStore } from 'vuex';
import {useRoute} from 'vue-router'
export default {
  components: {
    cookBottom
  },
  setup(){
    const route = useRoute();
    const store = useStore();
     const showShare = ref(false);
    const options = [
      [
        { name: '微信', icon: 'wechat' },
        { name: '朋友圈', icon: 'wechat-moments' },
        { name: '微博', icon: 'weibo' },
        { name: 'QQ', icon: 'qq' },
      ],
      [
        { name: '复制链接', icon: 'link' },
        { name: '分享海报', icon: 'poster' },
        { name: '二维码', icon: 'qrcode' },
        { name: '小程序码', icon: 'weapp-qrcode' },
      ],
    ];
    const state = reactive({
      needs:[
        {
          name:'绿豆芽',
          account:'300克',
        },
         {
          name:'韭菜',
          account:'200克',
        },
         {
          name:'鸡蛋',
          account:'2个',
        },
         {
          name:'粉条',
          account:'一小把',
        },
         {
          name:'生抽',
          account:'2勺',
        },
         {
          name:'盐',
          account:'一小勺',
        },
         {
          name:'鸡精',
          account:'一小勺',
        },
         {
          name:'蒜末',
          account:'2瓣',
        },
        {
          name:'耗油',
          account:'一小勺',
        },
      ],
      steps:[
        {
          img: require('@/assets/cook/1.jpg'),
          dis:'绿豆芽洗净，控水'
        },
        {
          img: require('@/assets/cook/2.jpg'),
          dis:'绿豆芽洗净，控水'
        },
        {
          img: require('@/assets/cook/3.jpg'),
          dis:'绿豆芽洗净，控水'
        },
        {
          img: require('@/assets/cook/4.jpg'),
          dis:'绿豆芽洗净，控水'
        },
        {
          img: require('@/assets/cook/5.jpg'),
          dis:'绿豆芽洗净，控水'
        },
        {
          img: require('@/assets/cook/6.jpg'),
          dis:'绿豆芽洗净，控水'
        },
        {
          img: require('@/assets/cook/7.jpg'),
          dis:'绿豆芽洗净，控水'
        },
        {
          img: require('@/assets/cook/8.jpg'),
          dis:'绿豆芽洗净，控水'
        },
        {
          img: require('@/assets/cook/9.jpg'),
          dis:'绿豆芽洗净，控水'
        },
      ],
      imgs:[
        require('@/assets/class图标/1.png'),
        require('@/assets/class图标/2.png'),
        require('@/assets/class图标/3.png'),
      ],
      
    })
    onMounted(()=>{
      window.addEventListener('scroll',()=>{
        let top = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset;
        let o = document.querySelector('.cookBar1');
        o.style.opacity = top/400;
      })
      
    })
    const share = ()=>{
      showShare.value = true;
    }
    const addCollect = ()=>{
      console.log('收到消息')
      store.commit('setCook1',route.params.img);
      store.commit('setCook2',route.params.text);
      store.state.cook.isCollect = true;
      console.log(store.state.cook.isCollect)
      console.log(store.state.cook);
     
    }
    return{
      ...toRefs(state),
      options,
      showShare,
      share,
      addCollect
    }
  }
  
}
</script>

<style lang="less" scoped>
.cook{
  position: relative;
  .cookBar{
  width: 7.5rem;
  height: 1rem;
  position:fixed;
  z-index: 100;
  left: 0;
  .btn1{
    display: block;
    position:absolute;
    margin-top: .25rem;
    left: .2rem;
    width: .5rem;
    height: .5rem;
  }
  
  .btn2{
    margin-top: .25rem;
    display: block;
    position:absolute;
    right: .2rem;
    width: .5rem;
    height: .5rem;
  }
  }
  .cookBar1{
    width: 7.5rem;
    height: 1rem;
    position:fixed;
    z-index: 99;
    top: 0;
    left: 0;
    opacity:0;
    background-color: #fff;
  }
  .imgbox{
    width:100vw;
    height: 8rem;
  }
  .text{
    margin-top: -.1rem;
    background:radial-gradient(circle 5rem at center center ,skyblue,pink) ;
    font-size: .6rem;
    font-weight: 600;
    color: white;
    height: 100%;
  }
  .need{
    padding: 0 .1rem;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: left;
    span{
      text-align: left;
      font-size: .4rem;
      font-weight: 600;
      color:#757575;
      margin-bottom: .3rem;
    }
    .title{
      color:#757575;
      display: flex;
      flex-direction: row;
      justify-content: start;
      align-items:center;
      span{
        display:block
        
      }
      img{
        display: block;
        width:.5rem;
        margin-bottom:.27rem;
      }
    }
    .shadow{
      margin-bottom: .2rem;
      box-shadow: 0px 0px 3px #bdbdbd;
      .need-item{
      height: 1rem;
      border-bottom: 1px dashed #bdbdbd;
      .item-name{
        color:#757575;
        width: 2rem;
        float: left;
        height: .4rem;
        font-weight: 600;
        line-height: 1rem;
      }
      .item-account{
        color:#757575;
        width: 2rem;
        float: right;
        margin-right: 2rem;
        line-height: 1rem;
      }
    }
    

    }
    .steps{
      padding: 0 .2rem;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: left;
      
      .dis{
        margin-top: .1rem;
        text-align: left;
      }
    }
  }
  .cards{
    .card{
      margin: .2rem auto;
    }
  }
 
  }
</style>