<template>
  <transition name="slide">
    <div class="field">
      <mt-header class="header" title="Field" :fixed="headerConf.fixed">
        <div slot="left">
          <mt-button icon="back" @click="back">返回</mt-button>
        </div>
      </mt-header>
      <div class="content">
        <div class="row">
          <div class="title">基础使用</div>
          <mt-field label="用户名" placeholder="请输入用户名" v-model="fieldInfo.username"></mt-field>
          <mt-field label="邮箱" placeholder="请输入邮箱" type="email" v-model="fieldInfo.email"></mt-field>
          <mt-field label="密码" placeholder="请输入密码" type="password" v-model="fieldInfo.password"></mt-field>
          <mt-field label="手机号" placeholder="请输入手机号" type="tel" v-model="fieldInfo.phone"></mt-field>
          <mt-field label="网站" placeholder="请输入网址" type="url" v-model="fieldInfo.website"></mt-field>
          <mt-field label="数字" placeholder="请输入数字" type="number" v-model="fieldInfo.number"></mt-field>
          <mt-field label="生日" placeholder="请输入生日" type="date" v-model="fieldInfo.birthday"
                    :readonly="fieldInfo.readonly" :disableClear="fieldInfo.disableClear"></mt-field>
          <mt-field label="自我介绍" placeholder="自我介绍" type="textarea" rows="4" class="textarea"
                    v-model="fieldInfo.introduction"></mt-field>
        </div>
        <div class="row">
          <div class="title">设置校验状态</div>
          <mt-field label="邮箱" state="success" v-model="fieldInfo.email"></mt-field>
          <mt-field label="邮箱" state="error" v-model="fieldInfo.email"></mt-field>
          <mt-field label="邮箱" state="warning" v-model="fieldInfo.email"></mt-field>
        </div>
        <div class="row">
          <div class="title">自定义内容（例如添加验证码）</div>
          <mt-field label="验证码" v-model="fieldInfo.regVal">
            <mt-button type="primary" @click="getReg" :disabled="btnStauts">{{fieldInfo.captcha}}</mt-button>
          </mt-field>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
  import { Field, Button } from 'mint-ui'
  import { headerMixin } from 'assets/js/mixins'

  export default {
    mixins: [headerMixin],
    data () {
      return {
        fieldInfo: {
          username: '',
          email: '',
          password: '',
          phone: '',
          website: '',
          number: '',
          birthday: '1993-04-14',
          introduction: '',
          captcha: '获取验证码',
          regVal: '',
          readonly: true,
          disableClear: true,
          attr: { // 设置原生属性
            id: 1
          }
        },
        timer: null,
        btnStauts: false
      }
    },
    beforeDestroy () {
      clearInterval(this.timer)
      this.timer = null
    },
    methods: {
      getReg () {
        this.btnStauts = true
        this.fieldInfo.captcha = 5
        this.timer = setInterval(() => {
          if (this.fieldInfo.captcha > 0) {
            this.fieldInfo.captcha--
          } else {
            this.fieldInfo.captcha = '重新发送'
            clearInterval(this.timer)
            this.timer = null
            this.btnStauts = false
          }
        }, 1000)
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~assets/css/variable.styl"
  @import "~assets/css/transition.styl"
  .field {
    position absolute
    z-index 100
    top 0
    left 0
    right 0
    bottom 0
    background-color $color-background
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
        button {
          width 120px
        }
      }
    }
  }

</style>
<style lang="stylus" rel="stylesheet/stylus">
  .field {
    .content {
      .textarea {
        .mint-cell-wrapper {
          height 100px
          textarea {
            line-height 1
          }
        }
      }
    }
  }

</style>
