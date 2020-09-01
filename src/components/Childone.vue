<template>
  <div class="hello">
      <p>info: {{getData}}</p>
      <span>name：</span><input type="text" v-model="infoNow.name">
      <br>
      <span>age: </span><input type="text" v-model="infoNow.age">
      <br>
      <button @click="handleInfo">submit</button>
    
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Mutation, State, Action } from 'vuex-class'


@Component
export default class Childone extends Vue {
  @State('info') info: any
  @Action('updateInfo') actionInfo: any;

  private infoNow: object = {}

  private created(): void {
    this.infoNow = JSON.parse(JSON.stringify(this.info))
  }

  private handleInfo(): void {
    this.actionInfo(this.infoNow)
  }

  private get getData(): any {
    return this.$store.state.info
  }
}
</script>

<style scoped lang="scss">

</style>
