<template>
  <transition name="slide">
    <div class="loadmore">
      <mt-header class="header" title="Loadmore" :fixed="headerConf.fixed">
        <div slot="left">
          <mt-button icon="back" @click="back">返回</mt-button>
        </div>
      </mt-header>
      <div class="content">
        <mt-loadmore :top-method="loadTop"
                     @top-status-change="handleTopChange"
                     :topPullText="loadConf.loadTopConf.topPullText"
                     :topDropText="loadConf.loadTopConf.topDropText"
                     :topLoadingText="loadConf.loadTopConf.topLoadingText"
                     :bottom-method="loadBottom"
                     :bottomAllLoaded="loadConf.loadBottomConf.isFinish"
                     :bottomPullText="loadConf.loadBottomConf.bottomPullText"
                     :bottomDropText="loadConf.loadBottomConf.bottomDropText"
                     :bottomLoadingText="loadConf.loadBottomConf.bottomLoadingText"
                     ref="loadmore"
                     class="loadmore-content"
        >
          <ul>
            <li v-for="item in list">{{ item }}</li>
          </ul>
          <div class="no-content" v-show="loadConf.loadBottomConf.isFinish">我是有底线的</div>
          <!--<div slot="top" class="mint-loadmore-top">-->
          <!--<span>松开刷新123...</span>-->
          <!--</div>-->
        </mt-loadmore>
      </div>
    </div>
  </transition>
</template>

<script>
  import { Loadmore, Indicator, Toast } from 'mint-ui'
  import { headerMixin } from 'assets/js/mixins'

  export default {
    mixins: [headerMixin],
    data () {
      return {
        loadConf: {
          loadTopConf: {
            isFinish: false,  // 是否完成下拉
            topPullText: '下拉刷新',
            topDropText: '松开刷新',
            topLoadingText: '刷新中'
          },
          loadBottomConf: {
            isFinish: false,  // 是否完成上拉
            bottomPullText: '上拉加载更多',
            bottomDropText: '释放获取内容',
            bottomLoadingText: '加载中',
            count: 1, // 模拟次数
          }
        },
        list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
        originalList: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
      }
    },
    methods: {
      loadTop () {
        this.$refs.loadmore.onTopLoaded();
        Indicator.open({
          text: '刷新中...',
          spinnerType: 'snake'
        });
        setTimeout(() => {
          this.refresh()
        }, 2000)
      },
      handleTopChange () {
      },
      loadBottom () {
        if (this.loadConf.loadBottomConf.count < 2) {
          this.loadConf.loadBottomConf.count++
          setTimeout(() => {
            this.list = this.list.concat([], [16, 17, 18, 19, 20])
            this.$refs.loadmore.onBottomLoaded()
          }, 500)
        } else {
          this.loadConf.loadBottomConf.isFinish = true
          this.$refs.loadmore.onBottomLoaded()
        }
      },
      refresh () {
        Toast({
          message: '刷新成功',
          iconClass: 'iconfont icon-caozuochenggong'
        });
        Indicator.close();
        this.loadConf.loadBottomConf.isFinish = false
        this.$refs.loadmore.onBottomLoaded();
        this.list = this.originalList
        this.loadConf.loadBottomConf.count = 1
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~assets/css/variable.styl"
  @import "~assets/css/transition.styl"
  .loadmore {
    position absolute
    z-index 100
    top 0
    left 0
    right 0
    bottom 0
    background-color $color-background
    .content {
      padding-top 50px
      .loadmore-content ul li {
        height 40px
        padding-left 5px
        line-height 40px
        border-bottom 1px solid $color-text-l
        font-size $font-size-medium-x
      }
      .no-content {
        text-align center
        height 40px
        line-height 40px
      }
    }
  }
</style>
