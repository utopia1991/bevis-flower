<template>
	<section id='footer'>
		<section class='container'>
			<el-row :gutter='10'>
				<el-col :span='6' v-for='tag in tags' :key='tag.name'>
					<h4>{{tag.name}}</h4>
					<ul class='list-unstyled'>
						<li v-for='li in tag.list' :key='li'>
							<a href='/help/default.htm'>{{li}}</a>
						</li>
					</ul>
				</el-col>
			</el-row>
		</section>
		<section class='auth'>
			<div class='logo'>
				<a href='' target='_blank'>
          <img src='//img02.hua.com/pc/assets/img/zfb.gif' height='49' width='96'>
        </a>
				<a href='' target='_blank'>
          <img src='//img02.hua.com/pc/assets/img/bico1.jpg' alt='ICP' height='46' width='35'>
        </a>
				<a href='' target='_blank'>
          <img alt='工商网监' src='//img02.hua.com/pc/assets/img/bico4.jpg' height='46' width='35'>
        </a>
				<a href='' target='_blank'>
          <img src='//img02.hua.com/pc/assets/img/bico3.jpg' alt='网安' height='46' width='35'>
        </a>
			</div>
			<p>欢乐鲜花 - 网上花点领先品牌，鲜花速运专家</p>
			<p>厦门鲜花传媒有限公司</p>
			<p>粤ICP备09171662号</p>
		</section>
	</section>
</template>

<script>
export default {
  data () {
    return {
      tags: [
        {
          name: '客户服务',
          list: [
            '服务声明',
            '配送范围',
            '配送说明',
            '隐私条款',
            '支付说明',
            '安全条款'
          ]
        },
        {
          name: '售后服务',
          list: [
            '订单处理',
            '在线支付',
            '投诉处理规范',
            '订单查询及撤销',
            '修改订单信息说明'
          ]
        },
        {
          name: '相关知识',
          list: [
            '浪漫花语',
            '鲜花只数寓意',
            '节日送花寓意',
            '永生花知识',
            '花卉过敏者请看'
          ]
        },
        {
          name: '联系我们',
          list: [
            '全国订购热线（24小时在线）：400-888-666',
            '在线客服',
            '客服工作时间：8:00-21:00',
            'E-mail：1300131031@qq.com'
          ]
        }
      ]
    }
  }
}
</script>
