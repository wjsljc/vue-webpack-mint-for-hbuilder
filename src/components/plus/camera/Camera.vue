<template>
  <transition name="slide">
    <div class="camera">
      <mt-header class="header" title="amera" :fixed="headerConf.fixed">
        <div slot="left">
          <mt-button icon="back" @click="back">返回</mt-button>
        </div>
      </mt-header>
      <div class="content">
        <mt-actionsheet
          :actions="actionsheetConf.arr"
          :cancelText="actionsheetConf.cancelText"
          :closeOnClickModal="actionsheetConf.closeOnClickModal"
          v-model="actionsheetConf.flag"
        >
        </mt-actionsheet>
        <mt-button type="default" @click="toast('top')">选取照片</mt-button>
        <!--<mt-cell title="jump" label="Camera,相册与拍照" is-link to="/plus/test"></mt-cell>-->
        <div class="photo" id="photo" v-show="photoInfo.flag">
          <img :src="photoInfo.path" alt=""/>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
  import { Toast, Button, Actionsheet, Indicator } from 'mint-ui'
  import { headerMixin } from 'assets/js/mixins'

  export default {
    mixins: [headerMixin],
    data () {
      return {
        actionsheetConf: {
          flag: false,  // 显隐控制
          arr: [  // 内容数组
            {
              name: '拍照',
              method: this.picture
            },
            {
              name: '从相册中选取',
              method: this.album
            }
          ],
          cancelText: '取消按钮', // 取消按钮
          closeOnClickModal: true, // 是否可以点击遮罩取消
        },
        photoInfo: {
          path: '',
          flag: false
        }
      }
    },
    methods: {
      toast () {
        this.actionsheetConf.flag = true
      },
      picture () {
        Indicator.open({
          text: '获取中...',
          spinnerType: 'triple-bounce'
        })
        let self = this
        let cmr = plus.camera.getCamera();
        let res = cmr.supportedImageResolutions[0]; //支持照片的分辨率
        let fmt = cmr.supportedImageFormats[0]; //照片的格式
        cmr.captureImage(function (path) {
          console.log("Capture image success: " + path);
          self.compressPhoto(path); // 压缩并写入图片
        }, function (error) {
          console.log("picture error " + JSON.stringify(error))
          Indicator.close()
        }, {
          resolution: res,
          format: fmt
        });
      },
      album () {
        let self = this
        Indicator.open({
          text: '获取中...',
          spinnerType: 'triple-bounce'
        })
        // 从相册中选择图片
        console.log("从相册中选择图片:");
        plus.gallery.pick(function (path) {
          console.log(path);
          self.compressPhoto(path); // 压缩并写入图片
        }, function (e) {
          console.log("取消选择图片 " + JSON.stringify(e));
          Indicator.close()
        }, {
          filter: "image"
        });
      },
      compressPhoto (path) {
        let self = this
        plus.io.resolveLocalFileSystemURL(path, function (entry) {
          let src = entry.toLocalURL();
          console.log("src " + src);
          let random = Date.parse(new Date());
          /*压缩图片*/
          plus.zip.compressImage({
            src: src,
            dst: "_doc/signature_" + random + ".jpg",
            overwrite: true, //是否覆盖源文件
            quality: 100,
            width: "300px",
            height: "360px"
          }, function (zip) {
            Indicator.close()
            let size = zip.size;
            console.log("filesize:" + zip.size + ",totalsize:" + size);
            if (size > (10 * 1024 * 1024)) {
              Toast({
                message: '照片大小超出限制',
                position: 'bottom',
                duration: 3000
              })
              return
            }
            self.photoInfo.path = zip.target  // 赋值照片文件路径
            self.photoInfo.flag = true
            console.log("文件路径 " + self.photoInfo.path)
          }, function (zipe) {
            Indicator.close()
            Toast({
              message: '照片压缩失败',
              position: 'bottom',
              duration: 3000
            });
          });
        });
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~assets/css/variable.styl"
  @import "~assets/css/transition.styl"
  .camera {
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
        box-shadow 0 0 2px #b8bbbf
      }
      .photo {
        width 85%
        margin 0 auto
        img {
          width 100%
        }
      }
    }
  }
</style>
