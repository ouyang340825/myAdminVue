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
    <div style="margin-top: -60px;">
      <el-row class="block-col-2" style="margin-left: 86%">
        <el-col :span="3">
          <el-dropdown trigger="click">
                        <span class="el-dropdown-link" style="color: #ffd04b;">
                        750824959OYS<i class="el-icon-arrow-down el-icon--right"></i>
                        </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>修改密码</el-dropdown-item>
              <el-dropdown-item>修改资料</el-dropdown-item>
              <el-dropdown-item>退出</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-col>
      </el-row>
    </div>
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
  .el-dropdown {
    display: inline-block;
    position: relative;
    color: #606266;
    font-size: 16px;
    margin-top: 19px;
    margin-right: 10%;
    width: 200px;
    text-align: right;
  }

</style>
