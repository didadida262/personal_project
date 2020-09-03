<template>
  <div class="home">
    <h1>{{word}}</h1>
    <div class="logo"><img alt="Vue logo" src="../assets/logo.jpg" width="300" height="200"></div>
    <div class="btn" @click="toNewoWorld"><a-button>Enter</a-button></div>
    <!-- <Test
      :data = data
      >
    </Test> -->
    <h1>ajax:{{data}}</h1>
  </div>

</template>



<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { commonAPI } from '../api/common'
import Test from '../components/Test.vue'

@Component
export default class Home extends Vue {
  

  private word: any = ""
  private data: any = ""

  private created(): void {
    // this.getWord()
    this.ajax()
    
  }

  private ajax(): void {
    const xml = new XMLHttpRequest()
    xml.onreadystatechange = () => {
      if(xml.status == 200 && xml.readyState == 4) {
        this.data = xml.responseText
      }
    }
    xml.open("GET","http://127.0.0.1:5000/word")
    xml.send()
    
  }

  private getWord(): void {
    commonAPI.getWord()
      .then( (res: any) => {
        this.word = res.data.data
      })
      .catch((err: any) => {
        err
      })
  }



  private toNewoWorld(): void  {
    this.$router.push({ path: '/One'})
  }

  private getChildData(res: any): void {
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
