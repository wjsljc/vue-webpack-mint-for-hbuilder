<template>
  <transition name="slide">
    <div class="spinner">
      <mt-header class="header" title="Spinner" :fixed="headerConf.fixed">
        <div slot="left">
          <mt-button icon="back" @click="back">返回</mt-button>
        </div>
      </mt-header>
      <div class="content">
        <mt-cell title="类型1">
          <mt-spinner type="snake"></mt-spinner>
        </mt-cell>
        <mt-cell title="类型2">
          <mt-spinner type="double-bounce"></mt-spinner>
        </mt-cell>
        <mt-cell title="类型3">
          <mt-spinner type="triple-bounce"></mt-spinner>
        </mt-cell>
        <mt-cell title="类型4">
          <mt-spinner type="fading-circle"></mt-spinner>
        </mt-cell>
        <mt-cell title="指定颜色">
          <mt-spinner color="#26a2ff"></mt-spinner>
        </mt-cell>
        <mt-cell title="指定颜色">
          <mt-spinner color="rgb(100, 100, 100)"></mt-spinner>
        </mt-cell>
        <mt-cell title="指定颜色">
          <mt-spinner color="yellow"></mt-spinner>
        </mt-cell>
        <mt-cell title="指定大小">
          <mt-spinner :size="60"></mt-spinner>
        </mt-cell>
      </div>
    </div>
  </transition>
</template>

<script>
  import { Spinner } from 'mint-ui'
  import { headerMixin } from 'assets/js/mixins'

  export default {
    mixins: [headerMixin]
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~assets/css/variable.styl"
  @import "~assets/css/transition.styl"
  .spinner {
    position absolute
    z-index 100
    top 0
    left 0
    right 0
    bottom 0
    .content {
      padding-top 50px
    }
  }
</style>
