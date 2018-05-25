<template>
  <transition name="slide">
    <div class="login">
      <div class="bg">
        <p>hbuilder+vue+mint+webpack开发</p>
        <p>欢迎您</p>
      </div>
      <div class="login-form">
        <div class="userName">
          <i class="iconfont icon-yonghu"></i>
          <input type="text" placeholder="请输入账号" value="" v-model="userName"/>
        </div>
        <div class="password">
          <i class="iconfont icon-mima"></i>
          <input type="password" placeholder="请输入密码" value="" v-model="passWord"/>
        </div>
      </div>
      <div class="form-btn">
        <button @click="register">注册</button>
        <button @click="login">登陆</button>
      </div>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
  import { Button, Toast, MessageBox } from 'mint-ui'
  import { MyLocalStorage } from 'assets/js/utils'
  import { LOGIN_FLAG, AD_FLAG } from 'assets/js/storageConst'

  export default {
    data () {
      return {
        userName: 'admin',
        passWord: 'admin'
      }
    },
    methods: {
      register () {
        MessageBox.alert('注册功能暂未开通').then(action => {
          console.log(action)
        });
      },
      login () {
        if (this.userName === 'admin' && this.passWord === 'admin') {
          MyLocalStorage.Cache.set(LOGIN_FLAG, true, 9999999) // 在线默认时常无线
          MyLocalStorage.Cache.set(AD_FLAG, true, 60) // 广告设置一分钟
          this.$router.replace({
            name: 'index'
          })
        } else {
          Toast({
            message: '账号为admin，密码为admin',
            position: 'bottom',
            duration: 3000
          });
        }
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~assets/css/variable.styl"
  @import "~assets/css/transition.styl"
  .login
    position fixed
    z-index 100
    top 0
    left 0
    right 0
    bottom 0
    background-color $color-background-w
    input:-webkit-autofill
      -webkit-text-fill-color: $color-text !important
    .bg
      color $color-theme
      letter-spacing 2px
      font-weight bold
      text-align center
      font-style italic
      p
        line-height 30px
        color $color-text
    .login-form, .bg
      position absolute
      width 80%
      left 50%
    .bg
      top 15%
      transform translate3d(-50%, 0, 0)
    .login-form
      top 50%
      transform translate3d(-50%, -50%, 0)
      .userName, .password
        display flex
        align-items center
        height 40px
        line-height 40px
        margin-bottom 10px
        background-color $color-background
        border-bottom: 1px solid $color-theme
        i
          flex 1
          font-size $font-size-large
          text-align center
          color $color-text
        input
          flex 5
          height 30px
          outline 0
          padding-left 5px
          background-color $color-background
          color $color-text!important
          outline: none
          -webkit-appearance: none
          border-radius: 0
    .form-btn
      display flex
      position absolute
      width 80%
      left 50%
      top 70%
      transform translate3d(-50%, 0, 0)
      button
        margin-top 20px
        flex 1
        height 40px
        line-height 38px
        background-color $color-background
        border 1px solid $color-text
        color $color-text
        letter-spacing 2px
        font-size .8em
        &:nth-of-type(1)
          margin-right 20px

    input:-webkit-autofill
      -webkit-box-shadow: 0 0 0px 1000px $color-background inset;
      -webkit-text-fill-color white

  .slide-enter-active, .slide-leave-active
    transition: all .3s

  .slide-enter, .slide-leave-to
    transform: translate3d(100%, 0, 0)
</style>
