<template>
  <div class="index-plus">
    <mt-cell title="Camera" label="Camera,相册与拍照" is-link to="/plus/camera"></mt-cell>
    <mt-cell title="Geolocation" label="Geolocation设备位置信息" is-link to="/plus/geolocation"></mt-cell>
    <mt-cell title="Accelerometer" label="Accelerometer模块管理设备加速度传感器" is-link to="/plus/accelerometer"></mt-cell>
    <mt-cell title="ResumeCallback" label="ResumeCallback后台返回监听" is-link to="/plus/resumeCallback"></mt-cell>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .index-plus {
    .mint-cell-wrapper {
      padding 5px 0 5px 15px
    }
    .mint-cell {
      padding 5px 0 5px 10px
      border-bottom 1px solid #d9d9d9
    }
  }
</style>
