import Vue from 'vue'
import App from './App.vue'
import router from './router'

import { Carousel, CarouselItem } from 'element-ui'

import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faInfoCircle,
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

Vue.use(Carousel)
Vue.use(CarouselItem)

library.add(
  faInfoCircle,
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
Vue.component('font-awesome-icon', FontAwesomeIcon)

require('./styles/style.scss')

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
