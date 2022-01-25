import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
{{{ importInfo }}}

const app = createApp(App)
{{ use }}
app.use(router)
app.mount('#app')
