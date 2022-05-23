<template>
 <div>
    <transition enter-active-class="animate__animated animate__fadeIn animate__faster	" leave-active-class="animate__animated animate__fadeOut animate__faster ">
        <router-view/>
    </transition>
   
   
 </div>
  
</template>

<script>
import { ref } from 'vue';
export default {
  setup() {
    const active = ref(0);
    return { active };
  },
};

</script>

<style lang="less">
*{
  font-family: 'Comic Sans MS,黑体';
  margin: 0px;
  padding: 0px;
  border-style: none;
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
