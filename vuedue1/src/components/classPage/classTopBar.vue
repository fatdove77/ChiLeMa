<template>
  <van-nav-bar
  title="课堂"
  @click-left="onClickLeft"
  class="title"
/>
<van-search v-model="value" placeholder="请输入搜索关键词" />

</template>

<script>
export default {
 setup() {
    const onClickLeft = () => history.back();
    return {
      onClickLeft,
    };
  },
}
</script>

<style lang="less" scoped>
.title{
   border: none;
   background:radial-gradient(circle 5rem at center center ,skyblue,pink) 
}
</style>