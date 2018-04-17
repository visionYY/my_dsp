<template>
  <div>
      <el-container style="height: 500px; border: 1px solid #eee">
        <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
            <el-menu :default-openeds="['1', '2']" router>
                <el-submenu index="1">
                    <template slot="title">建立广告创意</template>
                    <el-menu-item index="/new/found">选择计划</el-menu-item>
                </el-submenu>
                <el-submenu index="2">
                    <template slot="title">广告单元</template>
                    <el-menu-item index="1-1">基本信息</el-menu-item>
                    <el-menu-item index="1-2">定向</el-menu-item>
                    <el-menu-item index="1-1">广告位</el-menu-item>
                    <el-menu-item index="1-1">出价</el-menu-item>
                </el-submenu>
                <el-submenu index="3">
                    <template slot="title">广告创意</template>
                    <el-menu-item index="1-1">落地页</el-menu-item>
                    <el-menu-item index="1-2">上传创意</el-menu-item>
                </el-submenu>
            </el-menu>
        </el-aside>
      <el-container>
    <el-main>
        <router-view></router-view>
    </el-main>
  </el-container>
</el-container>
  </div>
</template>

<script>
export default {
  name: "new"
};
</script>

<style>
    .el-main{
        padding:0;
    }
</style>
