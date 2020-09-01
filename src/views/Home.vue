<template>
  <div class="home">
    <div><img alt="Vue logo" src="../assets/logo.jpg" width="300" height="200"></div>
    <div class="btn" @click="toNewoWorld"><a-button>wolcome</a-button></div>
    <!-- <img src="http://127.0.0.1:5000/?callback=getdata"> -->

  </div>

</template>



<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Home extends Vue {
  [x: string]: any;

  private created(): void {
    this.$axios({
      method: "get",
      // url: "https://api.coindesk.com/v1/bpi/currentprice.json"
      url: "http://127.0.0.1:5000/test"
    })
      .then((res: any) => {
        console.log('axios获取之数据：',res)
      })
      .catch((err: any) => {
        console.log(err)
      })
  }

  private toNewoWorld(): void  {
    this.$router.push({ path: '/One'})
  }

  private getdata(res: any): void {
    console.log(res)
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
