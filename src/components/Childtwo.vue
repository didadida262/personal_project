<template>
  <div class="hello">
    <img
     v-if="img"
     src="../assets/bg1.jpg" class="poster" style="">
    <video
     v-else
     controls width="600">
       <source src="../assets/test.mp4" type="video/mp4">
    </video>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Childtwo extends Vue {
  img = true


 
}
</script>

<style scoped lang="scss">

</style>
