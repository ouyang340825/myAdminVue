<template>
  <div id="app" style="height: 100%">
    <Headers/>
    <LeftMenu/>
    <router-view/>
  </div>
</template>

<script>
  import Headers from "./layout/Header"
  import LeftMenu from "./layout/LeftMenu"

export default {
  name: 'App',
  components:{
    Headers,LeftMenu
  }
}
</script>

<style>
  *{
    margin:0;padding:0;
  }

  html,body {
    width:100%;height:100%;
  }

</style>
