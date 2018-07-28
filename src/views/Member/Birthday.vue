<style lang='scss' scope>
@import '../../assets/scss/Message.scss';
.el-tabs__nav-wrap::after {
	height: 0 !important;
}
.el-checkbox + .el-checkbox,
.el-radio + .el-radio {
  margin-left: 10px !important;
}
.el-form-item__label {
	font-weight: 600;
}
.el-tabs__item.is-active {
	color: #ff6a00 !important;
}
.el-tabs__item {
	line-height: 50px !important;
	&:hover {
    color: #ff6a00 !important;
	}
}
.el-tabs__active-bar {
	background-color: #ff6a00 !important;
}
#alarmBirthday {
  .ignore-month {
    margin-left: 15px;
  }
  .method-tip {
    margin: -10px 0;
    font-size: pxTorem(12px);
    margin-left: 24px;
    a:hover {
      color: #ff6a00;
      text-decoration: underline;
    }
  }
}
</style>

<template>
	<div class='box-border member-r' id='alarmBirthday'>
		<div class='basic-masseage'>
			<div style='margin: 10px 30px;'>
				<el-tabs v-model='activeName'>
					<el-tab-pane label='生日提醒' name='birthday'>
						<el-form :model='birthdayForm' :rules='rules' ref='birthdayForm' label-width='80px' class='basic-form'>
							<el-form-item label='姓名:' prop='name'>
								<el-input v-model='birthdayForm.name' style='width: 200px'></el-input>
							</el-form-item>
							<el-form-item label='性别:' prop='sex'>
								<el-radio-group v-model='birthdayForm.sex'>
									<el-radio label='0'>男</el-radio>
									<el-radio label='1'>女</el-radio>
								</el-radio-group>
							</el-form-item>
							<el-form-item label='生日:' prop='birthday'>
								<el-radio v-model='birthdayForm.birthdayRadio' label='1'>公历</el-radio>
								<el-radio v-model='birthdayForm.birthdayRadio' label='2'>农历</el-radio>
								<el-checkbox v-model='birthdayForm.ignoreMonth' class='ignore-month'>忽略年份</el-checkbox>
							</el-form-item>
							<el-form-item prop='date'>
								<el-date-picker type='date' placeholder='选择日期' v-model='birthdayForm.birthday' style='width: 200px'></el-date-picker>
							</el-form-item>
							<el-form-item label='提醒日期:'>
								<el-checkbox-group v-model='birthdayForm.date'>
									<el-checkbox v-for='date in dateOptions' :label='date' :key='date'>{{date}}</el-checkbox>
								</el-checkbox-group>
							</el-form-item>
							<el-form-item label='提醒方式:'>
								<el-checkbox-group v-model='birthdayForm.methods'>
									<div>
										<el-checkbox key='message' label='message'>短信提醒</el-checkbox>
										<p class='method-tip'>
											您的会员注册手机号是 <font color='red'>{{phone}}</font> 已验证
											<router-link to='/'>修改</router-link>
										</p>
									</div>
									<div>
										<el-checkbox key='email' label='email'>Email提醒</el-checkbox>
										<p class='method-tip'>
											您的邮箱是 <font color='red'>{{email}}</font>， 
											<router-link to='/'>修改</router-link>
										</p>
									</div>
									<div>
										<el-checkbox key='weixin' label='weixin'>微信提醒</el-checkbox>
									</div>
									<div>
										<el-checkbox key='remark' label='remark'>备注</el-checkbox>
									</div>
								</el-checkbox-group>
							</el-form-item>
							<el-form-item>
								<el-button type='primary' @click="submitForm('birthdayForm')">保存</el-button>
							</el-form-item>
						</el-form>
					</el-tab-pane>
					<el-tab-pane label='纪念日提醒' name='commemoration'>
						<el-form :model='commemorationForm' :rules='rules' ref='commemorationForm' label-width='80px' class='basic-form'>
							<el-form-item label='姓名:' prop='name'>
								<el-input v-model='commemorationForm.name' style='width: 200px'></el-input>
							</el-form-item>
							<el-form-item label='性别:' prop='sex'>
								<el-radio-group v-model='commemorationForm.sex'>
									<el-radio label='0'>男</el-radio>
									<el-radio label='1'>女</el-radio>
								</el-radio-group>
							</el-form-item>
							<el-form-item label='类别:' prop='type'>
								<el-select v-model='commemorationForm' placeholder='请选择'>
									<el-option
										v-for='item in typeOptions'
										:key='item.value'
										:label='item.label'
										:value='item.value'>
									</el-option>
								</el-select>
							</el-form-item>
							<el-form-item label='纪念日:' prop='birthday'>
								<el-radio v-model='birthdayForm.birthdayRadio' label='1'>公历</el-radio>
								<el-radio v-model='birthdayForm.birthdayRadio' label='2'>农历</el-radio>
								<el-checkbox v-model='birthdayForm.ignoreMonth' class='ignore-month'>忽略年份</el-checkbox>
							</el-form-item>
							<el-form-item prop='date'>
								<el-date-picker type='date' placeholder='选择日期' v-model='birthdayForm.birthday' style='width: 200px'></el-date-picker>
							</el-form-item>
							<el-form-item label='提醒日期:'>
								<el-checkbox-group v-model='birthdayForm.date'>
									<el-checkbox v-for='date in dateOptions' :label='date' :key='date'>{{date}}</el-checkbox>
								</el-checkbox-group>
							</el-form-item>
							<el-form-item label='提醒方式:'>
								<el-checkbox-group v-model='birthdayForm.methods'>
									<div>
										<el-checkbox key='message' label='message'>短信提醒</el-checkbox>
										<p class='method-tip'>
											您的会员注册手机号是 <font color='red'>{{phone}}</font> 已验证
											<router-link to='/'>修改</router-link>
										</p>
									</div>
									<div>
										<el-checkbox key='email' label='email'>Email提醒</el-checkbox>
										<p class='method-tip'>
											您的邮箱是 <font color='red'>{{email}}</font>， 
											<router-link to='/'>修改</router-link>
										</p>
									</div>
									<div>
										<el-checkbox key='weixin' label='weixin'>微信提醒</el-checkbox>
									</div>
									<div>
										<el-checkbox key='remark' label='remark'>备注</el-checkbox>
									</div>
								</el-checkbox-group>
							</el-form-item>
							<el-form-item>
								<el-button type='primary' @click="submitForm('commemorationForm')">保存</el-button>
							</el-form-item>
						</el-form>
					</el-tab-pane>
				</el-tabs>
			</div>
		</div>
	</div>
</template>

<script>
export default {
  data () {
    return {
      activeName: 'birthday',
      phone: '129*****234',
      email: '空',
      dateOptions: ['当天', '提前一天', '提前三天', '提前一周', '不提醒'],
      typeOptions: [
        {
          value: 0,
          label: '恋爱'
        },
        {
          value: 1,
          label: '结婚'
        },
        {
          value: 2,
          label: '相识'
        },
        {
          value: 3,
          label: '入学'
        },
        {
          value: 4,
          label: '毕业'
        },
        {
          value: 5,
          label: '工作'
        },
        {
          value: 6,
          label: '自己添加'
        }
      ],
      birthdayForm: {
        name: '',
        sex: '0',
        birthdayRadio: '1',
        ignoreMonth: true,
        birthday: '',
        date: ['当天', '提前一天', '提前三天'],
        methods: ['message', 'email']
      },
      commemorationForm: {
        name: '',
        sex: '0',
        type: 1,
        birthdayRadio: '1',
        ignoreMonth: true,
        birthday: '',
        date: ['当天', '提前一天', '提前三天'],
        methods: ['message', 'email']
      },
      rules: {
        name: [
          { required: true, message: '请输入真实姓名', trigger: 'blur' },
          { min: 1, max: 50, message: '长度最少为 1 个字符', trigger: 'blur' }
        ],
        sex: [{ required: true, message: '请选择性别', trigger: 'change' }],
        phone: [{ required: true, message: '请输入手机号', trigger: 'blur' }],
        birthday: [{ required: true, message: '请输入生日', trigger: 'blur' }]
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          console.log('submit!')
        } else {
          console.log('error submit!!')
        }
      })
    }
  }
}
</script>
