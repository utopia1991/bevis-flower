<style lang="scss" scope>
  @import "../assets/scss/MyIntegration.scss";
</style>

<template>
  <div class="box-border member-r">
    <div class="order-wrap">
			<div class="title">
				我的积分
			</div>
			<div class="order-panel">
				<div>
					您当前的积分：<strong class="integration">{{integration}}</strong>
					<span class="line"></span>
					<dl>
						<dt style="margin-bottom: 10px;"><strong>积分规则：</strong></dt>
						<dd v-for="(rule,index) in rules" :key="index" class="rules">{{rule}}</dd>
					</dl>
				</div>
				<h4>积分交易记录</h4>
				<div>
					<center>
						<font color="red"><b>您好，您暂无订购记录。</b></font>
					</center>
					<div class="digg"></div>
				</div>
			</div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        integration: '0',
        rules: [
          '■ 1积分相当于人民币10分(0.1元)，积分不可兑换现金，可用于兑换优惠券或积分礼品',
          '■ 2012.12.06起送货完毕后可获取积分数为：订单金额 * 10%',
          '■ 评价订单可获30积分（限送货完毕后30天内可评价）',
          '■ 其它送积分活动将陆续推出......'
        ]
      }
    },
    methods: {
    }
  }
</script>