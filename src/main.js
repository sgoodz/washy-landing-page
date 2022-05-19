import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import VueKinesis from "vue-kinesis";

createApp(App)
.use(VueKinesis)
.mount('#app')
