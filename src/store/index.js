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
      phoneNum: '',
      password: ''
    },
    userState: {
      state: '100'
    },
    num: 1,
    signSucess: true,
    blogDetail: ''
  },
  mutations: {
    upSucessSate (state, signSucess) {
      state.signSucess = signSucess.signSucess
    },
    upLoginState (state, UseSucess) {
      state.userState.state = UseSucess.state
    },
    update (state, userSign) {
      state.userSign = userSign.obj.useObj
    },
    resetState (state) {
      state.userState.state = '100'
    },
    updateblog (state, data) {
      state.blogDetail = data.detail.obj
    }
  },
  actions: {
    resetState (context) {
      context.commit('resetState')
    },
    update (context, obj) {
      context.commit({
        type: 'update',
        obj: obj
      })
    },
    // 封装一个 ajax 方法
    saveForm (context) {
      axios.get('http://localhost:3000/sign', {
        params: {
          data: context.state.userSign
        }
      }).then(function (response) {
        if (response.data.errorCode === 201) {
          context.commit({
            type: 'upLoginState',
            state: 201
          })
        } else {
          context.commit({
            type: 'upSucessSate',
            signSucess: true
          })
        }
        console.log(response)
      }).catch(function (error) {
        console.log(error)
      })
    },
    login (context) {
      axios.get('http://localhost:3000/login', {
        params: {
          data: context.state.userSign
        }
      }).then(function (response) {
        if (response.data.errorCode === 200) {
          context.commit({
            type: 'upLoginState',
            state: 200
          })
        } else if (response.data.errorCode === 400) {
          context.commit({
            type: 'upLoginState',
            state: 400
          })
        } else {
          context.commit({
            type: 'upLoginState',
            state: 203
          })
        }
        console.log(response)
      }).catch(function (error) {
        console.log(error)
      })
    },
    updateblog (context, detail) {
      context.commit({
        type: 'updateblog',
        detail: detail
      })
    },
    upload (context) {
      axios.post('http://localhost:3000/upload', {
        params: {
          uid: context.state.userSign,
          data: context.state.blogDetail
        }
      }).then(function (response) {
        console.log(response)
      }).catch(function (error) {
        console.log(error)
      })
    }
  }
})
