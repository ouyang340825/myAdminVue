<template>
  <div>
    <header class="head-nav">
      <el-row>
        <el-col :span="16">
          <el-menu theme="dark"  class="el-menu-demo"
                   mode="horizontal" unique-opened router>
            <el-menu-item
              index=1>
            </el-menu-item>
          </el-menu>
        </el-col>
        <el-col :span="4" class="userinfo">
          <!-- <span class='username'><i class='fa fa-user'></i>{{this.$store.state.user.userinfo.username}}</span> -->
          <span class='username'>
                        <el-dropdown
                          trigger="click">
                            <span class="el-dropdown-link">
                                1321321
                              <i class="el-icon-caret-bottom el-icon--right"></i>
                            </span>
                            <el-dropdown-menu slot="dropdown">
                                <el-dropdown-item >修改信息</el-dropdown-item>
                                <el-dropdown-item >退出</el-dropdown-item>
                            </el-dropdown-menu>
                        </el-dropdown>
                    </span>
          <i class="fa fa-sign-out logout" ></i>
        </el-col>
      </el-row>
    </header>
  </div>
</template>

<script>

  export default{
    data() {
      return{
        loginData: {
        },
        regData: {
        }
      }
    },
    methods: {
    }
  }
</script>

<style scoped lang='less'>
  .logo-container {
    height: 60px;
  }

  .logo {
    height: 50px;
    width: auto;
    margin-left: 10px;
    margin-top: 5px;
  }

  .fa-user {
    position: relative;
    top: -2px;
    margin-right: 4px;
  }

  .head-nav {
    width: 100%;
    height: 60px;
    background: #324057;
    position: fixed;
    top: 0px;
    left: 0px;
    z-index: 99;
    color: #FFF;
    border-bottom: 1px solid #1F2D3D;

    .logout {
      width: 60px;
      height: 60px;
      line-height: 60px;
      text-align: center;
      float: right;
      cursor: pointer;
    }

  }

  .userinfo {
    text-align: right;
  }

  .username {
    height: 60px;
    line-height: 60px;
    cursor: pointer;

    .el-dropdown {
      color: #FFF;
    }

  }
</style>
