<template>
  <div class="music">
    <div class="header"><h1>My Music</h1></div>
    <div class="content">我是图片</div>
    <div class="operations">我是操作</div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';


@Component
export default class Childthree extends Vue {
  
  
}
</script>

<style scoped lang="scss">
.music {
  padding: 10px;
  width: 500px;
  height: 800px;
  border: 1px solid gray;
  margin: 20px auto;
  border-radius: 6px;
  box-shadow: 0px 0px 20px black;
  text-align: center;
  .header {
    height: 20%;
    border: 1px solid red;
  }  
  .content {
    height: 50%;
    border: 1px solid green;
  }
  .operations {
    height: 30%;
    border: 1px solid blue;
  }
}

</style>
