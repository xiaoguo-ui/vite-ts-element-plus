<template>
  <el-tabs v-bind="$attrs" v-model="service.PagePayload.propsActiveName">
    <template v-for="item in service.PagePayload.propsTabOption" :key="item.label">
      <el-tab-pane :label="item.label" :name="item.name">
        <!-- label插槽-->
        <template v-if="item.labelSlot" #label>
          <slot :name="item.labelSlot"></slot>
        </template>
        <!-- 缓存Tab -->
        <keep-alive v-if="isKeepAlive">
          <component
            v-if="service.PagePayload.propsActiveName === item.name"
            :is="item.component"
          ></component>
        </keep-alive>
        <!--不缓存Tab -->
        <template v-else>
          <component
            v-if="service.PagePayload.propsActiveName === item.name"
            :is="item.component"
          ></component>
        </template>
      </el-tab-pane>
    </template>
  </el-tabs>
</template>

<script setup lang="ts">
  import { provide } from 'vue'
  import Service from './service.ts'
  import { Props, setDynamicAddTabKey } from './type.ts'

  const props = withDefaults(defineProps<Props>(), {
    isKeepAlive: false,
    isStay: false
  })

  // 服务
  const service = new Service(props)
  // 初始化一些额外的参数
  service.isStartStay()

  // 注入此方法
  provide(setDynamicAddTabKey, service.addTabItem)
</script>
