<template>
  <transition name="slide">
    <div class="radio">
      <mt-header class="header" title="Radio" :fixed="headerConf.fixed">
        <div slot="left">
          <mt-button icon="back" @click="back">返回</mt-button>
        </div>
      </mt-header>
      <div class="content">
        <div class="row">
          <mt-radio
            title="单选框列表"
            v-model="radioConf1.value"
            :options="['选项A', '选项B', '选项C']">
          </mt-radio>
          <mt-cell title="选中的项">{{radioConf1.value}}</mt-cell>
        </div>
        <div class="row">
          <mt-radio
            title="设置禁用选项"
            v-model="radioConf2.value"
            :options="radioConf2.options">
          </mt-radio>
          <mt-cell title="选中的项">{{radioConf2.value}}</mt-cell>
        </div>
        <div class="row">
          <mt-radio
            title="单选框右对齐"
            :align="radioConf3.right"
            v-model="radioConf3.value"
            :options="['选项A', '选项B', '选项C']">
          </mt-radio>
          <mt-cell title="选中的项">{{radioConf3.value}}</mt-cell>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
  import { Cell, Radio } from 'mint-ui'
  import { headerMixin } from 'assets/js/mixins'

  export default {
    mixins: [headerMixin],
    data () {
      return {
        radioConf1: {
          value: ''
        },
        radioConf2: {
          value: '值-禁用',
          options: [
            {
              label: '被禁用',
              value: '值-禁用',
              disabled: true
            },
            {
              label: '选项A',
              value: '值A'
            },
            {
              label: '选项B',
              value: '值B'
            }
          ]
        },
        radioConf3: {
          value: '',
          right: 'right'
        },
      }
    },
    methods: {}
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~assets/css/variable.styl"
  @import "~assets/css/transition.styl"
  .radio {
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
        margin-bottom 20px
      }
    }
  }
</style>
