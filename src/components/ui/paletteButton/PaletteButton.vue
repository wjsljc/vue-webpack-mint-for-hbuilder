<template>
  <transition name="slide">
    <div class="palette-button">
      <mt-header class="header" title="PaletteButton" :fixed="headerConf.fixed">
        <div slot="left">
          <mt-button icon="back" @click="back">返回</mt-button>
        </div>
      </mt-header>
      <div class="content">
        <mt-palette-button content="+" @expand="main_log('expand')" @expanded="main_log('expanded')"
                           @collapse="main_log('collapse')"
                           direction="rt" class="pb" :radius="80" ref="target_1"
                           mainButtonStyle="color:#fff;background-color:#26a2ff;"
                           style="left:30px;">
          <div class="my-icon-button indexicon icon-popup" @touchstart="sub_log(1)"></div>
          <div class="my-icon-button indexicon icon-popup" @touchstart="sub_log(2)"></div>
          <div class="my-icon-button indexicon icon-popup" @touchstart="sub_log(3)"></div>
        </mt-palette-button>
      </div>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
  import { Button, PaletteButton } from 'mint-ui'
  import { headerMixin } from 'assets/js/mixins'

  export default {
    mixins: [headerMixin],
    methods: {
      main_log (val) {
        console.log('main_log', val);
      },
      sub_log (val) {
        console.log('sub_log', val);
        this.$refs.target_1.collapse();
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~assets/css/variable.styl"
  @import "~assets/css/transition.styl"
  .palette-button {
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
