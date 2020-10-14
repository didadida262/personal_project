<template>
  <div class="home">
    <div class="index">
      <h3>{{ data }}</h3>
      <div class="logo"><img alt="Vue logo" src="../assets/logo.jpg" width="300" height="200"></div>
      <div class="btn" @click="toNewoWorld">
        <a-button>Enter</a-button>
      </div>
      <div class="testcss"></div>
      <!-- <a-button @click="throttle(fn,1000)">test_d</a-button> -->
      <!-- <Test
        value="test"
        @submit="testemit"
      /> -->
    </div>
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
    // this.getImg('https://baike.baidu.com/pic/%E8%92%99%E5%A5%87%C2%B7D%C2%B7%E8%B7%AF%E9%A3%9E/726966/1/a8014c086e061d95f662155f76f40ad162d9cab5?fr=lemma&ct=single#aid=1&pic=a8014c086e061d95f662155f76f40ad162d9cab5')
    // console.log('kaiji')
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
        

    // const xml = new XMLHttpRequest()
    // xml.onreadystatechange = function(){
    //   if(xml.readyState === 4 && xml.status === 200) {
    //     console.log('获取图片数据：',xml.responseText)
    //   }
    // }
    // xml.open('Get','http://127.0.0.1:5000/word',true)
    // xml.send()
  }

  private fn = function() {
    console.log("click")
  }

  private testemit(val: any): void{
    console.log("儿子提交的值：",val)
  }

  private debounce = (fn: any,delay: any) => {
      clearTimeout(this.timer)
      this.timer = setTimeout(fn,delay)
  }


  private throttle = (fn: any, delay: any) => {
    if(this.flag) {
      this.flag = false
      this.timer = setTimeout(() => {
        fn()
        this.flag = true
      }, delay)
    }
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
  background-image: linear-gradient(120deg,green,blue);
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
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
