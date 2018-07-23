<style lang="scss" scope>
  @import "../assets/scss/MyOrder.scss";
</style>

<template>
  <div class="box-border member-r">
    <div class="title">您好，欢迎进入会员中心</div>
    <div class="member-info">
      <div class="user">
        <div class="avatar">
          <span>
              <img :src="avatar">
          </span>
        </div>
        <p>
          {{user}}<br><i class="ico-pthy"></i>{{member}}
        </p>
      </div>
      <div class="my-counts">
        <router-link :to="o.url" v-for="(o, index) in orders" :key="index">
          <b><i :class="'ico-m-' + o.type"></i></b>
          {{o.name}} {{o.count}}
        </router-link>
      </div>
      <ul class="my-stuffs list-unstyled">
        <li v-for="(i, index) in coupon" :key="index">
          <router-link :to="i.url">{{i.name}}: {{i.count}}</router-link>
        </li>
      </ul>
      <div class="verify-mobile">
        <p>
          您验证的手机是：{{phone}}
        </p>
        <router-link to='/' class="change-phone">
          修改<i class="el-icon-arrow-right"></i>
        </router-link>
      </div>
    </div>
    <div class="how-vip">
        <h3>如何成为VIP</h3>
        <p>您在hua.com成功购物一次，送货完毕后系统将自动将您的会员级别升至VIP，享受鲜花最高9折优惠。<br>会员级别将在送货完毕后一个工作日内完成升级，重大节日（即情人节、母亲节、七夕节、圣诞节和春节）需二个工作日左右。</p>
    </div>
    <div class="member-panel">
      <div class="hd">
        <router-link to="/">查看更多收藏 &gt;&gt; </router-link>
        <h4>我的收藏</h4>
      </div>
      <div class="bd">
        <p align="center"></p><center><font color="red"><b>您好,您没有收藏的记录</b></font></center><p></p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        avatar: '//img02.hua.com/pc/assets/img/avatar_default_09.jpg',
        user: '12321312213',
        phone: '123****213',
        member: '普通会员',
        orders: [{
          url: '/',
          name: '待付款',
          type: 'pay',
          count: '0'
        }, {
          url: '/',
          name: '今日配送',
          type: 'receive',
          count: '0'
        }, {
          url: '/',
          name: '待评价',
          type: 'comment',
          count: '0'
        }],
        coupon: [{
          url: '/',
          name: '余额',
          count: '0'
        }, {
          url: '/',
          name: '积分',
          count: '0'
        }, {
          url: '/',
          name: '优惠券',
          count: '0'
        }]
      }
    },
    methods: {
    }
  }
</script>
