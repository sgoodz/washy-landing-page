import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import VueKinesis from "vue-kinesis";
import VueSmoothScroll from 'vue3-smooth-scroll';

createApp(App)
.use(VueKinesis)
.use(VueSmoothScroll)
.mount('#app')
