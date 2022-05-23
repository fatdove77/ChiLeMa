import { createStore } from 'vuex'

export default createStore({
  state: {
    cook:{
      img: '',
      text:'',
      isCollect: false,
    }  //多个元素可以用数组表示变量然后push进入
  },
  getters: {
    getCook: function(state) {
      return state.cook;
    }
  },
  mutations: {
    setCook1(state,img){
      state.cook.img = img;
    },
    setCook2(state,text){
      state.cook.text = text
    }
  },
  actions: {
  },
  modules: {
  }
})
