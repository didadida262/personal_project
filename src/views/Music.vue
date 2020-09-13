<template>
  <div class="music">
    <div class="header">
      <h1>My Music-player</h1>
    </div>
    <div class="content" ref="content">
      <audio
       id="audio" 
       src="../assets/1.mp3" 
       controls 
       loop>
        你的浏览器不支持audio标签
      </audio>

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
export default class Childthree extends Vue {
  private playflag = true
  private musicBox = {
    musicDom: null as any,
    songs: ['../assets/1.mp3'] as string[],
    currentIndex: 0,

    init: function() {
      this.musicDom = document.createElement('audio')
      this.musicDom.src = this.songs[this.currentIndex]
    },
    
    add: function(src: any) {
      src = '../assets/' + src
      this.songs.push(src)
    },
    play: function() {
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
  }

  private play(): void {
    console.log('1')
    this.musicBox.play()
    console.log('2')
    this.playflag = false
  }

  private stop(): void {
    this.musicBox.stop()
    this.playflag = true
  }

  private init(): void {
    this.musicBox.init()
    const target = document.querySelector('.content') as any
    console.log("this.musicBox.musicDom::",this.musicBox.musicDom)
    this.musicBox.add('2.mp3')
    this.musicBox.add('3.mp3')
    target.appendChild(this.musicBox.musicDom)
  }

}
</script>

<style scoped lang="scss">
.music {
  padding: 10px;
  width: 500px;
  height: 800px;
  border: 1px solid gray;
  margin: 20px auto;
  border-radius: 6px;
  box-shadow: 0px 0px 20px black;
  text-align: center;
  .header {
    height: 20%;
    border: 1px solid red;
    display: flex;
    align-items: center;
    justify-content: center;
  }  
  .content {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    padding: 10px;
    height: 50%;
    border: 1px solid green;
    .pic {
      width: 100%;
    }    
    #video {
      width: 100%;
    }
  }
  .operations {
    padding: 10px;
    height: 30%;
    border: 1px solid blue;
  }
}

</style>
