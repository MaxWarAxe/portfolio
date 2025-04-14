import './assets/main.css'
import 'remixicon/fonts/remixicon.css'
import VueVideoPlayer from '@videojs-player/vue'
import 'video.js/dist/video-js.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(VueVideoPlayer)

app.mount('#app')
