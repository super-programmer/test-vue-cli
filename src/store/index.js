/**
 * Created by Administrator on 2017-07-21.
 */
// store.js
import Vue from 'Vue'
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
    }
  },
  actions: {
    // 封装一个 ajax 方法
    saveForm (state) {
      axios({
        method: 'get',
        url: 'http://localhost:3000/sign',
        data: state.userSign.phoneNum
      })
    }
  }
})

