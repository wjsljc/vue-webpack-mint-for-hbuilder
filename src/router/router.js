// 独立功能页面单独写，如下
export const indexRouter = {
  path: '/',
  name: 'index',
  component: () => import('page/Index')
}

export const sliderRouter = {
  path: '/slider',
  name: 'slider',
  component: () => import('page/slider/Slider')
}

export const loginRouter = {
  path: '/login',
  name: 'login',
  component: () => import('page/login/Login')
}

export const advertisementRouter = {
  path: '/advertisement',
  name: 'advertisement',
  component: () => import('page/advertisement/Advertisement')
}

// ui
export const uiRouters = [
  {
    path: '/ui/toast',
    name: 'toast',
    component: (resolve) => {
      import('components/ui/toast/Toast').then((module) => {
        resolve(module)
      })
    }
  },
  {
    path: '/ui/indicator',
    name: 'indicator',
    component: () => import('components/ui/indicator/Indicator')
  },
  {
    path: '/ui/loadmore',
    name: 'loadmore',
    component: () => import('components/ui/loadmore/Loadmore')
  },
  {
    path: '/ui/infinite-scroll',
    name: 'infiniteScroll',
    component: () => import('components/ui/infiniteScroll/InfiniteScroll')
  },
  {
    path: '/ui/message-box',
    name: 'messageBox',
    component: () => import('components/ui/messageBox/MessageBox')
  },
  {
    path: '/ui/action-sheet',
    name: 'actionSheet',
    component: () => import('components/ui/actionSheet/ActionSheet')
  },
  {
    path: '/ui/popup',
    name: 'popup',
    component: () => import('components/ui/popup/Popup')
  }, {
    path: '/ui/swipe',
    name: 'swipe',
    component: () => import('components/ui/swipe/Swipe')
  }, {
    path: '/ui/lazyLoad',
    name: 'lazyLoad',
    component: () => import('components/ui/lazyLoad/LazyLoad')
  },
  {
    path: '/ui/range',
    name: 'range',
    component: () => import('components/ui/range/Range')
  },
  {
    path: '/ui/progress',
    name: 'progress',
    component: () => import('components/ui/progress/Progress')
  },
  {
    path: '/ui/picker',
    name: 'picker',
    component: () => import('components/ui/picker/Picker')
  },
  {
    path: '/ui/datetime-picker',
    name: 'datetimePicker',
    component: () => import('components/ui/datetimePicker/DatetimePicker')
  },
  {
    path: '/ui/index-list',
    name: 'indexList',
    component: () => import('components/ui/indexList/IndexList')
  },
  {
    path: '/ui/palette-button',
    name: 'paletteButton',
    component: () => import('components/ui/paletteButton/PaletteButton')
  },
  {
    path: '/ui/header',
    name: 'header',
    component: () => import('components/ui/header/Header')
  },
  {
    path: '/ui/button',
    name: 'button',
    component: () => import('components/ui/button/Button')
  },
  {
    path: '/ui/cell',
    name: 'cell',
    component: () => import('components/ui/cell/Cell')
  }, {
    path: '/ui/spinner',
    name: 'spinner',
    component: () => import('components/ui/spinner/Spinner')
  }, {
    path: '/ui/search',
    name: 'search',
    component: () => import('components/ui/search/Search')
  },
  {
    path: '/ui/switch',
    name: 'switch',
    component: () => import('components/ui/switch/Switch')
  }, {
    path: '/ui/checklist',
    name: 'checklist',
    component: () => import('components/ui/checklist/Checklist')
  }, {
    path: '/ui/radio',
    name: 'radio',
    component: () => import('components/ui/radio/Radio')
  },
  {
    path: '/ui/field',
    name: 'field',
    component: () => import('components/ui/field/Field')
  },
  {
    path: '/ui/badge',
    name: 'badge',
    component: () => import('components/ui/badge/Badge')
  }
]

export const plusRouters = [
  {
    path: '/plus/camera',
    name: 'camera',
    component: () => import('components/plus/camera/Camera')
  },
  {
    path: '/plus/geolocation',
    name: 'geolocation',
    component: () => import('components/plus/geolocation/Geolocation')
  },
  {
    path: '/plus/accelerometer',
    name: 'accelerometer',
    component: () => import('components/plus/accelerometer/Accelerometer')
  },
  {
    path: '/plus/resumeCallback',
    name: 'resumeCallback',
    component: () => import('components/plus/resumeCallback/ResumeCallback')
  },
  {
    path: '/plus/payment',
    name: 'payment',
    component: () => import('components/plus/payment/Payment')
  }
]

export const routers = [
  indexRouter,
  loginRouter,
  sliderRouter,
  advertisementRouter,
  ...uiRouters,
  ...plusRouters
]
