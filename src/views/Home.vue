<template>
  <div class="home">
    <!-- <a-spin v-if="data.length === 0" /> -->
    <div class="index" >
      <a-button @click="changeLa">切换语言</a-button>
      <p>{{ $t('message')}}</p>
      <h3>{{ data }}</h3>
      <div class="logo"><img alt="Vue logo" src="../assets/logo.jpg"></div>
        <a-button @click="toNewoWorld" style="margin-top:10px">Enter</a-button>
      <div class="testcss"></div>
      <!-- <a-button @click="throttle(fn,1000)">test_d</a-button> -->
      <!-- <Test
        value="test"
        @submit="testemit"
      /> -->
        <!-- <el-button>默认按钮</el-button> -->
    </div>
    <button @click="debounce">ceshi</button>
  </div>
</template>



<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { commonAPI } from '../api/common'
import Test from '../components/Test.vue'

@Component({
  components:({
    Test
  })
})
export default class Home extends Vue {
  private word = ""
  private data = ""
  timer = null as any
  flag = true
  private created(): void {
    this.getWord()
    this.gettestdata()
  }

  private changeLa(): void{
    if(localStorage.language === 'zh') {
      localStorage.setItem('language','en')
    } else if(localStorage.language ==='en') {
      localStorage.setItem('language','zh')
    }
    console.log('localStorage.language：',localStorage.language)
    this.$i18n.locale = localStorage.language
  }

  private gettestdata(): void {
    commonAPI.testdata()
    .then((res: any) => {
      console.log("获取测试数据：",res.data)
    })
  }

  private getImg = (url: any) => {
    return new Promise((resolve,reject) => {
        const xml = new XMLHttpRequest()
        xml.onreadystatechange = function() {
          if(xml.readyState == 4 && xml.status === 200) {
            resolve(xml.responseText)
          }
        }
        xml.open('GET','http://127.0.0.1:5000/word')
        xml.send()
      })
        .then((res) => {
          console.log("res")
        })
        .catch(err => {
          console.log('err')
        })
  }

  private fn = function() {
    console.log("click")
  }

  // private testemit(val: any): void{
  //   console.log("儿子提交的值：",val)
  // }

  // private debounce = (fn: any,delay: any) => {
  //     clearTimeout(this.timer)
  //     this.timer = setTimeout(fn,delay)
  // }


  private throttle = (fn: any, delay: any) => {
    if(this.flag) {
      this.flag = false
      this.timer = setTimeout(() => {
        fn()
        this.flag = true
      }, delay)
    }
  }

  private debounce = function(fn: any,delay: any) {
    console.log('as')
        let timer = null as any
        return (function() {
            clearTimeout(timer)
            timer = setTimeout(fn,delay)
        })()
    }  

  private getWord(): void {
    commonAPI.getWorld()
    .then((res: any) => {
      this.data = res.data.data
      console.log("数据:",res)
    })
    .catch((err: any) => {
      console.log(err)
    })
  }



  private toNewoWorld(): void  {
    this.$router.push({ path: '/index'})
  }

  private getChildData(res: any): void {
    console.log(res)
  }
}

</script>

<style scoped lang="scss">
.home {
  background-image: linear-gradient(120deg,white,black);
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width:300px;
    height:200px;
    transition: 1s height cubic-bezier(.83,.97,.05,1.44);
  }
  img:hover {
    width: 400px;
    height: 300px;
  }
  .index {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    .logo {
      box-shadow:3px 2px 14px #333333;
    }
    .btn {
      margin-top: 10px;
    }
    .word {
      font-size: 1rem;
    }
  }
  
}
</style>
