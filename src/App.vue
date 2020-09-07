<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/one">one</router-link> |
      <router-link to="/two">two</router-link> |
      <router-link to="/three">three</router-link>
    </div> -->
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  // font-family: Avenir, Helvetica, Arial, sans-serif;
  // -webkit-font-smoothing: antialiased;
  // -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  // color: #2c3e50;
  // padding: 10px;
  // height: 100%;
}
html {
  height: 100%;
  font-size: 1vw;
}
body {
  width: 100%;
  height: 100%;
  margin: 0 auto;
}

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
