<template>
  <transition name="slide">
    <div class="datetime-picker">
      <mt-header class="header" title="DatetimePicker" :fixed="headerConf.fixed">
        <div slot="left">
          <mt-button icon="back" @click="back">返回</mt-button>
        </div>
      </mt-header>
      <div class="content">
        <mt-datetime-picker
          ref="picker1"
          type="date"
          @confirm="confirm"
          v-model="pickerConf1.value"
        >
        </mt-datetime-picker>
        <mt-datetime-picker
          ref="picker2"
          type="datetime"
          @confirm="confirm"
          v-model="pickerConf2.value"
        >
        </mt-datetime-picker>
        <mt-datetime-picker
          ref="picker3"
          type="time"
          @confirm="confirm"
          v-model="pickerConf3.value"
        >
        </mt-datetime-picker>
        <mt-datetime-picker
          ref="picker4"
          type="time"
          @confirm="confirm"
          v-model="pickerConf4.value"
          :cancelText="pickerConf4.cancelText"
          :confirmText="pickerConf4.confirmText"
        >
        </mt-datetime-picker>
        <mt-datetime-picker
          ref="picker5"
          type="datetime"
          :value="pickerConf5.value"
          @confirm="confirm"
          v-model="pickerConf5.value"
        >
        </mt-datetime-picker>
        <mt-datetime-picker
          ref="picker6"
          type="datetime"
          @confirm="confirm"
          :startDate="pickerConf6.startDate"
          :endDate="pickerConf6.endDate"
          v-model="pickerConf6.value"
        >
        </mt-datetime-picker>
        <mt-datetime-picker
          ref="picker7"
          type="time"
          @confirm="confirm"
          :startDate="pickerConf7.startDate"
          :endDate="pickerConf7.endDate"
          :startHour="pickerConf7.startHour"
          :endHour="pickerConf7.endHour"
          v-model="pickerConf7.value"
        >
        </mt-datetime-picker>
        <mt-datetime-picker
          ref="picker8"
          type="datetime"
          @confirm="confirm"
          v-model="pickerConf8.value"
          year-format="{value} 年"
          month-format="{value} 月"
          date-format="{value} 日"
          hour-format="{value} 时"
          minute-format="{value} 分"
        >
        </mt-datetime-picker>
        <mt-button type="default" @click="picker('data')">年月日</mt-button>
        <mt-button type="default" @click="picker('datatime')">年月日时分</mt-button>
        <mt-button type="default" @click="picker('time')">时分</mt-button>
        <mt-button type="default" @click="picker('text')">自定义按钮文字</mt-button>
        <mt-button type="default" @click="picker('init')">设置起始时间</mt-button>
        <mt-button type="default" @click="picker('range-1')">设置范围(年月)</mt-button>
        <mt-button type="default" @click="picker('range-2')">设置范围(时)</mt-button>
        <mt-button type="default" @click="picker('custom')">自定义模板</mt-button>
        <div class="show-box">{{value}}</div>
      </div>
    </div>
  </transition>
</template>

<script>
  import { DatetimePicker, Button } from 'mint-ui'
  import { headerMixin } from 'assets/js/mixins'

  export default {
    mixins: [headerMixin],
    data () {
      return {
        pickerConf1: {
          value: ''
        },
        pickerConf2: {
          value: ''
        },
        pickerConf3: {
          value: ''
        },
        pickerConf4: {
          value: '',
          cancelText: '消失',
          confirmText: '就决定是它了'
        },
        pickerConf5: {
          value: '2018-5-14 15:14'
        },
        pickerConf6: {
          startDate: new Date(2015, 5, 1, 14, 1, 1),
          endDate: new Date(),
        },
        pickerConf7: {
          startHour: 5,
          endHour: 10
        },
        pickerConf8: {
          value: ''
        },
        value: ''
      }
    },
    methods: {
      picker (target) {
        switch (target) {
          case 'data':
            this.$refs.picker1.open();
            break
          case 'datatime':
            this.$refs.picker2.open();
            break
          case 'time':
            this.$refs.picker3.open();
            break
          case 'text':
            this.$refs.picker4.open();
            break
          case 'init':
            this.$refs.picker5.open();
            break
          case 'range-1':
            this.$refs.picker6.open();
            break
          case 'range-2':
            this.$refs.picker7.open();
            break
          case 'custom':
            this.$refs.picker8.open();
            break
        }
      },
      confirm (val) {
        let d = new Date(val)
        console.log(d.getFullYear())
        this.value = val
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~assets/css/variable.styl"
  @import "~assets/css/transition.styl"
  .datetime-picker {
    position absolute
    z-index 2
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
        box-shadow 0 0 2px #b8bbbf
      }
      .show-box {
        height 50px
        line-height 50px
        margin 20px auto
        text-align center
      }
    }
  }
</style>
<style lang="stylus" rel="stylesheet/stylus">
</style>
