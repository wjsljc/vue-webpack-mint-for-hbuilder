<template>
  <transition name="slide">
    <div class="message-box">
      <mt-header class="header" title="MessageBox" :fixed="headerConf.fixed">
        <div slot="left">
          <mt-button icon="back" @click="back">返回</mt-button>
        </div>
      </mt-header>
      <div class="content">
        <mt-button type="default" @click="toast('alert')">alert</mt-button>
        <mt-button type="default" @click="toast('confirm')">confirm</mt-button>
        <mt-button type="default" @click="toast('prompt')">prompt</mt-button>
        <mt-button type="default" @click="toast('custom')">自定义</mt-button>
      </div>
    </div>
  </transition>
</template>

<script>
  import { MessageBox, Button } from 'mint-ui'
  import { headerMixin } from 'assets/js/mixins'

  export default {
    mixins: [headerMixin],
    data () {
      return {
        messageConf: {
          title: '自定义的弹出框',
          message: '自定义的弹出框内容',
          showConfirmButton: true,  // 是否显示确认按钮
          showCancelButton: true, // 是否显示取消按钮
          confirmButtonText: '确认按钮文本',  // 确认按钮文本
          confirmButtonHighlight: false,  // 确认文本是否加粗
          confirmButtonClass: 'confirm',  // 确认按钮类名
          cancelButtonText: '取消按钮文本', // 取消按钮文本
          cancelButtonHighlight: false, // 取消文本是否加粗
          cancelButtonClass: 'cancel',  // 取消按钮类名
          closeOnClickModal: true,  // 是否在点击遮罩时取消弹出框
          showInput: true, // 是否显示input
          inputType: 'text',  // input类型
          inputValue: '', // input默认值
          inputPlaceholder: 'input默认值'  // input占位符
        }
      }
    },
    methods: {
      toast (target) {
        switch (target) {
          case 'alert':
            MessageBox.alert('操作成功').then(action => {
              console.log(action)
            });
            break
          case 'confirm':
            MessageBox.confirm('确定执行此操作?', "温馨提示").then(action => {
              console.log(action)
            });
            break
          case 'prompt':
            MessageBox.prompt('请输入姓名').then(({value, action}) => {
              console.log(value)
              console.log(action)
            });
            break
          case 'custom':
            MessageBox(this.messageConf).then(({value, action}) => {
              console.log(this.messageConf.inputValue)
            });
            break
        }
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~assets/css/variable.styl"
  @import "~assets/css/transition.styl"
  .message-box {
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
