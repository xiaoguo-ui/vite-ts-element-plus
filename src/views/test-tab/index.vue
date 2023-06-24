<template>
  <div>
    <!-- 基本案例-->
    <h1>基础案例</h1>
    <EnBaseTab :tabOptions="arr" activeName="test1"></EnBaseTab>
    <h1>卡片风格的标签</h1>
    <EnBaseTab type="card" :tabOptions="arr" activeName="test1"></EnBaseTab>
    <h1>标签位置的设置</h1>
    <EnBaseTab tabPosition="left" :tabOptions="arr" activeName="test1"></EnBaseTab>
    <h1>自定义标签页的内容</h1>
    <EnBaseTab tab-position="left" :tabOptions="arr1" activeName="test1">
      <template #tab1>
        <div>我是插槽Tab1</div>
      </template>
    </EnBaseTab>
    <!-- 实现切换时动态加载与缓存-->
    <el-row>
      <el-col :span="12">
        <h1>实现切换时动态加载，并缓存</h1>
        <EnBaseTab :isKeepAlive="true" :tabOptions="arr" activeName="test1"></EnBaseTab>
      </el-col>
      <el-col :span="12">
        <h1>不缓存，每次切换都是新的</h1>
        <EnBaseTab :tabOptions="arr" activeName="test1"></EnBaseTab>
      </el-col>
    </el-row>
    <!--  实现当浏览器刷新停留在当前的这一个Tab  -->
    <el-row>
      <el-col :span="12">
        <h1>实现当浏览器刷新停留在当前的这一个Tab</h1>
        <EnBaseTab
          :isStay="true"
          :isKeepAlive="true"
          :tabOptions="arr"
          activeName="test1"
        ></EnBaseTab>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
  import EnBaseTab from '@/components/en-base-tab'

  import { arr, arr1 } from '@/views/test-tab/config'
</script>
