<style lang='scss' scope>
@import '../../assets/scss/Message.scss';
.el-checkbox + .el-checkbox,
.el-radio + .el-radio {
  margin-left: 10px !important;
}
#alarmBirthday {
  .ignore-month {
    margin-left: 15px;
  }
  .method-tip {
    margin: -5px 0;
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
			<div class='member-base-l'>
				<ul class='mb-tab'>
					<li class='active'>
						<router-link to='/'>生日提醒</router-link>
					</li>
					<li>
						<router-link to='/'>纪念日提醒</router-link>
					</li>
				</ul>
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
			</div>
		</div>
	</div>
</template>

<script>
export default {
  data () {
    return {
      phone: '129*****234',
      email: '空',
      dateOptions: ['当天', '提前一天', '提前三天', '提前一周', '不提醒'],
      birthdayForm: {
        name: '',
        sex: '0',
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
