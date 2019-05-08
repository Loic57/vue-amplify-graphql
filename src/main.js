import Vue from 'vue'
import VueApollo from 'vue-apollo'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './routes'
import Amplify, * as AmplifyModules from 'aws-amplify'
import { AmplifyPlugin } from 'aws-amplify-vue'
import awsmobile from './aws-exports'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'


// HTTP connexion to the API
const httpLink = new HttpLink({
  uri: 'https://h473i3xljnbqzd3hrdcv6qthgm.appsync-api.eu-west-1.amazonaws.com/graphql',
})

// Cache implementation
const cache = new InMemoryCache()

// Create the apollo client
const apolloClient = new ApolloClient({
  link: httpLink,
  cache,
})


Amplify.configure(awsmobile)
Vue.use(AmplifyPlugin, AmplifyModules)
Vue.use(VueRouter)
Vue.use(VueApollo)
Vue.config.productionTip = false


const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
})


new Vue({
  router,
  apolloProvider,
  render: h => h(App),
}).$mount('#app')
