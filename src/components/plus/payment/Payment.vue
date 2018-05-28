<template>
  <transition name="slide">
    <div class="payment">
      <mt-header class="header" title="Payment" :fixed="headerConf.fixed">
        <div slot="left">
          <mt-button icon="back" @click="back">返回</mt-button>
        </div>
      </mt-header>
      <div class="content">
        <div class="row">
          <div class="title">
            支付模块需要配合后台接口测试，本例子只是验证支付可能性。测试需修改相应接口参数为自己公司需要参数即可。
          </div>
        </div>
        <div class="row">
          <mt-button type="danger" @click="pay('ALIPAY')">支付宝支付</mt-button>
          <mt-button type="danger" @click="pay('WXPAY')">微信支付</mt-button>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
  import { Button, Toast } from 'mint-ui'
  import { headerMixin } from 'assets/js/mixins'
  import { payment, login, patientList } from 'api/index'


  export default {
    mixins: [headerMixin],
    data () {
      return {
        pays: { // 支付信息
          alipay: null,
          wxpay: null,
          url: '' // 支付地址
        },
        paymentInfo: { // 请根据自己的后台请求参数配置
          skuIds: '8',
          desc: '签约服务',
          userId: 'b46fb3dc-27d2-4d6e-a215-c26bf1d65164',
          paymentType: '', // 支付类型
          urlMedical: '',
          sellerId: '' // 商户id
        },
        loginInfo: {
          mobile: 15680869152,
          loginPassword: 'abc123'
        },
        patientInfo: {
          userName: '',
          userId: 'b46fb3dc-27d2-4d6e-a215-c26bf1d65164',
          pageNumber: 1,
          pageSize: 1
        }
      }
    },
    created () {
      this.getChannels() // 获取支付通道
    },
    methods: {
      getChannels () {
        let self = this
        plus.payment.getChannels(function (channels) {
          for (let i in channels) {
            let channel = channels[i]
            if (channel.id == 'qhpay' || channel.id == 'qihoo') { // 过滤掉不支持的支付通道：暂不支持360相关支付
              continue;
            }
            self.pays[channel.id] = channel;
            self.checkServices(channel);
            console.log(JSON.stringify(channels))
          }
        }, function (e) {
          console.log('获取支付通道失败：' + e.message)
        });
      },
      checkServices (pc) {
        console.log("pc " + JSON.stringify(pc))
        if (!pc.serviceReady) {
          console.log('进入检测')
          let txt = null
          switch (pc.id) {
            case 'alipay':
              txt = '检测到系统未安装“支付宝快捷支付服务”，无法完成支付操作，是否立即安装？';
              break;
            default:
              txt = '系统未安装“' + pc.description + '”服务，无法完成支付，是否立即安装？';
              break;
          }
          plus.nativeUI.confirm(txt, function (e) {
            if (e.index == 0) {
              pc.installService()
            }
          }, pc.description)
        }
      },
      pay (payWay) {
        let self = this
        if (payWay === 'WXPAY') {
          this.pays.url = '' // 填写微信的数据请求访问地址
          this.paymentInfo.sellerId = '1486467842'
          this.paymentInfo.paymentType = 'WXPAY'
        } else {
          this.pays.url = '' // 填写支付宝的数据请求地址
          this.paymentInfo.sellerId = 'lhcw@lhinf.com'
          this.paymentInfo.paymentType = 'ALIPAY'
        }
        payment(this.pays.url, this.paymentInfo).then((res) => {
          console.log('支付成功 ' + JSON.stringify(res))
          let msg = res.msg
          console.log("msg " + JSON.stringify(msg))
          plus.payment.request(self.pays[payWay.toLowerCase()], msg, function (result) {
            plus.nativeUI.alert("支付成功！", function () {

            })
          }, function (error) {
            console.log("error " + JSON.stringify(error))
            plus.nativeUI.alert("支付失败!", function () {

            });
          });
        }).catch((err) => {
          console.log('err ' + JSON.stringify(err))
        })
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~assets/css/variable.styl"
  @import "~assets/css/transition.styl"
  .payment {
    position absolute
    z-index 100
    top 0
    left 0
    right 0
    bottom 0
    background-color $color-background
    .content {
      padding-top 50px
      .row {
        margin 20px 0
        text-align center
        .title {
          height 50px
          line-height 20px
        }
      }
    }
  }
</style>
