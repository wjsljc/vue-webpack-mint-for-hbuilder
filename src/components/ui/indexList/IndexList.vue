<template>
  <transition name="slide">
    <div class="index-list">
      <mt-header class="header" title="IndexList" :fixed="headerConf.fixed">
        <div slot="left">
          <mt-button icon="back" @click="back">返回</mt-button>
        </div>
      </mt-header>
      <div class="content">
        <mt-index-list>
          <mt-index-section index="A">
            <mt-cell title="Aaron"></mt-cell>
            <mt-cell title="Alden"></mt-cell>
            <mt-cell title="Austin"></mt-cell>
          </mt-index-section>
          <mt-index-section index="B">
            <mt-cell title="Baldwin"></mt-cell>
            <mt-cell title="Braden"></mt-cell>
          </mt-index-section>
          <mt-index-section index="C">
            <mt-cell title="Call"></mt-cell>
            <mt-cell title="Color"></mt-cell>
          </mt-index-section>
          <mt-index-section index="D">
            <mt-cell title="Dast"></mt-cell>
            <mt-cell title="Day"></mt-cell>
          </mt-index-section>
          <mt-index-section index="F">
            <mt-cell title="Fiedr"></mt-cell>
            <mt-cell title="Fw"></mt-cell>
          </mt-index-section>
          <mt-index-section index="Z">
            <mt-cell title="Zack"></mt-cell>
            <mt-cell title="Zane"></mt-cell>
          </mt-index-section>
        </mt-index-list>
      </div>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
  import { Button, IndexList, IndexSection } from 'mint-ui'
  import { headerMixin } from 'assets/js/mixins'

  export default {
    mixins: [headerMixin],
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~assets/css/variable.styl"
  @import "~assets/css/transition.styl"
  .index-list {
    position absolute
    z-index 100
    top 0
    left 0
    right 0
    bottom 0
    background-color $color-background
    .content {
      padding-top 50px
    }
  }
</style>
