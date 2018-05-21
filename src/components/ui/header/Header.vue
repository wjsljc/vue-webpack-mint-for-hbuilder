<template>
  <transition name="slide">
    <div class="header">
      <mt-header class="header" title="固定在顶部" :fixed="headerConf1.fixed">
        <router-link to="/" slot="left">
          <mt-button icon="back">返回</mt-button>
        </router-link>
      </mt-header>
      <div class="content">
        <div class="title">Header</div>
        <div class="row">
          <mt-header title="标题过长会隐藏后面的内容啊哈哈哈哈">
            <router-link to="/" slot="left">
              <mt-button icon="back">返回</mt-button>
            </router-link>
            <mt-button icon="more" slot="right" @click="handleMenu"></mt-button>
          </mt-header>
        </div>
        <div class="row">
          <mt-header title="多个按钮">
            <div slot="left" class="back">
              <router-link to="/">
                <mt-button icon="back">返回</mt-button>
              </router-link>
              <mt-button @click="handleClose">按钮左</mt-button>
            </div>
            <mt-button slot="right" @click="handleClose">按钮右</mt-button>
          </mt-header>
        </div>
        <mt-actionsheet
          :actions="actionsheetConf1.arr"
          :cancelText="actionsheetConf1.cancelText"
          :closeOnClickModal="actionsheetConf1.closeOnClickModal"
          v-model="actionsheetConf1.flag"
        >
        </mt-actionsheet>
      </div>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
  import { Header, Actionsheet } from 'mint-ui';

  export default {
    data () {
      return {
        headerConf1: {
          fixed: true
        },
        actionsheetConf1: {
          flag: false,  // 显隐控制
          arr: [  // 内容数组
            {
              name: '拍照',
              method: this.picture
            },
            {
              name: '从相册中选取',
              method: this.album
            }
          ],
          cancelText: '取消按钮', // 取消按钮
          closeOnClickModal: false, // 是否可以点击遮罩取消
        },
      }
    },
    methods: {
      handleClose (index) {
        console.log(index)
        alert('你点击了自定义按钮')
      },
      handleMenu () {
        this.actionsheetConf1.flag = !this.actionsheetConf1.flag
      },
      picture () {
        alert('你点击了拍照')
      },
      album () {
        alert('你点击了相册')
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~assets/css/variable.styl"
  @import "~assets/css/transition.styl"
  .header {
    position absolute
    z-index 100
    top 0
    left 0
    right 0
    bottom 0
    background-color $color-background
    .content {
      padding-top 50px
      .title {
        height 50px
        line-height 50px
        text-align center
        font-size $font-size-large-x
      }
      .row {
        margin-bottom 20px
        .back a {
          color white
        }
      }
    }
  }
</style>
