# vue-webpack-hbuilder

> 此项目设计的最初目的是为了解决使用 vue+webpack 自动化构建并实时同步手机热更新调试而诞生。截止目前，DCloud 官方并提供一套完整的 vue+webpack+hbuilder 实时开发调试的文章，只是零零散散有人去构建一些自己的项目，并不能很好地教会或者引导大量开发者使用该开发模式进行开发。本项目以构建流程为主，适量 demo 为辅，印证了 vue+webpack+hbuilder 实时调试以及打包的可行性，为开发者提供多开发种选择。

## 使用步骤
###下载代码
```
$ git clone https://github.com/wjsljc/vue-webpack-mint-for-hbuilder.git
$ cd vue-webpack-mint-for-hbuilder
$ npm install
```

### 在浏览器中调试调试
```
$ npm run dev
```
浏览器地址为：``http://localhost:8080/index.html``

### 真机同步调试
```
$ npm run dev
```
在 HBuilder 中设置应用入口地址为 ``http://localhost:8080/index.html``
> 请确保手机与本地服务在同一网段，否则无法访问本机的服务。

### 编译后真机同步调试
```
$ npm run build
```
- 把 dist 目录下的文件复制到 HBuilder 项目下
- 设置起始页为 index.html
- 真机运行调试

## 赞助
如果该项目给您带来了工作上的参考或者启发，亦或者期待更多其他项目的诞生和该项目的继续维护，支持作者原创扫一扫或点击识别下方的二维码，为作者打赏1.0元吧！

![avatar](http://chuantu.biz/t6/319/1527238314x-1404795840.png)
![avatar](http://chuantu.biz/t6/319/1527238392x-1404793017.png)

