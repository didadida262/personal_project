<template>
  <div class="hello">
    <img src="../assets/bg1.jpg" class="poster" style="">
    <button @click="handleVideo">click</button>
    <video controls autoplay="true">
       <source src="../assets/flowers.mp4" type="video/mp4">
        <source src="../assets/flowers.webm" type="video/webm">
     </video>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Childtwo extends Vue {


 
}
</script>

<style scoped lang="scss">

</style>
