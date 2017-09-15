import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Index from '@/components/Index'
import mystyle from '@/components/mystyle'
import attention from '@/components/attention'
import ranking from '@/components/ranking'
import friends from '@/components/friends'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/home',
      name: 'Index',
      component: Index
    },
    {
      path: '/mystyle',
      name: 'mystyle',
      component: mystyle
    },
    {
      path: '/attention',
      name: 'attention',
      component: attention
    },
    {
      path: '/ranking',
      name: 'ranking',
      component: ranking
    },
    {
      path: '/friends',
      name: 'friends',
      component: friends
    }
  ]
})
