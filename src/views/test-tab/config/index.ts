import { markRaw } from 'vue'
import Tab1 from '@/views/test-tab/com/Tab1.vue'
import Tab2 from '@/views/test-tab/com/Tab2.vue'

import { ItemTab } from '@/components/en-base-tab/src/type.ts'

export const arr: ItemTab[] = [
  {
    label: 'Tab1',
    component: markRaw(Tab1),
    name: 'test1'
  },
  {
    label: 'Tab2',
    component: markRaw(Tab2),
    name: 'test2'
  }
]

export const arr1: ItemTab[] = [
  {
    label: 'Tab1',
    component: markRaw(Tab1),
    name: 'test1',
    labelSlot: 'tab1'
  },
  {
    label: 'Tab2',
    component: markRaw(Tab2),
    name: 'test2'
  }
]
