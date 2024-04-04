import { createApp } from 'vue'

import App from './App.vue'
import router from './router'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faInfoCircle,
  faQuestionCircle,
  faUserCircle,
  faAngleDoubleRight,
  faCheckCircle,
  faAward,
  faLaptopCode,
  faGamepad,
  faUsers,
  faExternalLinkAlt,
  faCheckSquare
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import './styles/style.scss'

const app = createApp(App)

app.use(ElementPlus)
app.use(router)

library.add(
  faInfoCircle,
  faQuestionCircle,
  faUserCircle,
  faAngleDoubleRight,
  faCheckCircle,
  faAward,
  faLaptopCode,
  faGamepad,
  faUsers,
  faExternalLinkAlt,
  faCheckSquare
)
app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
