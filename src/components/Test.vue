<template>
  <div class="test">
    <!-- <div class="info1">1</div>
    <div class="info2">2</div> -->
   <span @click="submit">{{value}}</span>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch, Emit } from 'vue-property-decorator';

@Component
export default class Test extends Vue {
  @Prop() value: any


  @Emit("submit")
  returnval() {
    return "100"
  }

  private submit(): void{
    this.returnval()
  }


  @Watch("inputData", { immediate: true })
  private ondataChange(data: any) {
    console.log('shuru:',data)
    
  }

  private inputData: any = ""

  private created(): void{
    console.log('debounce()',this.debounce(this.fn,3000))
    console.log('debounce',this.debounce)
  }




  private handleData(): void {
    this.$emit("getChildData","bbbbabababbabab")
  }

  private fn(): void {
    console.log('出发啦')
  }

  private debounce(fn: any,delay: any): any {
    let timer = null as any
    return function() {
      clearTimeout(timer)
      timer = setTimeout(fn,delay)
    }
  }

}
</script>

<style scoped lang="scss">
.test {
  border: 1px solid red;
  height: 50px;
  width: 100px;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
