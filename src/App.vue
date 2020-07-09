<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <main-tar-bar />
  </div>
</template>

<script>
  import MainTarBar from "components/conent/mainComponent/mainTarBar"

  let size = document.documentElement.clientWidth / 360;
  document.documentElement.style.fontSize = size * 100 + "px";

  export default {
    name: 'App',
    components: {
      MainTarBar
    }
  }
</script>

<style>
  @import "./assets/css/reset.css";
  @import './assets/css/base.css';
</style>
