<template>
  <div class="hello">
    <img src="https://f1.market.xiaomi.com/download/FoundApp/031dc74fcf1104c511e2c7788e11281d167a3399a/poster.png" class="poster" style="">
    <button @click="handleVideo">click</button>
    <video
     poster="https://f1.market.xiaomi.com/download/FoundApp/031dc74fcf1104c511e2c7788e11281d167a3399a/poster.png" 
     id="videoId7" 
     webkit-playsinline="" 
     playsinline="" 
     preload="auto" 
     x5-video-player-type="h5" 
     x-webkit-airplay="true" 
     class="video" 
     src="https://f1.market.mi-img.com/download/FoundApp/0d5714d4de353ec14a86f04be204c52e07441a926/LLLLLL.mp4" 
     style="width: 100vw; height: 56.272vw;"></video>
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
