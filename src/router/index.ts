import {
  createRouter,
  createWebHistory
} from 'vue-router'
import routes from './routes'

const history = createWebHistory()

export default createRouter({
  history,
  routes
})
