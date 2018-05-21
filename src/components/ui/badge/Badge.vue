<template>
  <transition name="slide">
    <div class="badge">
      <mt-header class="header" title="Badge" :fixed="headerConf.fixed">
        <router-link to="/" slot="left">
          <mt-button icon="back">返回</mt-button>
        </router-link>
      </mt-header>
      <div class="content">
        <div class="row">
          <div class="title">指定尺寸</div>
          <mt-badge size="small">30</mt-badge>
          <mt-badge size="normal">10</mt-badge>
          <mt-badge size="large">10</mt-badge>
        </div>
        <div class="row">
          <div class="title">指定类型</div>
          <mt-badge type="primary">30</mt-badge>
          <mt-badge type="error">10</mt-badge>
          <mt-badge type="success">10</mt-badge>
          <mt-badge type="warning">10</mt-badge>
        </div>
        <div class="row">
          <div class="title">指定颜色</div>
          <mt-badge size="small" color="#888">自定义颜色</mt-badge>
        </div>
        <div class="row">
          <div class="title"></div>
          <mt-cell title="徽章" value="未读消息">
            <mt-badge type="error">10</mt-badge>
          </mt-cell>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
  import { Header, Button, Badge, Cell } from 'mint-ui';

  export default {
    name: "Indicator",
    data () {
      return {
        headerConf: {
          fixed: true
        },
      }
    },
    methods: {}
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~assets/css/variable.styl"
  @import "~assets/css/transition.styl"
  .badge {
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
        margin-bottom 10px
        padding 10px
        &:last-child {
          padding 0
        }
        .title {
          height 50px
          line-height 50px
        }
      }
    }
  }
</style>
