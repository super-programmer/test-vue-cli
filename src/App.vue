<template>
  <div id="app">
    <mt-header title="VUE">
      <div slot="left">
        <mt-button v-link="'/'" icon="back">返回</mt-button>
      </div>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>

</style>
