<template>
  <div class="home">
    <div><img alt="Vue logo" src="../assets/logo.jpg" width="300" height="200"></div>
    <div class="btn" @click="toNewoWorld"><a-button>wolcome</a-button></div>
  </div>

</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Home extends Vue {
  private toNewoWorld(): void  {
    this.$router.push({ path: '/One'})
  }
}
</script>

<style scoped lang="scss">
.home {
  display: flex;
  width: 100%;
  padding: 10px;
  justify-content: center;
  align-items: center;
  height: 500px;
  flex-direction: column;
  .btn {
    margin-top: 10px;
  }
}



</style>
