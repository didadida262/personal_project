<template>
  <div class="hello">
    <div class="test one">1</div>
    <div class="test">2</div>
    <div class="test">3</div>
    <div class="test">4</div>
    <div class="test">5</div>
    
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Mutation, State } from 'vuex-class'


@Component
export default class Childthree extends Vue {
  @State('name') name: any
  @State('age' ) age: any
  
  private get getdata(): any {
   return this.$store.state.info
  }

  
  
}
</script>

<style scoped lang="scss">
.hello {
  border: 1px solid black;
  width: 100%;
}

.test {

  width: 500px;
  height: 500px;
  border: 1px solid red;
}
.one {
  position: sticky;
  top: 100px;
  border: 1px solid blue;  
}
</style>
