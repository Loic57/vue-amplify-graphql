import Vue from 'vue'
import VueApollo from 'vue-apollo'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './routes'
import Amplify, * as AmplifyModules from 'aws-amplify'
import { AmplifyPlugin } from 'aws-amplify-vue'
import awsmobile from './aws-exports'
import AWSAppSyncClient from 'aws-appsync'


//graphql server
const config = {
  url: "https://h473i3xljnbqzd3hrdcv6qthgm.appsync-api.eu-west-1.amazonaws.com/graphql",
  region: "eu-west-1",
  auth: {
    type: "API_KEY",
    apiKey: "da2-fehazzlgifc5hdwryy6hswsi2y",
  }
}
const options = {
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'cache-and-network',
    }
  }
}

const client = new AWSAppSyncClient(config, options)

const appsyncProvider = new VueApollo({
  defaultClient: client
})




Amplify.configure(awsmobile)
Vue.use(AmplifyPlugin, AmplifyModules)
Vue.use(VueRouter)
Vue.use(VueApollo)
Vue.config.productionTip = false





new Vue({
  router,
  provide: appsyncProvider,
  render: h => h(App),
}).$mount('#app')
