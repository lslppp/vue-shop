<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    background-color="rgb(83, 168, 255)"
    text-color="#fff"
    active-text-color="#ffd04b"
  >
    <el-menu-item index="0" tabindex='1'>首页</el-menu-item>
    <el-sub-menu index="1" tabindex='2'>
      <template #title>Workspace</template>
      <el-menu-item index="2-1">item one</el-menu-item>
      <el-menu-item index="2-2">item two</el-menu-item>
      <el-menu-item index="2-3">item three</el-menu-item>
      <el-sub-menu index="2-4">
        <template #title>item four</template>
        <el-menu-item index="2-4-1">item one</el-menu-item>
        <el-menu-item index="2-4-2">item two</el-menu-item>
        <el-menu-item index="2-4-3">item three</el-menu-item>
      </el-sub-menu>
    </el-sub-menu>
    <el-menu-item index="2" tabindex='3'>Info</el-menu-item>
    <el-menu-item index="3" tabindex='4'>Orders</el-menu-item>
  </el-menu>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const activeIndex = ref('0')
// const handleSelect = (key: string, keyPath: string[]) => {
//   console.log(key, keyPath)

// }
</script>
<style >
/*.el-menu{
  height: 0.4rem;
}*/
</style>
