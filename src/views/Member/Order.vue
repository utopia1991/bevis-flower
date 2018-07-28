<style lang='scss' scope>
.el-table {
	font-size: 12px;
}
.el-input__inner,
.el-input__icon {
  height: 30px !important;
  line-height: 30px !important;
}
.order-panel {
  font-size: 12px;
	margin: 0 30px;
  .hd {
    width: 100%;
    height: 30px;
    background-color: #e7e7e7;
  }
  .bd {
		margin: 20px auto;
		.order-list {
			width: 100%;
			position: relative;
			top: -15px;
		}
  }
  ul {
    list-style: none;
    &:after {
      clear: both;
    }
    li {
      float: left;
    }
  }
  .order-title {
    line-height: 30px;
    text-align: center;
    .number {
      width: 220px;
    }
    .consignee {
      width: 100px;
    }
    .order-price {
      width: 130px;
    }
    .date {
      width: 160px;
    }
    .state {
      width: 150px;
      .form-control {
        display: block;
        width: 90px;
        margin: 0 auto;
      }
    }
    .operate {
      width: 100px;
    }
  }
}
</style>

<template>
	<div class='box-border member-r'>
		<div class='order-wrap'>
			<div class='title'>
				我的订单
			</div>
			<div class='order-panel'>
				<div class='hd'>
					<ul class='order-title'>
						<li class='number'>订单编号</li>
						<li class='consignee'>收货人</li>
						<li class='order-price'>订单金额</li>
						<li class='date'>配送时间</li>
						<li class='state'>
							<el-select v-model='ordertType' placeholder='请选择' @change='doSelect'>
								<el-option
									v-for='item in ordertList'
									:key='item.value'
									:label='item.label'
									:value='item.value'>
								</el-option>
							</el-select>
						</li>
						<li class='operate'>操作</li>
					</ul>
				</div>
				<div class='bd'>
					<el-table
						:show-header="false"
						class="order-list"
						:data='tableData'>
						<el-table-column prop='id' width='220' align="center" show-overflow-tooltip></el-table-column>
						<el-table-column prop='name' width='100' align="center" show-overflow-tooltip></el-table-column>
						<el-table-column prop='count' width='130' align="center" show-overflow-tooltip></el-table-column>
						<el-table-column prop='time' width='160' align="center" show-overflow-tooltip></el-table-column>
						<el-table-column prop='state' width='150' align="center" show-overflow-tooltip></el-table-column>
						<el-table-column prop='operate' width='100' align="center" show-overflow-tooltip></el-table-column>
					</el-table>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
  data () {
    return {
      ordertType: 0,
      ordertList: [
        {
          value: 0,
          label: '全部状态'
        },
        {
          value: 1,
          label: '待付款'
        },
        {
          value: 2,
          label: '送货完毕'
        },
        {
          value: 3,
          label: '今日配送'
        },
        {
          value: 4,
          label: '待评价'
        },
        {
          value: 5,
          label: '已取消'
        }
      ],
      tableData: [
        {
          id: '12221',
          name: '王小虎',
          count: '213',
          time: '21324234233',
          state: '待付款',
          operate: 'delete'
        },
        {
          id: '21312',
          name: '23123123123',
          count: '213',
          time: '21324234233',
          state: '待付款',
          operate: 'delete'
        },
        {
          id: '122343221',
          name: '王小虎',
          count: '213',
          time: '21324234233',
          state: '待付款',
          operate: 'delete'
        },
        {
          id: '12232423421',
          name: '王小虎',
          count: '213',
          time: '21324234233',
          state: '待付款',
          operate: 'delete'
        }
      ]
    }
  },
  methods: {
    doSelect: function () {
      console.log(this.ordertType)
    }
  }
}
</script>
