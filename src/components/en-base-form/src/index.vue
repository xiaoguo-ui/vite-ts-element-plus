<template>
  <el-form
    v-bind="$attrs"
    :ref="service.setFormRef.bind(service)"
    :model="formData"
    :rules="formRules"
  >
    <el-row>
      <el-col v-bind="item.col" v-for="(item, index) in formColumn" :key="index">
        <!-- 自定义表单项 -->
        <template v-if="item.slotName">
          <slot :name="item.slotName"></slot>
        </template>
        <!-- 主体项-->
        <!--没有孩子的项-->
        <el-form-item
          v-if="!item.slotName && !item.children && !item.children?.length"
          :label="item.label"
          :prop="item.prop"
          v-bind="item.formItemProps"
        >
          <component v-model="formData[item.prop]" :is="item.type" v-bind="item.componentsProps">
          </component>
        </el-form-item>
        <!-- 有孩子的项-->
        <el-form-item v-else :label="item.label" :prop="item.prop" v-bind="item.formItemProps">
          <component v-model="formData[item.prop]" :is="item.type" v-bind="item.componentsProps">
            <component
              v-for="(child, childIndex) in item.children"
              :key="childIndex"
              :is="child.childType"
              v-bind="child.childComponentsProps"
            >
              <!-- 孩子插槽-->
              <template v-if="child.childSlot">
                <slot :name="child.childSlot"></slot>
              </template>
            </component>
          </component>
        </el-form-item>
      </el-col>
    </el-row>
  </el-form>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import Service from './service'
  import type { FormInstance } from 'element-plus'
  import { defaultProps } from './service/type'

  const props = withDefaults(defineProps<defaultProps>(), {})
  const emits = defineEmits<{
    (e: 'update:modelValue'): void
  }>()
  const service = new Service()

  // 更新数据
  const formData = service.updateModelValue(props, emits)

  defineExpose({
    formRef: service.formRef
  })
</script>
