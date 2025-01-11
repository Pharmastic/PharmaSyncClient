import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import './assets/main.css'
import keycloak from './keycloak'

keycloak
  .init({
    onLoad: '',
    checkLoginIframe: false,
    promiseType: 'native',
  })
  .then(() => {
    if (keycloak.authenticated) {
      console.log('authenticated')
    } else {
      console.log('not authenticated')
    }
  })
  .catch((err: string) => {
    console.error(err)
  })

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
