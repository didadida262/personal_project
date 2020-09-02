<template>
  <div class="home">
    <h1>胡说八道？胡说九道</h1>
    <div class="logo"><img alt="Vue logo" src="../assets/logo.jpg" width="300" height="200"></div>
    <div class="btn" @click="toNewoWorld"><a-button>Enter</a-button></div>
    <Test
      :data = data
      >

    </Test>
  </div>

</template>



<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { commonAPI } from '../api/common'
import Test from '../components/Test.vue'

@Component({
  components:{
    Test,
  }
})
export default class Home extends Vue {
  

  private data: any = "我是数据"

  private created(): void {
    this.getUser()
  }

  private getUser(): void {
    commonAPI.getUser()
      .then( (res: any) => {
        console.log('拿到作者:',res)
      })
      .catch((err: any) => {
        err
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
  border-radius: 1%;
  display: flex;
  width: 100%;
  height: 80%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .logo {
    box-shadow:3px 2px 14px #333333;
  }
  .btn {
    margin-top: 10px;
  }
}



</style>
