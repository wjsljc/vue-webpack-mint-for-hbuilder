import Vue from 'vue'
import Router from 'vue-router'
import Index from 'page/Index'
import Mine from 'page/mine/mine'
import Toast from 'components/ui/toast/Toast'
import Indicator from 'components/ui/indicator/Indicator'
import Loadmore from 'components/ui/loadmore/Loadmore'
import InfiniteScroll from 'components/ui/infiniteScroll/InfiniteScroll'
import MessageBox from 'components/ui/messageBox/MessageBox'
import ActionSheet from 'components/ui/actionSheet/ActionSheet'
import Popup from 'components/ui/popup/Popup'
import Swipe from 'components/ui/swipe/Swipe'
import LazyLoad from 'components/ui/lazyLoad/LazyLoad'
import Range from 'components/ui/range/Range'
import Progress from 'components/ui/progress/Progress'
import Picker from 'components/ui/picker/Picker'
import DatetimePicker from 'components/ui/datetimePicker/DatetimePicker'
import IndexList from 'components/ui/indexList/IndexList'
import PaletteButton from 'components/ui/paletteButton/PaletteButton'
import Header from 'components/ui/header/Header'
import Button from 'components/ui/button/Button'
import Cell from 'components/ui/cell/Cell'
import Spinner from 'components/ui/spinner/Spinner'
import Search from 'components/ui/search/Search'
import Switch from 'components/ui/switch/Switch'
import Checklist from 'components/ui/checklist/Checklist'
import Radio from 'components/ui/radio/Radio'
import Field from 'components/ui/field/Field'
import Badge from 'components/ui/badge/Badge'
import Camera from 'components/plus/camera/Camera'
import Geolocation from 'components/plus/geolocation/Geolocation'
import Accelerometer from 'components/plus/accelerometer/Accelerometer'
import Test from 'components/plus/test/Test'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index,
    },
    {
      path: '/mine',
      name: 'mine',
      component: Mine
    },
    {
      path: '/ui/toast',
      name: 'toast',
      component: Toast
    },
    {
      path: '/ui/indicator',
      name: 'indicator',
      component: Indicator
    },
    {
      path: '/ui/loadmore',
      name: 'loadmore',
      component: Loadmore
    },
    {
      path: '/ui/infinite-scroll',
      name: 'infiniteScroll',
      component: InfiniteScroll
    },
    {
      path: '/ui/message-box',
      name: 'messageBox',
      component: MessageBox
    },
    {
      path: '/ui/action-sheet',
      name: 'actionSheet',
      component: ActionSheet
    },
    {
      path: '/ui/popup',
      name: 'popup',
      component: Popup
    },
    {
      path: '/ui/swipe',
      name: 'swipe',
      component: Swipe
    },
    {
      path: '/ui/lazyLoad',
      name: 'lazyLoad',
      component: LazyLoad
    },
    {
      path: '/ui/range',
      name: 'range',
      component: Range
    },
    {
      path: '/ui/progress',
      name: 'progress',
      component: Progress
    },
    {
      path: '/ui/picker',
      name: 'picker',
      component: Picker
    },
    {
      path: '/ui/datetime-picker',
      name: 'datetimePicker',
      component: DatetimePicker
    },
    {
      path: '/ui/index-list',
      name: 'indexList',
      component: IndexList
    },
    {
      path: '/ui/palette-button',
      name: 'paletteButton',
      component: PaletteButton
    },
    {
      path: '/ui/header',
      name: 'header',
      component: Header
    },
    {
      path: '/ui/button',
      name: 'button',
      component: Button
    },
    {
      path: '/ui/cell',
      name: 'cell',
      component: Cell
    },
    {
      path: '/ui/spinner',
      name: 'spinner',
      component: Spinner
    },
    {
      path: '/ui/search',
      name: 'search',
      component: Search
    },
    {
      path: '/ui/switch',
      name: 'switch',
      component: Switch
    },
    {
      path: '/ui/checklist',
      name: 'checklist',
      component: Checklist
    },
    {
      path: '/ui/radio',
      name: 'radio',
      component: Radio
    },
    {
      path: '/ui/field',
      name: 'field',
      component: Field
    },
    {
      path: '/ui/badge',
      name: 'badge',
      component: Badge
    },
    {
      path: '/plus/camera',
      name: 'camera',
      component: Camera
    },
    {
      path: '/plus/test',
      name: 'test',
      component: Test
    },
    {
      path: '/plus/geolocation',
      name: 'geolocation',
      component: Geolocation
    },
    {
      path: '/plus/accelerometer',
      name: 'accelerometer',
      component: Accelerometer
    }
  ]
})
