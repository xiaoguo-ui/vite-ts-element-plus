import { ref, watch } from 'vue'
import { RouteLocationNormalizedLoaded } from 'vue-router'

import { Props, ItemTab } from './type.ts'
import globalRouter from '@/utils/GlobalRouter.ts'

class Service {
  pagePayload = ref({
    propsActiveName: '',
    propsTabOption: [] as ItemTab[],
    propsIsStay: false
  })
  route: RouteLocationNormalizedLoaded // 路由参数

  get PagePayload() {
    return this.pagePayload.value
  }

  constructor(props: Props) {
    // 初始化路由参数
    this.route = globalRouter.route
    this.PagePayload.propsActiveName = props.activeName
    // 这个主要是用来做动态添加的
    this.PagePayload.propsTabOption = [...props.tabOptions]
    // 这个主要做保存
    this.PagePayload.propsIsStay = props.isStay!
  }

  // 需要动态改变的TabName
  changeActiveName(name: string) {
    this.PagePayload.propsActiveName = name
  }

  // 子组件手动添加TabItem
  addTabItem(tabItem: ItemTab) {
    this.PagePayload.propsTabOption.push(tabItem)
    this.PagePayload.propsActiveName = tabItem.name
    // 不能使用这一种，this变为undefined
    // this.PagePayload.propsTabOption.push(tabItem)
    // this.PagePayload.propsActiveName = tabItem.name
  }

  // 是否开启监听
  isStartStay() {
    if (this.PagePayload.propsIsStay) {
      this.watchActiveName()
      this.stayTab()
    }
  }

  // 监听active的变化
  watchActiveName() {
    watch(
      () => this.PagePayload.propsActiveName,
      val => {
        globalRouter.router.replace(`${this.route.path}?tab=${val}`)
      }
    )
  }

  // 停留tab
  stayTab() {
    const tab = this.route.query.tab
    if (this.isTabString(tab)) this.PagePayload.propsActiveName = tab
  }

  // 判断Tab是string
  isTabString(tab: unknown): tab is string {
    return typeof tab === 'string'
  }
}

export default Service
