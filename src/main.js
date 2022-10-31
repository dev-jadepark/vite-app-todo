import { createApp } from 'vue'
import App from './App.vue'
import './index.css'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.esm.min.js'

const app = createApp(App)
app.provide('today', new Date().toISOString().split('T')[0])  //today변수를 provide하고 있으므로 모든 컴포넌트는 today를 inject할 수 있다
app.mount('#app')
