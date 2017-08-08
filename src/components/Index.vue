<template>
  <div class="home">
    <mt-header title="主页" class="index-header">
      <div slot="left">
        <mt-button icon="back" @click="back">返回</mt-button>
      </div>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <div class="bg"></div>
    <div class="welcome">
      <transition name="rotate">
        <p v-if="msg">welcome super-blog</p>
      </transition>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  export default {
    name: 'home',
    data () {
      return {
        msg: true
      }
    },
    created: function () {
      var that = this
      setTimeout(function () {
        that.msg = false
      }, 2000)
    },
    methods: {
      back: function () {
        window.history.back()
      }
    },
    computed: mapState({
    })
  }
</script>

<style>
  .bg{position:fixed;top:0;left:0;bottom:0;width:100%;background:url('../assets/home-bg.jpg') no-repeat center;background-size:cover;z-index:-1;}
  .welcome{position:absolute;top:50%;left:0;width:100%;height:100px;line-height:100px;font-size:30px;font-weight:700;margin-top:-50px;text-align:center;color:#fff;}
  .welcome p{width:640px;margin:0 auto;background:rgba(220,200,200,0.5);}
  .rotate-enter-active, .rotate-leave-active {
    transform: scale(1.5,1.5)
  }
  .rotate-enter, .rotate-leave-to{
    transform: scale(1,1)
  }
</style>
