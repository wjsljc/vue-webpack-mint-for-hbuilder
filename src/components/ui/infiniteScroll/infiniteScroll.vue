<template>
  <transition name="slide">
    <div class="infiniteScroll">
      <mt-header class="header" title="InfiniteScroll" :fixed="headerConf.fixed">
        <router-link to="/" slot="left">
          <mt-button icon="back">返回</mt-button>
        </router-link>
      </mt-header>
      <div class="content">
        <ul
          v-infinite-scroll="loadMore"
          :infinite-scroll-disabled="scrollConf.flag"
          :infinite-scroll-distance="scrollConf.distance"
          :infinite-scroll-immediate-check="scrollConf.immediate"
          class="infinite-content"
        >
          <li v-for="item in list">{{ item }}</li>
        </ul>
      </div>
    </div>
  </transition>
</template>

<script>
  import { Header, InfiniteScroll, Indicator, Button } from 'mint-ui';

  export default {
    name: "Indicator",
    data () {
      return {
        headerConf: {
          fixed: true
        },
        scrollConf: {
          flag: true,
          distance: 20, // 触发滚动的距离
          immediate: true,  // 是否立即执行一次
        },
        list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
      }
    },
    deactivated () {
      this.$destroy()
    },
    methods: {
      loadMore () {
        Indicator.open({
          text: '加载中...',
          spinnerType: 'triple-bounce'
        });
        setTimeout(() => {
          let last = this.list[this.list.length - 1];
          for (let i = 1; i <= 10; i++) {
            this.list.push(last + i);
          }
          Indicator.close()
        }, 2500);
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~assets/css/variable.styl"
  @import "~assets/css/transition.styl"
  .infiniteScroll {
    position absolute
    z-index 100
    top 0
    left 0
    right 0
    bottom 0
    background-color $color-background
    .content {
      padding-top 50px
      .infinite-content li {
        height 40px
        padding-left 5px
        line-height 40px
        border-bottom 1px solid $color-text-l
        font-size $font-size-medium-x
      }
    }
  }
</style>
