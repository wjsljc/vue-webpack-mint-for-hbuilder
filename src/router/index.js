import Vue from 'vue'
import Router from 'vue-router'
import { routers, indexRouter } from 'ROUTER/router'
import { MyLocalStorage } from 'assets/js/utils'
import { SLIDER_FLAG, LOGIN_FLAG } from 'assets/js/storageConst'
import { Toast } from 'mint-ui'

console.log(SLIDER_FLAG)

Vue.use(Router)

// 路由配置
const RouterConfig = {
  // mode: 'history',
  routes: routers
}

const router = new Router(RouterConfig)

router.beforeEach((to, from, next) => {
  console.log("beforeEach")
  let slider_flag = localStorage.getItem(SLIDER_FLAG)
  let login_flag = MyLocalStorage.Cache.get(LOGIN_FLAG)
  if (to.name === 'slider' && !slider_flag) {
    console.log(111)
    next()
  } else if (!slider_flag) { // 没有索引页就跳转索引页
    console.log("2222")
    next({
      name: 'slider'
    })
  } else if (to.name !== 'login' && !login_flag) { // 没有登陆
    console.log(3333)
    if (from.name !== 'slider') {
      Toast({
        message: '登陆超时',
        position: 'bottom',
        duration: 3000
      })
    }
    next({
      name: 'login'
    })
  } else if (to.name === 'login' && !login_flag) {
    console.log(4444)
    next()
  } else {
    console.log(555)
    next()
  }
})

router.afterEach((to) => {
  window.scrollTo(0, 0)
})
export default router
