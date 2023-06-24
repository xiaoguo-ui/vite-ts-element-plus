/**
 * 此处主要是因为useRoute,和useRouter
 * */
import router from '../router'

class GlobalRouter {
  static globalRouter = new GlobalRouter()

  get router() {
    return router
  }

  get route() {
    return router.currentRoute.value
  }
}

export default GlobalRouter.globalRouter
