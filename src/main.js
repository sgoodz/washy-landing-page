import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import VueKinesis from "vue-kinesis";
import VueSmoothScroll from 'vue3-smooth-scroll';
import { faEraser, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";


library.add(faPhone, faEnvelope);   

createApp(App)
.use(VueKinesis)
.use(VueSmoothScroll)
.component("font-awesome-icon", FontAwesomeIcon)
.mount('#app')
