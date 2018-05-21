<template>
  <transition name="slide">
    <div class="popup">
      <mt-header class="header" title="Popup" :fixed="headerConf.fixed">
        <router-link to="/" slot="left">
          <mt-button icon="back">返回</mt-button>
        </router-link>
      </mt-header>
      <div class="content">
        <mt-popup
          v-model="popConf1.flag"
          :position="popConf1.position"
          :modal="popConf1.modal"
          class="top-pop"
        >
          <div class="top-pop-content">
            这里是上方弹出pop内容
          </div>
        </mt-popup>
        <mt-popup
          v-model="popConf2.flag"
          :position="popConf2.position"
          :modal="popConf2.modal"
          class="top-pop"
        >
          <div class="top-pop-content">
            这里是下方弹出pop内容
          </div>
        </mt-popup>
        <mt-popup
          v-model="popConf3.flag"
          :position="popConf3.position"
          :modal="popConf3.modal"
          class="top-pop"
        >
          <div class="top-pop-content">
            这里是左边弹出pop内容
          </div>
        </mt-popup>
        <mt-popup
          v-model="popConf4.flag"
          :position="popConf4.position"
          :modal="popConf4.modal"
          class="left-pop"
        >
          <div class="top-pop-content">
            这里是左边弹出pop内容
          </div>
        </mt-popup>
        <mt-popup
          v-model="popConf5.flag"
          :position="popConf5.position"
          :modal="popConf5.modal"
          class="top-pop"
        >
          <div class="top-pop-content">
            这里是右边弹出pop内容
          </div>
        </mt-popup>
        <mt-popup
          v-model="popConf6.flag"
          :position="popConf6.position"
          :modal="popConf6.modal"
          class="middle-pop"
        >
          <div class="middle-pop-content">
            这里是中部弹出pop内容这里是中部弹出pop内容这里是中部弹出pop内容
          </div>
        </mt-popup>
        <mt-popup
          v-model="popConf7.flag"
          :modal="popConf7.modal"
          :position="popConf7.position"
          class="right-pop"
          :class="{'active':popConf7.flag}"
        >
          <div class="right-pop-content">
            <mt-button class="right2-btn" type="default" @click="toast('right2')">关闭</mt-button>
          </div>
        </mt-popup>
        <mt-button type="default" @click="toast('top')">上方弹出</mt-button>
        <mt-button type="default" @click="toast('bottom')">下方弹出</mt-button>
        <mt-button type="default" @click="toast('left1')">左边弹出样式1</mt-button>
        <mt-button type="default" @click="toast('left2')">左边弹出样式2</mt-button>
        <mt-button type="default" @click="toast('right1')">右边弹出样式1</mt-button>
        <mt-button type="default" @click="toast('right2')">右边弹出样式2</mt-button>
        <mt-button type="default" @click="toast('middle')">中部弹出</mt-button>
      </div>
    </div>
  </transition>
</template>

<script>
  import { Header, Popup, Button } from 'mint-ui';

  export default {
    name: "Popup",
    data () {
      return {
        headerConf: {
          fixed: true
        },
        popConf1: {
          flag: false,  // 显隐标识
          position: 'top',  // 弹出位置
          modal: false, // 是否创建一个遮罩层
          closeOnClickModal: true,  // 是否可以点击遮罩层关闭
        },
        popConf2: {
          flag: false,  // 显隐标识
          position: 'bottom',  // 弹出位置
          modal: true, // 是否创建一个遮罩层
          closeOnClickModal: true,  // 是否可以点击遮罩层关闭
        },
        popConf3: {
          flag: false,  // 显隐标识
          position: 'left',  // 弹出位置
          modal: true, // 是否创建一个遮罩层
          closeOnClickModal: true,  // 是否可以点击遮罩层关闭
        },
        popConf4: {
          flag: false,  // 显隐标识
          position: 'left',  // 弹出位置
          modal: true, // 是否创建一个遮罩层
          closeOnClickModal: true,  // 是否可以点击遮罩层关闭
        },
        popConf5: {
          flag: false,  // 显隐标识
          position: 'right',  // 弹出位置
          modal: true, // 是否创建一个遮罩层
          closeOnClickModal: true,  // 是否可以点击遮罩层关闭
        },
        popConf6: {
          flag: false,  // 显隐标识
          position: 'middle',  // 弹出位置
          modal: true, // 是否创建一个遮罩层
          closeOnClickModal: true,  // 是否可以点击遮罩层关闭
        },
        popConf7: {
          flag: false,  // 显隐标识
          position: 'right',
          modal: false, // 是否创建一个遮罩层
          closeOnClickModal: true,  // 是否可以点击遮罩层关闭
        }
      }
    },
    methods: {
      toast (target) {
        switch (target) {
          case 'top':
            this.popConf1.flag = true
            setTimeout(() => {
              this.popConf1.flag = false
            }, 2000)
            break
          case 'bottom':
            this.popConf2.flag = true
            setTimeout(() => {
              this.popConf2.flag = false
            }, 2000)
            break
          case 'left1':
            this.popConf3.flag = !this.popConf3.flag
            break
          case 'left2':
            this.popConf4.flag = !this.popConf4.flag
            break
          case 'right2':
            this.popConf7.flag = !this.popConf7.flag
            break
          case 'right1':
            this.popConf5.flag = !this.popConf5.flag
            break
          case 'middle':
            this.popConf6.flag = !this.popConf6.flag
            break
        }
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~assets/css/variable.styl"
  @import "~assets/css/transition.styl"
  .popup {
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
      .top-pop {
        width 100%
        height 50px
        line-height 50px
        text-align center
        background-color rgba(0, 0, 0, .8)
        .top-pop-content {
          color white
        }
      }
      .left-pop {
        width 50px
        height 100%
        line-height 50px
        text-align center
        background-color rgba(0, 0, 0, .8)
        .top-pop-content {
          padding 0 10px
          text-align center
          color white
          transform rotate(90 dog)
        }
      }
      .middle-pop {
        position absolute
        left 50%
        top: 50%
        width 50%
        transform translate3d(-50%, -50% 0)
        padding 20px
        border-radius 10px
        letter-spacing 1px
      }
      .right-pop {
        position absolute
        z-index 0
        top 50%
        right 0
        left auto
        bottom auto
        width 100%
        height 100%
        background-color white
        transition all .5s
        &.active {
          transform translate3d(100%, -50% 0)
        }
        .right2-btn {
          position absolute
          left 50%
          top 50%
          margin 0
          transform translate3d(-50%, -50%, 0)
        }
      }
    }
  }
</style>
