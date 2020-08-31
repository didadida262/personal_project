<template>
  <div class="hello">
    <p>{{getdata}}</p>
    
    
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

</style>
