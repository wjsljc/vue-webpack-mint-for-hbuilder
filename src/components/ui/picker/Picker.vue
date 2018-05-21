<template>
  <transition name="slide">
    <div class="picker-wrap">
      <mt-header class="header" title="Picker" :fixed="headerConf.fixed">
        <router-link to="/" slot="left">
          <mt-button icon="back">返回</mt-button>
        </router-link>
      </mt-header>
      <div class="content" ref="content">
        <div class="row">
          <div class="title">普通示例</div>
          <mt-picker :slots="pickerConf1.slot"
                     :visibleItemCount="pickerConf1.visibleItemCount"
                     :itemHeight="pickerConf1.itemHeight"
                     @change="onValuesChange"
          ></mt-picker>
        </div>
        <div class="row">
          <div class="title">两级</div>
          <mt-picker :slots="pickerConf2.slot" @change="onValuesChange"></mt-picker>
        </div>
        <div class="row">
          <div class="title">多级</div>
          <mt-picker :slots="pickerConf3.slot" @change="onValuesChange"></mt-picker>
        </div>
        <div class="row">
          <div class="title">多级联动</div>
          <mt-picker :slots="pickerConf4.slot" @change="linkage"></mt-picker>
          <div class="result">选择的是:{{pickerConf4.value}}</div>
        </div>
        <div class="row">
          <div class="title">滚动展示</div>
          <mt-picker class="dynamic" :slots="pickerConf5.slot" ref="dynamic"></mt-picker>
        </div>
        <div class="row">
          <mt-button class="pickerBtn" type="default" @click="pickerBtn">点击弹出</mt-button>
        </div>
        <div class="from-bottom" ref="bottomWrap">
          <div v-show="pickerConf6.flag">
            <mt-button class="close-pop" type="danger" @click="closePop">关闭</mt-button>
            <mt-picker :slots="pickerConf6.slot" @change="linkage"></mt-picker>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
  import { Header, Button, Picker } from 'mint-ui';

  export default {
    data () {
      return {
        headerConf: {
          fixed: true
        },
        pickerConf1: {
          slot: [
            {
              flex: 1,
              values: ['2015-01', '2015-02', '2015-03', '2015-04', '2015-05', '2015-06'],
              className: 'slot1',
              textAlign: 'center'
            }
          ],
          visibleItemCount: 3,  // 选项可见个数
          showToolbar: false, // 是否在组件顶部显示一个 toolbar，内容自定义(组件内部写该插槽)
          itemHeight: 50, // 选项高度
        },
        pickerConf2: {
          slot: [
            {
              flex: 1,
              values: ['2015-01', '2015-02', '2015-03', '2015-04', '2015-05', '2015-06'],
              className: 'slot1',
              textAlign: 'right'
            }, {
              divider: true,
              content: '-',
              className: 'slot2'
            }, {
              flex: 1,
              values: ['2015-01', '2015-02', '2015-03', '2015-04', '2015-05', '2015-06'],
              className: 'slot3',
              textAlign: 'left'
            }
          ],
        },
        pickerConf3: {
          slot: [
            {
              flex: 1,
              values: ['2015', '2016', '2017', '2018', '2019', '2020'],
              className: 'slot1',
              textAlign: 'center'
            }, {
              divider: true,
              content: '-',
              className: 'slot2'
            }, {
              flex: 1,
              values: ['2015', '2016', '2017', '2018', '2019', '2020'],
              className: 'slot3',
              textAlign: 'center'
            },
            {
              divider: true,
              content: '-',
              className: 'slot4'
            }, {
              flex: 1,
              values: ['2015', '2016', '2017', '2018', '2019', '2020'],
              className: 'slot5',
              textAlign: 'center'
            }
          ]
        },
        pickerConf4: {
          value: '四川省成都市区',
          slot: [
            {
              flex: 1,
              values: ['四川省', '北京市'],
              className: 'slot1',
              textAlign: 'center'
            },
            {
              divider: true,
              content: '-',
              className: 'slot2'
            },
            {
              flex: 1,
              values: ['成都', '雅安'],
              className: 'slot3',
              textAlign: 'center'
            },
            {
              divider: true,
              content: '-',
              className: 'slot4'
            },
            {
              flex: 1,
              values: ['市区', '双流'],
              className: 'slot5',
              textAlign: 'center'
            }
          ]
        },
        pickerConf5: {
          slot: [
            {
              flex: 1,
              values: ['1', '2', '3', '4', '5', '6'],
              className: 'slot1',
              textAlign: 'center'
            }
          ],
          timer: null
        },
        pickerConf6: {
          flag: false,
          value: '四川省成都市区',
          slot: [
            {
              flex: 1,
              values: ['四川省', '北京市'],
              className: 'slot1',
              textAlign: 'center'
            },
            {
              divider: true,
              content: '-',
              className: 'slot2'
            },
            {
              flex: 1,
              values: ['成都', '雅安'],
              className: 'slot3',
              textAlign: 'center'
            },
            {
              divider: true,
              content: '-',
              className: 'slot4'
            },
            {
              flex: 1,
              values: ['市区', '双流'],
              className: 'slot5',
              textAlign: 'center'
            }
          ]
        },
      }
    },
    mounted () {
      let dynamicLen = this.pickerConf5.slot[0].values.length
      let jumpLen = 36
      let initPosition = 72
      let currentPositon = 72
      let count = 0
      this.pickerConf5.timer = setInterval(() => {
        this.$refs.dynamic.$children[0].$refs.wrapper.style.transform = `translate(0px, ${currentPositon}px) translateZ(0px)`
        currentPositon -= jumpLen
        count++
        if (count === dynamicLen) {
          currentPositon = initPosition
          count = 0
        }
      }, 1000)
    },
    beforeDestroy () {
      clearInterval(this.pickerConf5.timer)
      this.pickerConf5.timer = null
    },
    methods: {
      onValuesChange (picker, values) {
        console.log(picker)
        console.log(values)
      },
      linkage (picker, values) {
        console.log(picker)
        console.log(values)
        switch (values[0]) {
          case "四川省":
            picker.setSlotValues(1, ['成都', '雅安'])
            break
          case "北京市":
            picker.setSlotValues(1, ['市辖区'])
            break
        }
        switch (values[1]) {
          case "成都":
            picker.setSlotValues(2, ['市区', '双流'])
            break
          case "雅安":
            picker.setSlotValues(2, ['市区', '名山'])
            break
          case "市辖区":
            picker.setSlotValues(2, ['市区'])
            break
        }
        this.pickerConf4.value = values.join('')
      },
      pickerBtn () {
        console.log(this.$refs.bottomWrap.style)
        this.pickerConf6.flag = true
        this.$refs.bottomWrap.style.transform = `translate(0px, -200px) translateZ(0px)`
      },
      closePop () {
        this.pickerConf6.flag = false
        this.$refs.bottomWrap.style.transform = `translate(0px, 0px) translateZ(0px)`
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~assets/css/variable.styl"
  @import "~assets/css/transition.styl"
  @import "~assets/css/flex.styl"
  .picker-wrap {
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
        position relative
        width 90%
        margin 10px auto
        .title {
          height 30px
          line-height 30px
          padding 5px 10px
          margin-top 20px
          font-weight bold
          font-size $font-size-medium-x
          letter-spacing 1px
        }
        .result {
          height 40px
          line-height 40px
          padding 5px 0
          text-align center
        }
        .picker {
          background-color white
        }
        .pickerBtn {
          display block
          width 80%
          height 40px
          line-height 40px
          margin 50px auto
        }
      }
      .from-bottom {
        z-index 999
        position fixed
        top 100%
        left 0
        width 100%
        height 200px
        background-color white
        border-top 1px solid $color-shadow
        transition all .5s
        .close-pop {
          z-index 1000
          position absolute
          right 10px
          top 10px
          width 100px
          height 30px
        }
      }
    }
  }
</style>
