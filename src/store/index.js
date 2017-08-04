/**
 * Created by Administrator on 2017-07-21.
 */
// store.js
import Vue from 'vue'
import Vuex from 'vuex'

// 引入 axios
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  // 定义状态
  state: {
    userSign: {
      phoneNum: '12312345678',
      password: '12345'
    },
    userState: {
      come: 'true'
    },
    num: 1,
    signSucess: false
  },
  mutations: {
    update (state, userSign) {
      // 变更状态
      state.userSign = userSign.useObj
    },
    upSucessSate (state, signSucess) {
      state.signSucess = signSucess.signSucess
    }
  },
  actions: {
    // 封装一个 ajax 方法
    saveForm (context) {
      axios.get('http://localhost:3000/login', {
        params: {
          data: context.state.userSign
        }
      }).then(function (response) {
        context.commit({
          type: 'upSucessSate',
          signSucess: true
        });
      }).catch(function (error) {
        context.commit({
          type: 'upSucessSate',
          signSucess: false
        });
      })

    }
  }
})
