<style lang="scss">
  @import "../assets/scss/Layout.scss";
</style>

<template>
  <section>
    <!-- 头部导航菜单 -->
    <Nav></Nav>
    <!-- 页面主体部分 -->
    <section id="main">
      <router-view></router-view>
    </section>
    <!-- 底部 -->
    <Footer></Footer>
  </section>
</template>

<script>
  import Nav from '@/components/Nav'
  import Footer from '@/components/Footer'

  export default {
    components: {
      Nav,
      Footer
    }
  }
</script>
