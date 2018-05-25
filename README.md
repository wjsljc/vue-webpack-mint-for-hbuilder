# vue-webpack-hbuilder

> 此APP设计的最初目的是为了解决使用vue+webpack自动化构建并实时同步手机热更新调试而诞生。截止目前，Dcloud官方没有提供一套完整的vue+webpack+hbuilder实时开发调试的文章，只是零零散散有人去构建一些自己的项目，并不能很好地教会或者引导大量开发者使用该开发模式进行开发。本APP以构建流程为主，demo为辅，印证了vue+webpack+hbuilder实时调试以及打包的可行性，为开发者提供多开发种选择。

## 使用步骤
下载代码
#### npm install

# 在浏览器中调试调试
#### npm run dev
#### localhost:8080/index.html

# 真机同步调试
#### npm run dev
#### 然后在HBuilder中起始页设置为 本地服务器:端口号/index.html
#### 如 192.168.11.102:8080/index.html
#### 手机连接电脑, 在统一局域网下, 开启真机调试

# 编译后真机同步调试
#### npm run build
#### 把 dist 文件下的目录放入 HBuilder 项目中
#### 设置起始页为 index.html 真机调试

### 如果该项目给您带来了工作上的参考或者启发，亦或者期待更多其他项目的诞生和该项目的继续维护，支持作者原创扫一扫或点击识别下方的二维码，为作者打赏1.0元吧！

![avatar](http://chuantu.biz/t6/319/1527238314x-1404795840.png)
![avatar](http://chuantu.biz/t6/319/1527238392x-1404793017.png)

