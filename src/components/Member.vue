<style lang="scss">
  @import "../assets/scss/Member.scss";
</style>

<template>
  <section class="container" id="memberBox">
    <section class="breadcrumb">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>会员中心</el-breadcrumb-item>
      </el-breadcrumb>
    </section>
    <el-row :gutter="20" class="member">
      <el-col :span="5">
        <MemberSide></MemberSide>
      </el-col>
      <el-col :span="19">
        <router-view></router-view>
      </el-col>
    </el-row>
  </section>
</template>

<script>
  import MemberSide from '@/components/MemberSide'

  export default {
    components: {
      MemberSide
    }
  }
</script>
