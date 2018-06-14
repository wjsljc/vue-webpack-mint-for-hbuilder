<template>
  <transition name="slide">
    <div class="router-children">
      <mt-header class="header" :title="title" :fixed="headerConf.fixed">
        <div slot="left">
          <mt-button icon="back" @click="back">返回</mt-button>
        </div>
      </mt-header>
      <div class="content">
        <div class="row">
          router的动态子页面--{{pageSign}}
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
  import { Button, Indicator } from 'mint-ui'
  import { headerMixin } from 'assets/js/mixins'

  export default {
    mixins: [headerMixin],
    data () {
      return {
        pageSign: ''
      }
    },
    computed: {
      title () {
        return `RouterChildren${this.$route.params.id}`
      }
    },
    created () {
      this.pageSign = this.$route.params.id
    },
    methods: {}
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~assets/css/variable.styl"
  @import "~assets/css/transition.styl"
  .router-children {
    position absolute
    z-index 1001
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
