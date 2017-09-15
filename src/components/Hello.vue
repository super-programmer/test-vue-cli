<template>
  <div class="hello">
    <div class="bg"></div>
      <mt-header title="sign-up" class="index-header">
        <div slot="left">
          <mt-button>关闭</mt-button>
        </div>
        <mt-button icon="more" slot="right"></mt-button>
      </mt-header>
    <article class="info">
      <h3 class="tit">SUPER-BLOG</h3>
      <section class="item">
        <label class="item-tit">
          手机号
        </label>
        <div class="con">
          <input type="text"  v-model="phoneNum" placeholder="phoneNum">
          <p v-if="errors.phoneNum">{{errors.phoneNum}}</p>
        </div>
      </section>
      <section class="item">
        <label class="item-tit">
          密码
        </label>
        <div class="con">
          <input type="text" v-model="password" placeholder="password">
          <p v-if="errors.password">{{errors.password}}</p>
        </div>
      </section>
      <section class="b-buttons">
        <input type="button" value="登录" class="u-btn" @click="login">
        <input type="button" value="注册" class="u-btn" @click="sign">
      </section>
    </article>
  </div>
</template>
<script type="es6">
  import { mapState } from 'vuex'
  import { Toast } from 'mint-ui'
  import { mystorage } from '../common/storage'
  export default {
    name: 'hello',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        phoneNum: 133,
        password: '123456',
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
          this.$store.dispatch({
            type: 'update',
            useObj: useObj
          });
          this.$store.dispatch('resetState');
          this.$store.dispatch('saveForm');
        }
      },
      login: function () {
        var useObj = {
          phoneNum: this.phoneNum,
          password: this.password
        };
        if(this.$vuerify.check()){
          this.$store.dispatch({
            type: 'update',
            useObj: useObj
          });
          this.$store.dispatch('resetState');
          this.$store.dispatch('login');
        }
      },
      toast: function () {
        if(this.signSucess){
          Toast('注册成功');
        }else{
          Toast('注册失败');
        }
      },
      toastState: function() {
        switch (this.useLoginState) {
          case 200 :
            this.$router.push('/home')
            mystorage.set('phoneNum', this.phoneNum)
            mystorage.set('password', this.password)
            break;
          case 201 :
            Toast('手机号码已注册！')
            break;
          case 203 :
            Toast('手机号码未注册！')
            break;
          case 400 :
            Toast('密码错误！')
            break;
        }
      },
    },
    computed: mapState({
      ...mapState({
        usePhoneNum: state => state.userSign.phoneNum,
        usePassword: state => state.userSign.password,
        useLoginState: state => state.userState.state,
        signSucess: state => state.signSucess
      }),
      errors (){
        return this.$vuerify.$errors
      }
    }),
    watch: {
      'signSucess': 'toast',
      'useLoginState': 'toastState',
    }

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped src="../assets/baseCss/login.css"></style>
