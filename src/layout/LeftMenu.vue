<template>
    <div style="height:calc(100% - 62px);width: 151px;float: left;">
      <el-row class="tac" style="height: 100%">
        <el-col style="height:100%;width: 150px">
          <el-menu style="height: 100%"
            default-active="2"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b">
            <el-submenu index="1">
              <template slot="title">
                <!--<i class="el-icon-location"></i>-->
                <span>导航一</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="1-1">选项一</el-menu-item>
                <el-menu-item index="1-2">选项二</el-menu-item>
                <el-menu-item index="1-3">选项三</el-menu-item>
                <el-menu-item index="1-4">选项四</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-menu-item index="2">
              <!-- <i class="el-icon-menu"></i>-->
              <span slot="title">导航二</span>
            </el-menu-item>
            <el-menu-item index="3">
              <!--<i class="el-icon-document"></i>-->
              <span slot="title">导航三</span>
            </el-menu-item>
            <el-menu-item index="4">
              <!--<i class="el-icon-setting"></i>-->
              <span slot="title">导航四</span>
            </el-menu-item>
          </el-menu>
        </el-col>
      </el-row>
    </div>
</template>

<script>
  export default {
    name: "leftmenu",
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style scoped>
  .el-submenu .el-menu-item {
    min-width: 0px;
  }

  *{margin:0;padding:0;}

  html,body {
    width:100%;height:100%;
  }

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

  .container{
    position: relative;
    margin-left: 150px;
    margin-top: 0px;
    width: calc(100% - 150px);
    height: calc(100% - 62px);

  }
  .el-menu-item-group__title {
    display: none;
  }

</style>
