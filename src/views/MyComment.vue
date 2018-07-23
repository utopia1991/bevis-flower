<style lang="scss" scope>
table {
    font-size: 12px;
}
.history-order:hover {
    color: #ff6a00;
}
</style>

<template>
    <div class="box-border member-r">
        <div class="order-wrap">
            <div class="title">
                我的评价
            </div>
            <div class="content order-panel">
                <div>
                    <table width="100%" border="0" cellspacing="0" cellpadding="0" align="center">
                        <tbody>
                            <tr>
                                <td>
                                    <div align="center">
                                        <font color="#CC0000">暂无评价记录！</font>
                                        <br><br>
                                        您的鼓励和建议，是我们前进的动力，我们期待您的评价！
                                        <br>欢迎您点击
                                        <router-link to="/member/myOrder">
                                            <u class="history-order">查看所有历史订单</u>
                                        </router-link>，对已配送订单做出评价，谢谢！
                                    </div>
                                    <div class="digg"></div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>