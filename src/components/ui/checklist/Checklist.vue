<template>
  <transition name="slide">
    <div class="checklist">
      <mt-header class="header" title="Checklist" :fixed="headerConf.fixed">
        <router-link to="/" slot="left">
          <mt-button icon="back">返回</mt-button>
        </router-link>
      </mt-header>
      <div class="content">
        <div class="row">
          <mt-checklist
            title="复选框列表"
            v-model="checkBoxConf1.value"
            :options="['选项A', '选项B', '选项C']">
          </mt-checklist>
          <mt-cell title="选中的项">{{checkBoxConf1.value}}</mt-cell>
        </div>
        <div class="row">
          <mt-checklist
            title="设置禁用选项"
            v-model="checkBoxConf2.value"
            :options="checkBoxConf2.options">
          </mt-checklist>
          <mt-cell title="选中的项">{{checkBoxConf2.value}}</mt-cell>
        </div>
        <div class="row">
          <mt-checklist
            title="设置最大可选数"
            :max="2"
            v-model="checkBoxConf3.value"
            :options="checkBoxConf3.options">
          </mt-checklist>
          <mt-cell title="选中的项">{{checkBoxConf3.value}}</mt-cell>
        </div>
        <div class="row">
          <mt-checklist
            title="选择框右对齐"
            :align="checkBoxConf4.right"
            v-model="checkBoxConf4.value"
            :options="['选项A', '选项B', '选项C']">
          </mt-checklist>
          <mt-cell title="选中的项">{{checkBoxConf4.value}}</mt-cell>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
  import { Header, Cell, Checklist } from 'mint-ui';

  export default {
    name: "Toast",
    data () {
      return {
        headerConf: {
          fixed: true
        },
        checkBoxConf1: {
          value: []
        },
        checkBoxConf2: {
          value: ['idA'],
          options: [
            {
              label: '被禁用',
              value: '值F',
              disabled: true
            },
            {
              label: '选中禁用',
              value: '选中禁用的值',
              disabled: true
            },
            {
              label: '选项A',
              value: 'idA'
            },
            {
              label: '选项B',
              value: '值B'
            }
          ]
        },
        checkBoxConf3: {
          value: ['a-id'],
          options: [
            {
              label: 'aa',
              value: 'a-id',
            },
            {
              label: 'bb',
              value: 'b-id',
            },
            {
              label: 'cc',
              value: 'c-id'
            },
            {
              label: 'dd',
              value: 'd-id'
            }
          ]
        },
        checkBoxConf4: {
          value: [],
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
  .checklist {
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
