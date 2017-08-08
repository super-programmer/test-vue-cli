<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: 'app'
}
</script>
<style>
  @media screen and (min-width: 1280px){
    .index-header{display:none;}
  }
</style>
