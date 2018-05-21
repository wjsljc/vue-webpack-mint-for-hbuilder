<template>
  <transition name="slide">
    <div class="lazyLoad" id="lazyLoad">
      <mt-header class="header" title="LazyLoad" :fixed="headerConf.fixed">
        <router-link to="/" slot="left">
          <mt-button icon="back">返回</mt-button>
        </router-link>
      </mt-header>
      <div class="content" ref="content">
        <ul class="page-lazyload-list">
          <li v-for="item in imgSrc">
            <img v-lazy.lazyLoad="item">
          </li>
        </ul>
      </div>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
  import { Header, Lazyload, Button } from 'mint-ui';

  export default {
    data () {
      return {
        headerConf: {
          fixed: true
        },
        imgSrc: [
          'http://fuss10.elemecdn.com/b/18/0678e57cb1b226c04888e7f244c20jpeg.jpeg',
          'http://fuss10.elemecdn.com/3/1e/42634e29812e6594c98a89e922c60jpeg.jpeg',
          'http://fuss10.elemecdn.com/1/c5/95c37272d3e554317dcec1e17a9f5jpeg.jpeg',
          'http://fuss10.elemecdn.com/3/1e/42634e29812e6594c98a89e922c60jpeg.jpeg',
          'http://fuss10.elemecdn.com/3/1e/42634e29812e6594c98a89e922c60jpeg.jpeg',
          'http://fuss10.elemecdn.com/3/1e/42634e29812e6594c98a89e922c60jpeg.jpeg'
        ]
      }
    },
    methods: {}
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~assets/css/variable.styl"
  @import "~assets/css/transition.styl"
  .lazyLoad {
    position absolute
    z-index 100
    top 0
    left 0
    right 0
    bottom 0
    background-color $color-background
    .content {
      padding-top 50px
      img {
        display block
        width 90%
        margin 10px auto
      }
      image[lazy=loading] {
        width: 100px;
        height: 300px;
        margin: auto;
      }
    }
  }
</style>
