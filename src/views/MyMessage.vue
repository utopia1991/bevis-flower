<style lang='scss' scope>
@import '../assets/scss/MyMessage.scss';
</style>

<template>
    <div class='box-border member-r'>
			<div class='basic-masseage'>
				<div class='member-base-l'>
					<ul class='mb-tab'>
						<li class='active'>
							<a href='#'>基本信息</a>
						</li>
						<li>
							<a href='#'>头像照片</a>
						</li>
					</ul>
					<el-form :model='ruleForm' :rules='rules' ref='ruleForm' label-width='80px' class='basic-form'>
						<el-form-item label='真实姓名:' prop='name'>
							<el-input v-model='ruleForm.name' style="width: 200px;"></el-input>
						</el-form-item>
						<el-form-item label='性别:' prop='sex'>
							<el-radio-group v-model='ruleForm.sex'>
								<el-radio label='男' value='0'></el-radio>
								<el-radio label='女' value='1'></el-radio>
								<el-radio label='保密' value='2'></el-radio>
							</el-radio-group>
						</el-form-item>
						<el-form-item label='生日:'>
							<el-col :span='12' style="padding: 0px;">
								<el-form-item prop='date'>
									<el-date-picker type='date' placeholder='选择日期' v-model='ruleForm.date' style='width: 100%;'></el-date-picker>
								</el-form-item>
							</el-col>
							<el-col :span='12' class="surprice">
								填写有惊喜哦！
							</el-col>
						</el-form-item>
						<el-form-item label='邮箱:'>
							qq_2655947@u.hua.com
						</el-form-item>
						<el-form-item label='手机:' prop='phone'>
							123****2321
						</el-form-item>
						<el-form-item label='或电话:' prop='tel'>
							<el-input type='input' v-model='ruleForm.tel' style="width: 200px;"></el-input>
						</el-form-item>
						<el-form-item label='地址:'>
              <v-distpicker style="margin-left: -14px;"></v-distpicker>
						</el-form-item>
						<el-form-item>
							<el-input type='input' v-model='ruleForm.region' style="width: 200px;"></el-input>
						</el-form-item>
						<el-form-item>
							<el-button type='primary' @click="submitForm('ruleForm')">提交</el-button>
						</el-form-item>
					</el-form>
				</div>
				<div class='member-base-r'>
					<div class='member-info'>
						<div class='user'>
							<div class='avatar'>
								<a href='#'>
									<img src='//img02.hua.com/pc/assets/img/avatar_default_09.jpg' width='92' height='92' alt=''>
								</a>
							</div>
							<p>
								用户名：<a href='#'>qq_2655947@u.hua.com</a><br>
								<i class='ico-member-rank'></i>
								普通会员<br>会员积分：0
							</p>
						</div>
					</div>
				</div>
			</div>
    </div>
</template>

<script>
import VDistpicker from 'v-distpicker'

export default {
  components: {
    VDistpicker
  },
  data () {
    return {
      ruleForm: {
        name: '',
        sex: 0,
        region: '',
        date: '',
        phone: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入真实姓名', trigger: 'blur' },
          { min: 1, max: 50, message: '长度最少为 1 个字符', trigger: 'blur' }
        ],
        sex: [{ required: true, message: '请选择性别', trigger: 'change' }],
        phone: [{ required: true, message: '请输入手机号', trigger: 'blur' }]
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
          return false
        }
      })
    }
  }
}
</script>
