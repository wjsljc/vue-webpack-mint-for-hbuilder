<template>
  <transition name="slide">
    <div class="actionSheet">
      <mt-header class="header" title="ActionSheet" :fixed="headerConf.fixed">
        <router-link to="/" slot="left">
          <mt-button icon="back">返回</mt-button>
        </router-link>
      </mt-header>
      <div class="content">
        <mt-actionsheet
          :actions="actionsheetConf1.arr"
          :cancelText="actionsheetConf1.cancelText"
          :closeOnClickModal="actionsheetConf1.closeOnClickModal"
          v-model="actionsheetConf1.flag"
        >
        </mt-actionsheet>
        <mt-actionsheet
          :actions="actionsheetConf2.arr"
          v-model="actionsheetConf2.flag"
          :cancelText="actionsheetConf2.cancelText"
          :closeOnClickModal="actionsheetConf2.closeOnClickModal"
        >
        </mt-actionsheet>
        <mt-button type="default" @click="toast('default')">带取消按钮</mt-button>
        <mt-button type="default" @click="toast('custom')">不带取消按钮</mt-button>
      </div>
    </div>
  </transition>
</template>

<script>
  import { Header, Actionsheet, Button } from 'mint-ui';

  export default {
    name: "Indicator",
    data () {
      return {
        headerConf: {
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
        actionsheetConf2: {
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
          cancelText: '',
          closeOnClickModal: true, // 是否可以点击遮罩取消
        }
      }
    },
    methods: {
      toast (target) {
        switch (target) {
          case 'default':
            this.actionsheetConf1.flag = !this.actionsheetConf1.flag
            break
          case 'custom':
            this.actionsheetConf2.flag = !this.actionsheetConf2.flag
            break
        }
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
  .actionSheet {
    position absolute
    z-index 100
    top 0
    left 0
    right 0
    bottom 0
    background-color $color-background
    .content {
      padding-top 50px
      button.mint-button--default {
        display block
        width 60%
        height 40px
        margin 20px auto
        box-shadow 0 0 2px $color-shadow
      }
    }
  }
</style>
