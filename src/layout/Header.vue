<template>
  <div>
    <el-menu
      :default-active="activeIndex2"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-menu-item index="1" style="margin-left: 30%">处理中心</el-menu-item>
      <el-menu-item index="2">我的工作台</el-menu-item>
      <el-menu-item index="3">消息中心</el-menu-item>
      <el-menu-item index="4">订单管理</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
  export default {
    name: "head_er",
    data(){
      return{
        activeIndex: '1',
        activeIndex2: '1'
      }
    },
    methods: {
        handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style scoped>

</style>
