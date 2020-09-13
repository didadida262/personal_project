<template>
  <div class="login">
    <div class="content">
      <div class="_header"><h1>Login In</h1></div>
      <div class="_content">
          <div>
            <a-input
             placeholder="用户名" 
             v-model="loginForm.username"/></div>
          <div>
            <a-input-password
              placeholder="密码" 
              v-model="loginForm.password"/></div>
      </div>
      <div class="_footer">
        <a-button @click="login">登录</a-button>
        <a-button @click="signup" class="sign_up">注册</a-button>
      </div>
    </div>
</div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';
import { commonAPI } from '../api/common'

@Component
export default class Childthree extends Vue {

  @Watch("loginForm.username",{ immediate: true })
  private nameChange(newvalue: any,oldvalue: any): void {
    console.log("newvalue:",newvalue)
    console.log("oldvalue:",oldvalue)
  }
  
  @Watch("loginForm.password",{ immediate: true })
  private pwChange(): void {
    console.log("pd")
  }

  private loginForm: any = {
    username: "",
    password: ""
  }

  private login(): void {
    console.log("提交信息：", this.loginForm)
    commonAPI.postUserInfo(this.loginForm)
      .then((res: any) => {
        console.log("返回结果:",res)
      })
      .catch((err: any) => {
        console.log(err)
      })
  }

  private signup(): void {
    console.log("注册")
  }

  
  
}
</script>

<style scoped lang="scss">
.login {
  width: 100%;
  height: 100vh;
  background-image: linear-gradient(120deg,#155799,#159957);
  display: flex;
  align-items: center;
  justify-content: space-around;
  .content {
    width: 400px;
    height: 400px;
    border-radius: 1px;
    display: flex;
    align-items: center;
    flex-direction: column;
    ._header {
      text-align: center;
      width: 100%;
      height: 100px;
      line-height: 100px;
    }
    ._content {
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      flex-direction: column;
      width: 100%;
      height: 200px;
    }
    ._footer {
      width: 100%;
      display: flex;
      justify-content: space-around;
      align-items: center;
      height: 100px;
    }
  }
}

</style>
