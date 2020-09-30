<template>
  <div class="music">
    <div class="header">
      <h1>My Music-player</h1>
    </div>
    <div class="content" ref="content">
      <img src="../assets/icon.png" alt="" ref="logo" class="logo">
      <!-- <audio
       ref="audio"
       id="audio" 
       src="" 
       controls 
       loop>
        你的浏览器不支持audio标签
      </audio> -->

    </div>
    <div class="operations">
      <!-- <a-button @click="minusVoice">减小音量</a-button> -->
      <a-button @click="musicBox.prev">上一首</a-button>
      <a-button v-if="playflag" @click="play">播放</a-button>
      <a-button v-if="!playflag" @click="stop">暂停</a-button>
      <a-button @click="musicBox.next">下一首</a-button>
      <!-- <a-button @click="addVoice">加大音量</a-button> -->
      <!-- <a-button @click="killVoice">静音</a-button> -->
      <!-- <a-button @click="playvideo">play</a-button> -->
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';


@Component
export default class Music extends Vue {
  private playflag = true
  private musicBox = {
    musicDom: null as any,
    songs: [] as any,
    currentIndex: 0,
    init: function() {
      this.musicDom = document.createElement('audio')
    },
    
    add: function(src: any) {
      // src = '../assets/' + src
      this.songs.push(src)
    },
    play: function() {
      this.musicDom.src = this.songs[this.currentIndex]
      this.musicDom.play()
    },
    stop: function() {
      this.musicDom.pause()
    },
    next: function() {
      this.currentIndex++
      if(this.currentIndex === this.songs.length) {
        this.currentIndex = 0
      }
      this.musicDom.src = this.songs[this.currentIndex]
      this.play()
    },
    prev: function() {
      this.currentIndex--
      if(this.currentIndex === -1) {
        this.currentIndex = this.songs.length - 1
      }
      this.musicDom.src = this.songs[this.currentIndex]
      this.play()
    }
    
  }


  // private log(): void{
  //   console.log.call(console)
  // }


  private mounted(): void {
      this.init()
      this.musicBox.add('http://go.163.com/2018/0209/mengniu/audio/bgm.mp3')
      // this.musicBox.add('2.mp3')
      // this.musicBox.add('3.mp3')
      // console.log("songs:",this.musicBox.songs)
  }

  private play(): void {
    this.musicBox.play()
    this.playflag = false
    this.logoPlay()
  }

  private stop(): void {
    this.musicBox.stop()
    this.playflag = true
    this.logoPause()
  }

  private logoInit(): void{
    const logo = document.querySelector('.logo') as any
    logo.classList.add('logo-pause')
  }

  private logoPause(): void{
    const logo = document.querySelector('.logo') as any
    logo.classList.remove('logo-play')
    logo.classList.add('logo-pause')
  }

  private logoPlay(): void{
    const logo = document.querySelector('.logo') as any
    logo.classList.add('logo-play')
    logo.classList.remove('logo-pause')
  }

  private init(): void {
    this.logoInit()
    this.musicBox.init()
    const target = document.querySelector('.content') as any
    console.log("this.musicBox.musicDom::",this.musicBox.musicDom)
    target.appendChild(this.musicBox.musicDom)
  }

}
</script>

<style scoped lang="scss">
.music {
  width: 100%;
  height: 800px;
  margin: 20px auto;
  border-radius: 6px;
  text-align: center;
  .header {
    height: 20%;
    background-image: linear-gradient(120deg, green,blue);
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 5px;
  }  
  .content {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    padding: 10px;
    height: 50%;
    background-image: linear-gradient(240deg,gray,black);
    margin-bottom: 5px;
    .pic {
      width: 100%;
    }    
    #video {
      width: 100%;
    }
    .logo {
      animation: App-logo-spin infinite 20s linear;
    }
  }
  .operations {
    padding: 10px;
    height: 30%;
    background-image: linear-gradient(120deg,gray,black);
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  @keyframes App-logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  .logo-pause {
    animation-play-state: paused !important;
  }

  .logo-play {
    animation-play-state: running !important;
  }
}

</style>
