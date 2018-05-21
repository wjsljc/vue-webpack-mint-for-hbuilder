<template>
  <transition name="slide">
    <div class="cell">
      <mt-header class="header" title="Cell" :fixed="headerConf.fixed">
        <router-link to="/" slot="left">
          <mt-button icon="back">返回</mt-button>
        </router-link>
      </mt-header>
      <div class="content">
        <mt-cell title="标题文字"></mt-cell>
        <mt-cell title="标题文字" value="说明文字"></mt-cell>
        <mt-cell
          title="标题文字"
          to="/ui/toast"
          is-link
          value="带链接">
        </mt-cell>
        <mt-cell title="标题文字" icon="more" value="带 icon more"></mt-cell>
        <mt-cell title="标题文字" icon="back" value="带 icon back"></mt-cell>
        <mt-cell title="标题文字">
          <span>icon 是图片</span>
          <img slot="icon" src="../../../assets/logo.png" width="24" height="24">
        </mt-cell>
        <mt-cell value="自定义">
          <div slot="title">自定义标题</div>
        </mt-cell>
        <mt-cell title="标题文字" is-link>
          <span style="color: green">这里是元素</span>
        </mt-cell>
        <mt-cell title="标题" label="描述信息" is-link></mt-cell>
        <mt-cell title="标题文字">
          <mt-button type="primary" @click="toast">按钮</mt-button>
        </mt-cell>
        <mt-cell-swipe
          :title="cellSwipeInfo.info.title"
          :right="getBtn(cellSwipeInfo.info)"
        >
        </mt-cell-swipe>
        <mt-cell-swipe
          title="右滑删除"
          :left="getBtn(cellSwipeInfo.info)"
        >
        </mt-cell-swipe>
        <mt-cell-swipe
          title="左滑删除"
          :right="getBtn(cellSwipeInfo.info)"
        >
        </mt-cell-swipe>
      </div>
    </div>
  </transition>
</template>

<script>
  import { Header, Cell, CellSwipe, Button, Toast, MessageBox } from 'mint-ui';

  export default {
    data () {
      return {
        headerConf: {
          fixed: true
        },
        cellSwipeInfo: {
          info: {
            title: '左滑删除',
            id: (Math.random() * 10 + '').slice(0, 1)
          }
        }
      }
    },
    methods: {
      toast () {
        Toast({
          message: '你点击了我',
          position: 'bottom',
          duration: 3000
        });
      },
      getBtn (item) {
        return [
          {
            content: 'Delete',
            style: {
              background: 'red',
              color: '#fff'
            },
            handler: () => {
              this.handler(item.id)
            }
          }
        ]
      },
      handler (val) {
        MessageBox.confirm('确定执行删除?', "温馨提示").then(action => {
          Toast({
            message: `你删除了${val}`,
            position: 'bottom',
            duration: 3000
          });
        });
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~assets/css/variable.styl"
  @import "~assets/css/transition.styl"
  .cell {
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
