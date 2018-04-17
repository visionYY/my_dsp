<template>
  <div id="app">
    <el-container style="height: 500px; border: 1px solid #eee">
      <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
        <el-menu :default-openeds="['1']" router>
          <el-menu-item index="/new">新建广告</el-menu-item>
          <el-menu-item index="/home">首页概览</el-menu-item>          
          <el-submenu index="1">
            <template slot="title"><i class="el-icon-menu"></i>广告管理</template>
            <el-menu-item index="/plan">广告计划</el-menu-item>
            <el-menu-item index="/unit">广告单元</el-menu-item>
            <el-menu-item index="/creative">广告创意</el-menu-item>
          </el-submenu>
          <el-menu-item index="/home">数据中心</el-menu-item>
          <el-menu-item index="/home">工具箱</el-menu-item>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header style="text-align: right; font-size: 12px">
          <el-dropdown>
            <i class="el-icon-setting" style="margin-right: 15px"></i>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>查看</el-dropdown-item>
              <el-dropdown-item>新增</el-dropdown-item>
              <el-dropdown-item>删除</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <span>{{this.$store.state.user}}</span>
        </el-header>
        
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default{
  name: 'App'
}
</script>

<style>
  @import url("../static/style.css");
</style>
