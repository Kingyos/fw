import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import VueApollo from 'vue-apollo'
import ApolloClient from 'apollo-boost'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(VueApollo)

const defaultClient = new ApolloClient({
  uri: 'http://localhost:4000/'
})

const apolloProvider = new VueApollo({
  defaultClient
})

new Vue({
  router,
  store,
  provide: apolloProvider.provide(),
  render: h => h(App)
}).$mount('#app')
