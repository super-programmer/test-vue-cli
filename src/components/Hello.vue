<template>
  <div class="hello">
    <div class="bg"></div>
    <article class="info">
      <h3 class="tit">SUPER-BLOG</h3>
      <section class="item">
        <label class="item-tit">
          手机号 {{phoneNum}}
        </label>
        <div class="con">
          <input type="text"  v-model="phoneNum" placeholder="phoneNum">
        </div>
      </section>
      <section class="item">
        <label class="item-tit">
          密码
        </label>
        <div class="con">
          <input type="text" v-model="password" placeholder="password">
        </div>
      </section>
      <section class="b-buttons">
        <input type="button" value="注册" class="u-btn" @click="add">
      </section>
    </article>
  </div>
</template>
<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      phoneNum: this.$store.state.userSign.phoneNum,
      password: this.$store.state.userSign.password
    }
  },
  methods: {
    add: function () {
      this.$store.dispatch('saveForm')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .bg{position:fixed;top:0;left:0;bottom:0;width:100%;background:url('../assets/bg.png') no-repeat center;background-size:cover;z-index:-1;}
  .info{position:absolute;top:50%;left:50%;margin:-200px 0 0 -150px;width:300px;height:400px;background:#8babd7;border-radius:10px;color:#fff;}
  .info .tit{margin:20px 0;text-align:center;font-size:22px;}
  .info .item{margin:20px 0;font-size:16px;overflow:hidden;font-weight:bold;padding:0 20px;}
  .info .item .item-tit{float:left;width:60px;}
  .info .b-buttons{text-align:center;}
  .info .b-buttons .u-btn{width:60px;height:30px;line-height:30px;text-align:center;background:#00d6b2;color:#fff;border:none;}
</style>
