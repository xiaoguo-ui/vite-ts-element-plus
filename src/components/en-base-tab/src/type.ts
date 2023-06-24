import { Component, InjectionKey } from 'vue'

export interface ItemTab {
  label: string
  component: Component
  name: string
  labelSlot?: string //label插槽

  [key: string]: any
}

export type Props = {
  activeName: string
  isKeepAlive?: boolean //是否缓存
  isStay?: boolean //是否停留
  tabOptions: ItemTab[]
}

export type setDynamicAddTab = (tabItem: ItemTab) => void
export const setDynamicAddTabKey: InjectionKey<setDynamicAddTab> = Symbol('')
