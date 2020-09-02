<template>
  <div class="fullpage">
    <full-page ref="fullpage" :options="options" id="fullpage">
    <div class="section">
      First section ...
    </div>
    <div class="section">
      Second section ...
    </div>
  </full-page>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Fullpage extends Vue {
  @Prop() private msg!: string;


  private options =  {
        licenseKey: 'YOUR_KEY_HEERE',
        menu: '#menu',
        anchors: ['page1', 'page2', 'page3'],
        sectionsColor: ['#41b883', '#ff5f45', '#0798ec']
      }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
