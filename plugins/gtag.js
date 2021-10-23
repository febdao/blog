import Vue from 'vue'
import VueGtag from 'vue-gtag'
export default ({ app }) => {
  Vue.use(
    VueGtag,
    {
      config: { id: process.env.GTAG },
      appName: 'FebIsMe',
      enabled: true,
      pageTrackerScreenviewEnabled: true,
    },
    app.router
  )
}
