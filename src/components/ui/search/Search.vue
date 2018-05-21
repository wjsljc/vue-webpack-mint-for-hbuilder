<template>
  <transition name="slide">
    <div class="search" ref="search">
      <mt-header :class="isScroll ? 'header2' : 'header1'" title="Search" :fixed="headerConf.fixed">
        <router-link to="/" slot="left">
          <mt-button icon="back">返回</mt-button>
        </router-link>
      </mt-header>
      <div class="content">
        <div class="row">
          <div class="title">普通实例</div>
          <mt-search v-model="searchConf1.value" :autofocus="searchConf1.autofocus" ref="search1"></mt-search>
        </div>
        <div class="row">
          <div class="title">设置显示文字</div>
          <mt-search
            v-model="searchConf2.value"
            :cancel-text="searchConf2.cancelText"
            :placeholder="searchConf2.placeholder"
          >
          </mt-search>
        </div>
        <div class="row">
          <div class="title">带搜索结果</div>
          <mt-search :class="searchConf3.value ? 'search-result' : ''"
                     v-model="searchConf3.value"
                     :result.sync="getResult"
          ></mt-search>
        </div>
        <div class="row">
          <div class="title">自定义搜索结果</div>
          <mt-search :class="searchConf4.value ? 'search-result' : ''"
                     v-model="searchConf4.value"
          >
            <mt-cell
              v-for="item in searchConf4.result"
              :title="item.title"
              :value="item.value">
            </mt-cell>
          </mt-search>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
  import { Header, Search } from 'mint-ui';

  export default {
    name: "Indicator",
    data () {
      return {
        headerConf: {
          fixed: true
        },
        isScroll: false,  // 是否有滚动条
        searchConf1: {
          value: '',
          autofocus: true
        },
        searchConf2: {
          value: '',
          cancelText: '取消',
          placeholder: '请输入搜索内容搜索'
        },
        searchConf3: {
          value: ''
        },
        searchConf4: {
          value: '',
          result: [
            {
              title: '搜索结果',
              value: '1'
            },
            {
              title: '搜索结果',
              value: '2'
            },
            {
              title: '搜索结果',
              value: '3'
            },
            {
              title: '搜索结果',
              value: '4'
            }
          ]
        }
      }
    },
    computed: {
      getResult () {
        let res = []
        for (let i = 0; i < 5; i++) {
          res.push(`${this.searchConf3.value}-${i + 1}`)
        }
        return res
      }
    },
    mounted () {
      window.addEventListener('scroll', this.handleScroll)
      this.$refs.search.style.scrollTop = 100
      console.log(this.$refs.search.scrollHeight)
    },
    methods: {
      handleScroll () {
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
        console.log(scrollTop)
        if (scrollTop > 0) {
          this.isScroll = true
        } else {
          this.isScroll = false
        }
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~assets/css/variable.styl"
  @import "~assets/css/transition.styl"
  .search {
    position absolute
    z-index 100
    top 0
    left 0
    right 0
    bottom 0
    background-color $color-background
    .header1 {
      position absolute
    }
    .header2 {
      position fixed
    }
    .content {
      padding-top 50px
      padding-bottom 20px
      .row {
        margin-bottom 20px
        .title {
          height 48px
          line-height 48px
          text-align left
          padding-left 10px
          font-weight bold
        }
        .search-result {
          height 200px
        }
      }
      .mint-search {
        position relative
        height auto
      }
    }
  }
</style>
