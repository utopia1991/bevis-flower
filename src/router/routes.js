import NotFound from '@/views/404'
import Layout from '@/components/Layout'
import Index from '@/views/Index'
import Detail from '@/views/Detail'
import Member from '@/components/Member'
import Order from '@/views/Member/Order'
import Comment from '@/views/Member/Comment'
import Favorite from '@/views/Member/Favorite'
import Integration from '@/views/Member/Integration'
import Message from '@/views/Member/Message'
import Birthday from '@/views/Member/Birthday'
import Account from '@/views/Member/Account'
import Address from '@/views/Member/Address'

// 配置路由
const routes = [
  { path: '/404', component: NotFound, name: '404' },
  { path: '/', component: Layout, redirect: { path: '/index' },
    children: [
      { path: 'index', component: Index, name: '首页' },
      { path: 'detail', component: Detail, name: '详情页' },
      { path: '/member', component: Member, redirect: { path: '/member/order' },
        children: [
          { path: 'order', component: Order, name: '我的订单' },
          { path: 'comment', component: Comment, name: '我的评价' },
          { path: 'favorite', component: Favorite, name: '我的收藏' },
          { path: 'integration', component: Integration, name: '我的积分' },
          { path: 'message', component: Message, name: '个人信息' },
          { path: 'birthday', component: Birthday, name: '生日/纪念日提醒' },
          { path: 'account', component: Account, name: '我的虚拟账户' },
          { path: 'address', component: Address, name: '常用收货人' }
        ]
      }
    ]
  },
  { path: '*', hidden: true, redirect: { path: '/404' } }
]

export default routes
