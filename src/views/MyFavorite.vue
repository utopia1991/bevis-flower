<style lang="scss" scope>
.el-checkbox__label {
    font-size: 12px;
}
.attention-all {
  font-size: 12px;
  padding: 10px 30px;
  border-bottom: 1px solid #d9d9d9;
  padding-bottom: 50px;
  .all-l {
    float: left;
    .checkbox {
      display: inline-block;
      width: 50px;
      margin-right: 10px;
    }
    a {
      color: #809903;
    }
  }
}
.attention-list {
    .no-record {
        font-size:12px;
        color: red;
    }
}
</style>

<template>
    <div class="box-border member-r">
        <div class="order-wrap">
            <div class="title">
                我的收藏
            </div>
            <div class="content order-panel">
                <div class="attention-all">
                    <div class="all-l">
                        <div class="checkbox">
                            <label>
                                <el-checkbox v-model="checked">全选</el-checkbox>
                            </label>
                        </div>
                        <a id="cancledAttention" style="cursor:pointer">取消收藏</a>
                        <input type="hidden" name="method" id="method" value="cancled">
                    </div>
                </div>
                <div class="attention-list">
                    <center>
                        <p class="no-record">
                            <b>您好,您没有收藏的记录</b>
                        </p>
                    </center>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    data () {
      return {
        checked: ''
      }
    },
    methods: {
    }
  }
</script>