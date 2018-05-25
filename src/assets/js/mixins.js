import { Header } from 'mint-ui'

export const headerMixin = {
  components: {
    Header
  },
  data () {
    return {
      headerConf: {
        fixed: true
      }
    }
  },
  methods: {
    back () {
      window.history.back();
    }
  }
}
