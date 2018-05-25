<template>
  <transition name="slide">
    <div class="button">
      <mt-header class="header" title="Button" :fixed="headerConf.fixed">
        <div slot="left">
          <mt-button icon="back" @click="back">返回</mt-button>
        </div>
      </mt-header>
      <div class="content">
        <div class="row">
          <mt-button type="default">default</mt-button>
          <mt-button type="primary">primary</mt-button>
          <mt-button type="danger">danger</mt-button>
        </div>
        <div class="row-block">
          <mt-button type="default">default</mt-button>
          <mt-button type="primary">primary</mt-button>
          <mt-button type="danger">danger</mt-button>
        </div>
        <div class="row">
          <mt-button size="small">small</mt-button>
          <mt-button size="large">large</mt-button>
          <mt-button size="normal">normal</mt-button>
        </div>
        <div class="row-block">
          <mt-button disabled>禁用按钮</mt-button>
          <mt-button plain>幽灵按钮</mt-button>
          <mt-button>
            <img src="../../../assets/logo.png" height="20" width="20" slot="icon">
            带自定义图标
          </mt-button>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
  import { Button } from 'mint-ui'
  import { headerMixin } from 'assets/js/mixins'

  export default {
    mixins: [headerMixin]
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~assets/css/variable.styl"
  @import "~assets/css/transition.styl"
  .button {
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
