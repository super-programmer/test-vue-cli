<template>
  <div class="home">
    <myheader :routerFlg="routerFlg"></myheader>
    <div class="bg"></div>
    <div v-show="msg" class="welcome">
      <transition name="rotate">
        <p>welcome super-blog</p>
      </transition>
    </div>
    <div class="main">
      {{phoneNum}}
      <input type="button" value="提交" @click="submitBlog">
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import { mystorage } from '../common/storage'
  import myheader from '../components/head'
  export default {
    name: 'home',
    data () {
      return {
        msg: true,
        phoneNum: '',
        routerFlg: 'attention'
      }
    },
    created: function () {
      var that = this
      setTimeout(function () {
        that.msg = false
      }, 2000)
      this.phoneNum = mystorage.get('phoneNum') ? mystorage.get('phoneNum') : this.usePhoneNum
    },
    methods: {
      back: function () {
        window.history.back()
      },
      submitBlog: function () {
        this.$store.dispatch('upload')
      }
    },
    components: {myheader},
    computed: mapState({
      ...mapState({
        usePhoneNum: state => state.userSign.phoneNum
      })
    })
  }
</script>

<style>
  .c-tit {
    font-size: 20px;
  }

  .bg {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    width: 100%;
    background: url('../assets/home-bg.jpg') no-repeat center;
    background-size: cover;
    z-index: -1;
  }

  .welcome {
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    height: 100px;
    line-height: 100px;
    font-size: 30px;
    font-weight: 700;
    margin-top: -50px;
    text-align: center;
    color: #fff;
  }

  .welcome p {
    width: 640px;
    margin: 0 auto;
    background: rgba(220, 200, 200, 0.5);
  }

  .rotate-enter-active, .rotate-leave-active {
    transform: scale(1.5, 1.5)
  }

  .rotate-enter, .rotate-leave-to {
    transform: scale(1, 1)
  }

  .main {
    width: 1200px;
    min-height: 600px;
    background: #fff;
    box-shadow: 2px 2px 10px #fbd502, -2px 2px 10px #fbd502;
    margin: 0 auto;
    font-size: 14px;
    color: #555;
  }
</style>
