<template>
  <classTopBar />
  <classTabBar />
  <bottomBar />
</template>

<script>
import bottomBar from '../components/bottomBar.vue'
import classTopBar from '../components/classPage/classTopBar.vue'
import classTabBar from '../components/classPage/classTabBar.vue'
export default {
  components:{
    classTopBar,
    classTabBar,
    bottomBar,
  }

}
</script>

<style>

</style>