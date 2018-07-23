<template>
  <section id="top">
    <section class='nav'>
      <section class='container'>
        <span>您好，欢迎光临爱上鲜花网</span>
        <ul class='nav-r'>
          <li class='menu login' id='LoginInfo'>
            <a href=''>
              亲，请登陆
            </a>
          </li>
          <li class='menu'>
            <a href=''>免费注册</a>
          </li>
          <li class='menu dropdown'>
            <router-link to="/member/myOrder" @mouseenter="showOrder" @mouseleave="hideOrder">
              我的订单 <i class="el-icon-arrow-down"></i>
            </router-link>
            <section class='dropdown-menu' v-show="this.orderShow">
              <a href=''>在线付款</a>
              <a href=''>帮助中心</a>
              <a href=''>售后服务</a>
            </section>
          </li>
          <li class='menu dropdown'>
            <a href=''>
              <span class='ico ico-cart'></span>购物车
            </a>
          </li>
          <li class='menu dropdown'>
            <span @mouseenter="showCollection" @mouseleave="hideCollection">
              收藏夹 <i class="el-icon-arrow-down"></i>
            </span>
            <section class='dropdown-menu' v-show="this.collactionShow">
              <a href=''>在线付款</a>
              <a href=''>帮助中心</a>
            </section>
          </li>
          <li class='menu slogan'>
            <a href='/shopping/showcart/' data-hover='dropdown' data-delay='0' rel='nofollow' aria-expanded='false'>
              联系客服
            </a>
          </li>
        </ul>
      </section>
    </section>
    <header>
      <router-link to="/" class="logo">
        <p>迅速 新鲜 快捷</p>
        <i>www.xianhuan.com</i>
      </router-link>
      <section class="search">
        <el-input v-model="query" placeholder="情人节送花">
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
        <span class="help-block">
          <a href="" target="_blank">红玫瑰</a>
          <a href="" target="_blank">永生花</a>
          <a href="" target="_blank">生日鲜花</a>
          <a href="" target="_blank">礼品卡</a>
        </span>
      </section>
    </header>
    <section class="menu-tab">
      <section class='container'>
        <ul>
          <li v-for="(i, index) in menus" :key="index">
            <a href="">{{i}}</a>
          </li>
        </ul>
      </section>
    </section>
  </section>
</template>

<script>
export default {
  data () {
    return {
      orderShow: false,
      collactionShow: false,
      query: '',
      menus: [
        '首页推荐',
        '鲜花鲜花',
        '新品秒杀',
        '今日特价',
        '今日优惠',
        '今日特价',
        '今日秒杀',
        '今日特惠'
      ]
    }
  },
  methods: {
    showOrder () {
      this.orderShow = true
    },
    hideOrder () {
      this.orderShow = false
    },
    showCollection () {
      this.collactionShow = true
    },
    hideCollection () {
      this.collactionShow = false
    }
  }
}
</script>
