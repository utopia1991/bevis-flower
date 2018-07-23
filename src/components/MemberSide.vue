<style scoped lang="scss">
  @import "../assets/scss/Member.scss";
</style>

<template>
  <div class="box-border member-l">
    <div class="hd"><b></b>会员中心</div>
    <ul class="bd">
      <li v-for="(i, index) in sideList" :key="index">
        <router-link :to="i.url">
          <i :class="'ico-' + i.type"></i>{{i.name}}
        </router-link>
        <ul>
          <li v-for="(sub, index) in i.subList" :key="index">
            <router-link :to="sub.url">
              {{sub.name}}
            </router-link>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        sideList: [{
          name: '会员首页',
          type: 'member',
          url: '/',
          subList: []
        }, {
          name: '订单信息',
          type: 'order',
          url: '/member/myOrder',
          subList: [{
            name: '我的订单',
            url: '/member/myOrder'
          }, {
            name: '已取消订单',
            url: '/member/myOrder'
          }, {
            name: '我的评价',
            url: '/member/myOrder'
          }, {
            name: '我的收藏',
            url: '/member/myOrder'
          }]
        }, {
          name: '积分管理',
          type: 'jifeng',
          url: '/member/myIntegration',
          subList: [{
            name: '我的积分',
            url: '/member/myIntegration'
          }, {
            name: '积分兑换',
            url: '/member/myIntegration'
          }]
        }, {
          name: '账户设置',
          type: 'accout',
          url: '/member/myMessage',
          subList: [{
            name: '个人信息',
            url: '/member/myMessage'
          }, {
            name: '常用收货人',
            url: '/member/myMessage'
          }, {
            name: '修改密码',
            url: '/member/myMessage'
          }, {
            name: '修改登录名',
            url: '/member/myMessage'
          }, {
            name: '生日/纪念日提醒',
            url: '/member/myMessage'
          }, {
            name: '关联QQ/微信账号',
            url: '/member/myMessage'
          }]
        }, {
          name: '付款设置',
          type: 'pay',
          url: '/',
          subList: [{
            name: '我的虚拟账户',
            url: '/'
          }, {
            name: '我的优惠券',
            url: '/'
          }, {
            name: '在线补款',
            url: '/'
          }]
        }, {
          name: '客户服务',
          type: 'serve',
          url: '/',
          subList: [{
            name: '客服留言',
            url: '/'
          }, {
            name: '投诉留言',
            url: '/'
          }, {
            name: '在线客服',
            url: '/'
          }]
        }]
      }
    }
  }
</script>
