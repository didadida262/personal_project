<template>
  <div class="Childone">
    <div class="sider">
      <a-menu
          mode="inline"
          @click="handleMenuChange"
        >
          <a-menu-item key="fullpage">
            <a-icon type="pie-chart" />
            <span>Full page</span>
          </a-menu-item>
          <a-menu-item key="2">
            <a-icon type="desktop" />
            <span>Option 2</span>
          </a-menu-item>
        </a-menu>

    </div>
    <div class="content">内容 </div>
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

  private handleMenuChange(target: any): void {
    console.log(target)
    if(target.key === 'fullpage') {
      this.$router.push({path: "/fullpage"})
    }
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
.Childone {
  border: 1px solid red;
  width: 100%;
  display: flex;
  .sider {
    width: 200px;
  }
  .content {
    margin-left: 10px;
    flex:1;
    border: 1px solid green;
  }
}

</style>
