<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/one">one</router-link> |
      <router-link to="/two">two</router-link> |
      <router-link to="/three">three</router-link>
    </div> -->
    <!-- <Login /> -->
    <router-view />
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';
import Login from './views/Login.vue'

@Component({
  components: ({
    Login
  })
})

export default class App extends Vue {

}

</script>
<style lang="scss">
#app {
  // font-family: Avenir, Helvetica, Arial, sans-serif;
  // -webkit-font-smoothing: antialiased;
  // -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  // color: #2c3e50;
  // padding: 16px;
  height: 100%;
}
html {
  font-size: 1vw;
}
body {
}

// @function px2rem($px) {
//   @return $px / 1080 * 10rem;
// }

// @media screen and (max-width: 320px) {
//   html{
//     font-size: 32px;
//   }
//   body{
//     min-width: 320px;
//   }
// }
// @media screen and (min-width: 800px) {
//   html{
//     font-size: 80px;
//   }
//   body{
//     max-width: 800px;
//   }
// }
</style>
