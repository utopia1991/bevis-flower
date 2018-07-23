import NotFound from '@/views/404'
import Layout from '@/components/Layout'
import Index from '@/views/Index'
import Detail from '@/views/Detail'
import Member from '@/components/Member'
import MyOrder from '@/views/MyOrder'
import MyIntegration from '@/views/MyIntegration'
import MyMessage from '@/views/MyMessage'

// 配置路由
const routes = [
  { path: '/404', component: NotFound, name: '404' },
  { path: '/', component: Layout, redirect: { path: '/index' },
    children: [
      { path: 'index', component: Index, name: '首页' },
      { path: 'detail', component: Detail, name: '详情页' },
      { path: '/member', component: Member, redirect: { path: '/member/myOrder' },
        children: [
          { path: 'myOrder', component: MyOrder, name: '我的订单' },
          { path: 'myIntegration', component: MyIntegration, name: '我的积分' },
          { path: 'myMessage', component: MyMessage, name: '个人信息' }
        ]
      }
    ]
  },
  { path: '*', hidden: true, redirect: { path: '/404' } }
]

export default routes
