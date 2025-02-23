import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './styles/index.scss'

export const app = createApp(App).use(router)
