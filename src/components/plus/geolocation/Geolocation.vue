<template>
  <transition name="slide">
    <div class="geolocation">
      <mt-header class="header" title="Geolocation" :fixed="headerConf.fixed">
        <router-link to="/" slot="left">
          <mt-button icon="back">返回</mt-button>
        </router-link>
      </mt-header>
      <div class="content">
        <div class="row-block">
          <mt-button type="default" @click="getLocation">点击获取当前地理信息</mt-button>
          <mt-button type="primary">primary</mt-button>
          <mt-button type="danger">danger</mt-button>
        </div>
        <div class="row" v-show="locationInfo.flag">
          <p>{{locationInfo.address}}</p>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
  import { Header, Button, Indicator } from 'mint-ui';

  export default {
    name: "Indicator",
    data () {
      return {
        headerConf: {
          fixed: true
        },
        locationInfo: {
          flag: false,
          address: ''
        }
      }
    },
    methods: {
      getLocation () {
        let self = this
        Indicator.open({
          text: '地理信息获取中...',
          spinnerType: 'triple-bounce'
        })
        plus.geolocation.getCurrentPosition(function (p) {
          console.log("地理信息 " + JSON.stringify(p));
          self.locationInfo.address = p.address.province + p.address.city + p.address.district + p.address.street + p.address.streetNum;
          self.locationInfo.flag = true
          Indicator.close()
        }, function (e) {
          console.log("错误 " + JSON.stringify(e));
          Indicator.close()
        }, {
          enableHighAccuracy: true, //是否高精确度获取位置信息
          provider: 'amap', //优先使用高德地图
          geocode: true //是否开启地址解析
        });
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~assets/css/variable.styl"
  @import "~assets/css/transition.styl"
  .geolocation {
    position absolute
    z-index 100
    top 0
    left 0
    right 0
    bottom 0
    background-color $color-background
    .content {
      padding-top 50px
      .row {
        min-height 50px
        line-height 50px
        margin 10px 0
        text-align center
      }
      .row-block {
        margin 10px 0
        button {
          display block
          width 90%
          margin 10px auto
        }
      }
    }
  }
</style>
