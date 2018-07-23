<style lang="scss">
  @import "../assets/scss/Layout.scss";
</style>

<template>
  <section>
    <!-- 头部导航菜单 -->
    <Nav></Nav>
    <!-- 页面主体部分 -->
    <Mainbody></Mainbody>
    <!-- 底部 -->
    <Footer></Footer>
  </section>
</template>

<script>
  import Nav from '@/components/Nav'
  import Mainbody from '@/components/Mainbody'
  import Footer from '@/components/Footer'

  export default {
    components: {
      Nav,
      Mainbody,
      Footer
    },
    data: () => ({
    }),
    computed: {
    }
  }
</script>
