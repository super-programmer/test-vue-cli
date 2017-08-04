<template>
  <div class="hello">
    <div class="bg"></div>
    <article class="info">
      <h3 class="tit">SUPER-BLOG</h3>
      <section class="item">
        <label class="item-tit">
          手机号
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
          <ul><li v-for="err in errors" v-text="err">{{errors}}</li></ul>
        </div>
      </section>
      <section class="b-buttons">
        <input type="button" value="登录" class="u-btn" @click="login">
        <input type="button" value="注册" class="u-btn" @click="sign">
      </section>
      <section class="success-cover" v-if="signSucess"></section>
    </article>
  </div>
</template>
<script type="es6">
  import { mapState } from 'vuex'
  import { Toast } from 'mint-ui'
  export default {
    name: 'hello',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        phoneNum: 133,
        password: '123456'
      }
    },
    vuerify: {
      phoneNum: {
        test: /^1[3|4|5|8|7][0-9]\d{8}$/, // 自定义规则，可以是函数，正则或者全局注册的规则（填字符串）
        message:'手机号非法！'
      },
      password:{
        test(val){
          var reg1 = /[!@#$%^&*()_?<>{}]{1}/;
          var reg2 = /([a-zA-Z0-9!@#$%^&*()_?<>{}]){8,18}/;
          var reg3 = /[a-zA-Z]+/;
          var reg4 = /[0-9]+/;
          if(reg1.test(val) && reg2.test(val) && reg3.test(val) && reg4.test(val)){
            return true;
          }else if(!reg1.test(val)){
            return false;
          }else if(!reg2.test(val)){
            return false;
          }else if(!reg3.test(val)){
            return false;
          }else if(!reg4.test(val)){
            return false;
          }
        },
        message:'密码不符合规则！'
      } // 使用全局注册的规则
    },
    methods: {
      sign: function () {
        var useObj = {
          phoneNum: this.phoneNum,
          password: this.password
        };
        if(this.$vuerify.check()){
          this.$store.commit({
            type: 'update',
            useObj: useObj
          });
          this.$store.dispatch('saveForm');
        }
      },
      toast: function () {
        if(this.signSucess){
          Toast('注册成功');
        }else{
          Toast('注册失败');
        }
      }
    },
    computed: mapState({
      ...mapState({
        usePhoneNum: state => state.userSign.phoneNum,
        usePassword: state => state.userSign.password,
        signSucess: state => state.signSucess
      }),
      errors (){
        return this.$vuerify.$errors
      }
    }),
    watch: {
      'signSucess': 'toast'
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
  .info .b-buttons .u-btn{width:60px;height:30px;line-height:30px;margin:0 20px;text-align:center;background:#00d6b2;color:#fff;border:none;}
  .success-cover{position:absolute;left:0;top:0;height:100%;width:100%;background:rgba(0,0,0,0.4);border-radius:10px;}
</style>
