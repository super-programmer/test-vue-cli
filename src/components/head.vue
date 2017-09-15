<template>
  <div class="c-header">
      <div class="m-center">
          <ul class="m-top-tabs" @mouseover="mouseover" @mouseout="mouseout">
              <router-link :to="item.routerName" v-for="item in tablist" :class="['tab-item', {'tab-item-on': item.isclass}]"   @click="changeTab(item,tablist)">
                {{item.tit}}
              </router-link>
          </ul>
          <span class="m-arrow" :style="{left: originleft + 'px'}"></span>
          <span class="m-arrow m-move-arrow" :style="{left: offleft + 'px'}"></span>
          <img src="../assets/use-default.jpg" alt="" class="user-img">
      </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        tablist: [
          {tit: '我的主页', routerName: 'home', isclass: false},
          {tit: '我的style', routerName: 'mystyle', isclass: false},
          {tit: '我的关注', routerName: 'attention', isclass: false},
          {tit: '排行榜', routerName: 'ranking', isclass: false},
          {tit: '我的圈子', routerName: 'friends', isclass: false}
        ],
        offleft: 0,
        originleft: 0
      }
    },
    props: ['routerFlg'],
    created: function () {
      switch (this.routerFlg) {
        case 'home' :
          this.routerChange(0)
          break
        case 'mystyle' :
          this.routerChange(1)
          break
        case 'attention' :
          this.routerChange(2)
          break
        case 'ranking' :
          this.routerChange(3)
          break
        case 'friends' :
          this.routerChange(4)
          break
      }
    },
    methods: {
      mouseover: function (event) {
        var ev = event || window.event
        this.offleft = ev.target.offsetLeft
      },
      mouseout: function (event) {
        this.offleft = this.originleft
      },
      changeTab: function (item, tablist, event) {
        var ev = event || window.event
        this.originleft = ev.target.offsetLeft
        for (var i in tablist) {
          tablist[i].isclass = false
        }
        item.isclass = true
      },
      routerChange: function (index) {
        var $index = index
        this.tablist[$index].isclass = true
        this.offleft = $index * 120
        this.originleft = $index * 120
      }
    }
  }
</script>
<style src="../assets/baseCss/header.css"></style>
