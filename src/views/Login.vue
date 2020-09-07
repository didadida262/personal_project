<template>
  <div class="login">
    <div class="header">Login In</div>
    <div class="content">
      <div><input type="text" v-model="loginForm.username" placeholder="用户名"/></div>
      <div><input type="text" v-model="loginForm.password" placeholder="密码"/></div>
      <button @click="login">登录</button>
      <button @click="signup">注册</button>
    </div>
</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { commonAPI } from '../api/common'

@Component
export default class Childthree extends Vue {

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

  
  
}
</script>

<style scoped lang="scss">
.login {
  margin: 18px auto;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  border: 1px solid black;
  width: 500px;
  height: 150px;
  .content {
    // flex: 1;
  }
}

</style>
