<style lang='scss' scope>
@import '../../assets/scss/Address.scss';
</style>

<template>
    <div class='box-border member-r' id='addressList'>
        <div class='order-wrap'>
            <div class='title'>
                常用收货人
            </div>
            <div class='address-wrap'>
                <div class='address-wrap'>
                    <div class='address-add'>
                        <span class='btn' @click='dialogFormVisible = true'>新增收货地址</span>
                        <span class='tip'>您已创建 <b>{{addressCount}}</b> 个收货地址，最多可建 <b>20</b> 个</span>
                    </div>
                    <div class='address-info' v-if='addressList.length === 0'> 
                        <center>
                            <font color='red'><b>您好，您暂时没有收货地址</b></font>
                        </center>
                    </div>
                    <div v-else>
                        <div v-for='(i, index) in addressList' :key='index' class='address-info'>
                            <button type='button' class='close' @click='deleteAddress(i.id)'><span>×</span></button>
                            <h5>{{i.name}}</h5>
                            <ul class='address-list'>
                                <li><b>收货人：</b>{{i.name}}</li>
                                <li><b>所在地区：</b>{{i.area}}</li>
                                <li><b>地址：</b>{{i.address}}</li>
                                <li><b>手机：</b>{{i.phone}}</li>
                                <li><b>固定电话：</b>{{i.tel}}</li>
                            </ul>
                            <div class='operate'>
                                <span @click='defaultAddress(i.id)'>设为默认</span>
                                <span @click='editAddress(i.id)'>编辑</span>
                            </div>
                        </div>
                    </div>
                    <div class='address-add'>
                        <span class='btn' @click='dialogFormVisible = true'>新增收货地址</span>
                        <span class='tip'>您已创建 <b>{{addressCount}}</b> 个收货地址，最多可建 <b>20</b> 个</span>
                    </div>
                </div>
            </div>
        </div>
        <el-dialog title='新增收货地址' :visible.sync='dialogFormVisible' :close-on-click-modal='dialogClose' class='address-form'>
            <el-form :model='form'>
                <el-form-item label='收货人姓名:' :label-width='formLabelWidth'>
                    <el-input v-model='form.name' auto-complete='off' style='width: 160px'></el-input>
                </el-form-item>
                <el-form-item label='收货人手机:' :label-width='formLabelWidth'>
                    <el-input v-model='form.phone' auto-complete='off' style='width: 160px'></el-input>
                    &nbsp;&nbsp;&nbsp;或电话:&nbsp;&nbsp;&nbsp;
                    <el-input v-model='form.tel' auto-complete='off' style='width: 160px'></el-input>
                </el-form-item>
                <el-form-item label='省 市 区:' :label-width='formLabelWidth'>
                    <v-distpicker :placeholders='placeholders' @selected='onSelected'></v-distpicker>
                    <div class='area-tip'>注：如果你不确定区或县名称，请选择“其它”</div>
                </el-form-item>
                <el-form-item label='详细地址:' :label-width='formLabelWidth'>
                    <el-input v-model='form.address' auto-complete='off' style='width: 80%'></el-input>
                </el-form-item>
            </el-form>
            <p class='submit-btn'>
                <el-button type='primary' @click='submit'>保存收货人信息</el-button>
            </p>
        </el-dialog>
    </div>
</template>

<script>
export default {
  data () {
    return {
      addressList: [
        {
          id: 1,
          name: 'df',
          area: 'df',
          address: 'erwr23rewfw',
          phone: '12321312312',
          tel: '2131231'
        },
        {
          id: 2,
          name: 'df232',
          area: '内蒙古 > 呼和浩特市 > 新城区',
          address: 'erwr23rewfw',
          phone: '2132132131',
          tel: '21321312'
        }
      ],
      addressCount: 0,
      dialogFormVisible: false,
      dialogClose: false,
      formLabelWidth: '100px',
      placeholders: {
        province: '请选择省份',
        city: '请选择城市',
        area: '请选择区县'
      },
      form: {
        name: '',
        phone: '',
        tel: '',
        region: '',
        address: ''
      }
    }
  },
  methods: {
    submit () {
      console.log(this.form)
    },
    onSelected (e) {
      this.form.region = e.province.value + e.city.value + e.area.value
    },
    defaultAddress (e) {
      console.log(e)
    },
    editAddress (e) {
      console.log(e)
    },
    deleteAddress (e) {
      console.log(e)
    }
  }
}
</script>