<style lang='scss' scope>
@import '../../assets/scss/Account.scss';
</style>

<template>
	<div class='box-border member-r'>
		<div class='order-wrap'>
			<div class='title'>
				我的虚拟账户
			</div>
			<div class='content'>
				<div class='account'>
					<table border='0' cellspacing='0' cellpadding='5'>
						<tbody>
							<tr>
								<td height='202' style='line-height:200%'>
									<strong>
										<font>
											您目前的帐户余额是：<br>
											<span class='money'>
												<font color='#FF0000'>人民币: {{money}}元</font>
											</span>
											<br>
											<div class='spmc3'>
												<p>最近余额变动记录：</p>
												<table cellspacing='0' cellpadding='0'>
													<tbody>
														<tr>
															<td align='center' bgcolor='#f6fce5'>日期</td>
															<td align='center' bgcolor='#f6fce5'>变动额</td>
															<td align='center' bgcolor='#f6fce5'>状态</td>
															<td align='center' bgcolor='#f6fce5'>说明</td>
														</tr>
														<tr>
															<td colspan='4' class="record">暂无记录</td>
														</tr>
													</tbody>
												</table>
											</div>
											<br>
										</font>
									</strong>
									<strong>说明：</strong><br>
									（1）您订购中国鲜花礼品网任何在售商品，均可使用本帐户余额进行抵扣。<br>
									（2）如果您下单的金额低于帐户余额，我们工作人员会自动扣除相应金额。<br>
									（3）如果您下单的金额高于帐户余额，则需要您补交差额货款，补交货款请点击：<br>
									<a href='/member/payment/balancefill' target='_blank'><u>https://www.hua.com/member/payment/balancefill</u></a>
									<p> 温馨提醒：如果您有帐户余额，建议您提交订单时在“特殊要求栏”注明从帐户余额中抵扣多少金额，以便我们更准确快捷的为您做抵扣操作。</p>
								</td>
							</tr>
							<tr>
								<td>
									<table width='100%' border='0' cellspacing='0' cellpadding='0'>
										<tbody>
											<tr>
												<td align='center' bgcolor='#cccccc' height='1'></td>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
							<tr>
								<td height='28' align='center'>
									<font class='text-primary'><strong>帐户充值</strong></font>
								</td>
							</tr>
							<tr>
								<td style='line-height:200%'>
									您可以选择每次提交订单后，直接按支付引导完成该次支付。
									<br>
									如果您不想每张订单都独立支付，可点击如下链接充值具体金额到您的虚拟帐户，充值成功后，即可使用帐户余额进行抵扣。
									<br>
									<br>
									<font color='#CC0000'>特别提示：</font>
									<br>
									（1）充值完成后，财务需一个工作日确认及冲入您的虚拟帐户。如需要即时入帐和处理，请联系客服。
									<br>
									（2）现金充入虚拟帐户后，不能退款，谢谢您的合作。
									<br>
									（3）充值支付时，将把会员ID（会员唯一标识）作为支付订单号，请不要更改，以确保通过如下链接支付成功后余额计入您的会员号，敬请注意！您的会员ID是：
									<font color='red'>{{memeberId}}</font>
								</td>
							</tr>
							<tr v-for='(rule, index) in payRules' :key='index'>
								<td height='40'>
									<font color='#545454'>{{rule.title}}</font>
									<router-link :to='rule.url'>
										<img :src='rule.img' class="pay-rules">
									</router-link>
								</td>
							</tr>
							<tr>
								<td height='40' align='center'></td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
  data () {
    return {
      money: '0',
      memeberId: '2655947',
      payRules: [
        {
          title: 'a.充值500元：',
          img: '//img02.hua.com/pc/assets/img/04member_chongzhi_500.gif',
          url: ''
        },
        {
          title: 'b.充值1000元：',
          img: '//img02.hua.com/pc/assets/img/04member_chongzhi_1000.gif',
          url: ''
        },
        {
          title: 'c.充值2000元：',
          img: '//img02.hua.com/pc/assets/img/04member_chongzhi_2000.gif',
          url: ''
        }
      ]
    }
  }
}
</script>
