import Vue from 'vue';
import VueGtag from 'vue-gtag';

export default ({ app }) => {
  Vue.use(
    VueGtag,
    {
      config: { id: 'G-6J1WPEX5MV' },
      appName: 'blog',
      enabled: true,
      pageTrackerScreenviewEnabled: true,
    },
    app.router
  )
}
