<template>
  <div class="index-ui">
    <mt-cell title="Toast" label="Toast弹出提示" is-link to="/ui/toast"></mt-cell>
    <mt-cell title="Indicator" label="Indicator加载状态" is-link to="/ui/indicator"></mt-cell>
    <mt-cell title="Loadmore" label="Loadmore上拉加载下拉刷新" is-link to="/ui/loadmore"></mt-cell>
    <mt-cell title="InfiniteScroll" label="InfiniteScroll无限滚动指令" is-link to="/ui/infinite-scroll"></mt-cell>
    <mt-cell title="MessageBox" label="MessageBox消息提示框" is-link to="/ui/message-box"></mt-cell>
    <mt-cell title="ActionSheet" label="ActionSheet弹出操作列表" is-link to="/ui/action-sheet"></mt-cell>
    <mt-cell title="Popup" label="Popup弹出框" is-link to="/ui/popup"></mt-cell>
    <mt-cell title="Swipe" label="Swipe轮播" is-link to="/ui/swipe"></mt-cell>
    <mt-cell title="Lazyload" label="Lazyload图片懒加载" is-link to="/ui/lazyload"></mt-cell>
    <mt-cell title="Range" label="Range滑块,支持自定义步长、区间等" is-link to="/ui/range"></mt-cell>
    <mt-cell title="Progress" label="Progress进度条" is-link to="/ui/progress"></mt-cell>
    <mt-cell title="Picker" label="Picker选择器,支持多slot联动" is-link to="/ui/picker"></mt-cell>
    <mt-cell title="DatetimePicker" label="DatetimePicker日期时间选择器,支持自定义类型" is-link
             to="/ui/datetime-picker"></mt-cell>
    <mt-cell title="IndexList" label="IndexList索引列表,可由右侧索引导航快速定位到相应的内容" is-link to="/ui/index-list"></mt-cell>
    <mt-cell title="PaletteButton" label="PaletteButton调色板按钮" is-link to="/ui/palette-button"></mt-cell>
    <mt-cell title="Header" label="Header顶部导航栏,支持显示按钮、自定义文字和固定在顶部" is-link to="/ui/header"></mt-cell>
    <mt-cell title="Button" label="Button按钮,提供几种基础样式和尺寸,可自定义图标" is-link to="/ui/button"></mt-cell>
    <mt-cell title="Cell" label="Cell单元格,可用作展示列表信息、链接或者表单等" is-link to="/ui/cell"></mt-cell>
    <mt-cell title="Spinner" label="Spinner加载动画,可指定显示类型、尺寸和颜色" is-link to="/ui/spinner"></mt-cell>
    <mt-cell title="Search" label="Search搜索框，可显示搜索结果列表" is-link to="/ui/search"></mt-cell>
    <mt-cell title="Switch" label="Switch开关" is-link to="/ui/switch"></mt-cell>
    <mt-cell title="Checklist" label="Checklist,复选框列表,依赖cell组件" is-link to="/ui/checklist"></mt-cell>
    <mt-cell title="Radio" label="Radio,单选框列表,依赖cell组件" is-link to="/ui/radio"></mt-cell>
    <mt-cell title="Field" label="Field表单编辑器" is-link to="/ui/field"></mt-cell>
    <mt-cell title="Badge" label="Badge徽章，可指定颜色和尺寸" is-link to="/ui/badge"></mt-cell>
  </div>
</template>

<script type="text/ecmascript-6">
  import { Cell } from 'mint-ui'

  export default {}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .index-ui {
    .mint-cell-wrapper {
      padding 5px 0 5px 15px
    }
    .mint-cell {
      padding 5px 0 5px 10px
      border-bottom 1px solid #d9d9d9
    }
  }
</style>
