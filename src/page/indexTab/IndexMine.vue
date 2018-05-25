<template>
  <div class="index-mine">
    <div class="title">说明与AQ</div>
    <div class="content">
      <h3>概况</h3>
      <p>
        此APP设计的最初目的是为了解决使用vue+webpack自动化构建并实时同步手机热更新调试而诞生。截止目前，Dcloud官方没有提供一套完整的vue+webpack+hbuilder实时开发调试的文章，只是零零散散有人去构建一些自己的项目，并不能很好地教会或者引导大量开发者使用该开发模式进行开发。本APP以构建流程为主，demo为辅，印证了vue+webpack+hbuilder实时调试以及打包的可行性，为开发者提供多开发种选择。
      </p>
      <h3>Q1：该APP的主要技术架构</h3>
      <p>vue + webpack + mint-ui + hbuilder</p>
      <h3>Q2：调试与使用方式？</h3>
      <p>
        保持手机与电脑同一网段，服务起起后，将hbuilder起始页设置为本地服务器:端口号/index.html如
        192.168.11.102:8080/index.html，同步手机。也可编译打包之后直接在根目录下面配置manifest.json，设置起始页面为index.html，同步手机。不同的webpack配置入口可能会导致入口文件有所不同，不过差异不大。
      </p>
      <h3>Q3：该APP有什么特色？</h3>
      <p>
        该项目除去说明与AQ主要分为两个板块，UI和PLUS。UI是对mint-ui官网demo的仿造与实际实践，100%迁移以及额外的扩展，更多的自定义demo展示与结合APP的运用，更加符合一款APP的基础需求。PLUS主要是对5+SDK的的集成运用，板块不是很多，主要对APP常用的几个功能进行了展示，PLUS的运用大同小异，PLUS的展示主要是验证5+在vue中的使用。此外，项目在页面中间右边位置增加了vconsole按钮，方便用户在终端进行log调试。</p>
      <p>
        除了UI和PLUS之外，本APP还刻意围绕APP的常用功能进行了制作，比如索引页面、登陆与登出，登陆超时、广告弹出等等功能的基础实现原理，使得APP更加“高仿”。此外，对路由跳转的拦截、组件的封装、对公用代码mixin的使用等也体现了作者对APP的态度
      </p>
      <h3>Q4：webpack如何构建？</h3>
      <p>此项目中的webpack是仿造vue-cli的结构进行构建的，有自定义的修改以及配置项。单页面的构建方式可以参照代码，多页面的后续可能会考虑再出一款多页面的APP。不是很精通webpack的同学建议先去了解一下。</p>
      <h3>Q5：为什么不使用webpack4？</h3>
      <p>
        本产品webpack使用了3.6，主要原因是保持与当时的vue-cli生成的webpack版本一致，减少使用vue-cli开发者的配置修改，另外，并非不能使用webpack4进行开发，目前webpack4官方的loader与插件已经基本稳定，只有个别个人维护的loader与插件可能还无法使用，完全可以使用webpack4代替。
      </p>
      <h3>Q6：多页面如何调试？</h3>
      <p>
        此APP采用了单页面路由跳转代替多页面使用webview进行跳转的方式，并不意味着不能使用多页面进行开发，相反，现在很多用JQ或者js开发APP多数还是多页面应用。多页面调试需要webpack配置多入口文件，页面跳转推荐使用webview，有兴趣的朋友可以尝试。</p>
      <h3>Q7：为什么不使用mui？</h3>
      <p>
        本示例使用了mint-ui。mui对vue开发来说并不是最优的选择，因为它主要还是以dom的形式存在。但并不影响您在开发过程中使用mui。
      </p>
      <h3>Q8：程序员也会饿肚子？</h3>
      <p>程序员也是人，如果该项目给您带来了工作上的参考或者启发，亦或者期待更多其他项目的诞生和该项目的继续维护，支持作者原创扫一扫或点击识别下方的二维码，为作者打赏1.0元吧！</p>
      <h2>点击或扫一扫下方这个二维码！</h2>
      <img src="../../../static/QR/zhifubao.png" alt="支持作者下一个原创" @click="pay('zhifubao')"/>
      <h2>扫一扫下方这个二维码！</h2>
      <img src="../../../static/QR/weixin.png" alt="支持作者下一个原创" @click="pay('weixin')"/>
      <div class="row">
        <mt-button type="danger" @click="loginOut">退出登陆</mt-button>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import { Button } from 'mint-ui'
  import { MyLocalStorage } from 'assets/js/utils'
  import { LOGIN_FLAG, AD_FLAG, SLIDER_FLAG, INDEX_ACTIVETAB } from 'assets/js/storageConst'

  export default {
    data () {
      return {
        payWay: 'zhifubao'
      }
    },
    methods: {
      pay (way) {
        console.log("os " + JSON.stringify(plus.os))
        let self = this
        if (way === 'weixin') {
          self.payWay = 'weixin'
        } else {
          self.payWay = 'zhifubao'
        }
        if (this.payWay === 'zhifubao') {
          plus.runtime.openURL("HTTPS://QR.ALIPAY.COM/FKX03664BYOZSMEB9BOB31", function (err) {
            console.log('打开失败 ' + JSON.stringify(err))
            window.open("HTTPS://QR.ALIPAY.COM/FKX03664BYOZSMEB9BOB31")
          })
        } else {
          console.log('进入微信')
          plus.runtime.launchApplication({
            action: 'weixin://dl/'
          }, function () {
            console.log('错误')
          })
        }
      },
      loginOut () {
        MyLocalStorage.Cache.remove(AD_FLAG)
        MyLocalStorage.Cache.remove(LOGIN_FLAG)
        localStorage.setItem(INDEX_ACTIVETAB, 'UI')
        this.$router.push({
          name: 'login'
        })
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~assets/css/variable.styl"
  .index-mine {
    .title {
      height 50px
      line-height 50px
      text-align center
      font-size $font-size-large-x
    }
    .content {
      width 95%
      margin 0 auto
      .row {
        line-height 30px
        margin-bottom 20px
        button {
          display block
          width 80%
          margin 0 auto
        }
      }
      img {
        width 100%
        margin 10px 0
      }
      h2 {
        text-align center
        font-weight bold
      }
      h3 {
        line-height 30px
        font-size $font-size-large
        font-weight bold
      }
      p {
        line-height 24px
        text-indent 2em
        word-break break-all
      }
    }
  }
</style>
