<style lang="scss" scoped>
  @import "../assets/scss/Detail";
</style> 

<template> 
  <section id="detail" class="container">
    <section class="breadcrumb">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>鲜花</el-breadcrumb-item>
        <el-breadcrumb-item>爱是唯一 鲜花礼盒</el-breadcrumb-item>
      </el-breadcrumb>
    </section>
    <section class="cart">
      <el-row :gutter="20">
        <el-col :span="12">
          <div class="product-l">
            <div class="pro-bigimage">
              <img :src="defaultPreview" height="430" width="470">
            </div>
            <ul class="pro-thumb">
              <li v-for="(i, index) in preview" :key="index" @mouseenter="goPreview(index)" :class="{ 'active': index === bigCurrent }">
                <img :src="i.img">
              </li>
            </ul>
          </div>
        </el-col>
        <el-col :span="12">
          <div class="product-r">
            <div class="title">
              <h3>{{title}}</h3>
            </div>
            <div class="attribute">
              <dl v-for="(attr, index) in attrs" :key="index">
                <dt>{{attr.title}}</dt>
                <dd>{{attr.msg}}</dd>
              </dl>
            </div>
            <div class="cascader">
              配 送至：
              <v-distpicker></v-distpicker>
            </div>
            <hr>
            <div class="flower-sku-box">
              <span v-for="(product, index) in products" :key="index">
                <router-link :to="{ path: 'detail', query: { id: product.id }}" class="product-item">
                  <div class="active flower-sku">
                    <img :src="product.img">
                    <i class="ico ico-check"></i>
                    {{product.name}}
                  </div>
                </router-link>
              </span>
            </div>
            <div class="price">
              <div class="price-original">市场价：￥{{originalPrice}}</div>
              <div class="price-sell">花礼价：<strong>
                <em class="price-sign">¥</em>
                <em class="price-num">{{sellPrice}}</em></strong>
              </div>
            </div>
            <!--app微信专享价-->
            <div class="appzx">
              <ul>
                <li class="plft">
                  促销信息：
                  <img src="//img02.hua.com/pc/pimg/appzx_01.png">
                  <span class="share-price">
                    ￥<strong>{{appPrice}}</strong>
                  </span>
                </li>
                <li class="dropdown">
                  <span class="ico ico-wxrwm"></span>
                  <span @mouseenter="showApp" @mouseleave="hideApp">
                    去APP购买 <i class="el-icon-arrow-down"></i>
                  </span>
                  <section class='dropdown-menu' v-show="this.appShow">
                    <img src="//img02.hua.com/pc/pimg/app_qrcode.jpg">
                    新人专享100元大礼包
                  </section>
                </li>
                <li class="dropdown">
                  <span class="ico ico-wxrwm"></span>
                  <span @mouseenter="showWX" @mouseleave="hideWX">
                    去微信购买 <i class="el-icon-arrow-down"></i>
                  </span>
                  <section class='dropdown-menu' v-show="this.wxShow">
                    <img src="https://m.hua.com/wxapi/tempqrpic?pid=9012222&amp;userid=&amp;type=1&amp;sj=2018-7-22&amp;sign=a797bee6722bef7c">
                    扫码关注
                    <br>
                    回复"礼物" 更多惊喜！
                  </section>
                </li>
              </ul>
            </div>
            <div class="btn-buy">
                <router-link to="/" class="buy">
                  <i class="ico-cart-white"></i>立即购买
                </router-link>
                <router-link to="/" class="heart">
                  <i class="ico-heart"></i>收 藏
                </router-link>
            </div>
          </div>
        </el-col>
      </el-row>
    </section>
    <section class="pic">
      <img :src="wrapper">
    </section>
    <section class="pull">
      <el-row :gutter="20">
        <el-col :span="5">
          <div class="panel" id="latestRecord">
            <div class="panel-heading">
              <p class="title">浏览记录</p>
            </div>
            <div class="panel-body">
              <div class="side-item-s">
                <span>暂无浏览记录！</span>
              </div>
            </div>
          </div>
          <div class="panel" id="hotSell">
            <div class="panel-heading">
              <p class="title">热销推荐</p>
            </div>
            <div class="panel-body">
              <div class="side-item" v-for="(sideItem, index) in sideItems" :key="index">
                <div class="img-box">
                  <router-link to="/detail">
                    <img :src="sideItem.img" :alt="sideItem.name">
                  </router-link>
                </div>
                <div class="info-cont">
                  <div class="title">
                    <router-link to="/detail" class="product-title">
                      {{sideItem.name}}
                    </router-link>
                  </div>
                  <div class="price">
                    <span class="price-sign">¥</span>
                    <span class="price-num">{{sideItem.price}}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </el-col>
        <el-col :span="19">
            <!-- 商品详情 -->
            <ul class="tabs">
              <li class="tabs-item active">
                <span @click="goAnchor('#Details')">商品详情</span>
              </li>
              <li class="tabs-item">
                <span  @click="goAnchor('#Comment')">用户评价</span>
              </li>
              <li class="tabs-item">
                <span @click="goAnchor('#Server')">购物保障</span>
              </li>
            </ul>
            <div id="Details" class="tabs-panel">
              <p v-for="(item, index) in details" :key="index">
                <img :src="item" :alt="item"> 
              </p>
            </div>
            <!-- 用户评价 -->
            <ul class="tabs">
              <li class="tabs-item">
                <span @click="goAnchor('#Details')">商品详情</span>
              </li>
              <li class="tabs-item active">
                <span  @click="goAnchor('#Comment')">用户评价</span>
              </li>
              <li class="tabs-item">
                <span @click="goAnchor('#Server')">购物保障</span>
              </li>
            </ul>
            <div id="Comment" class="tabs-panel">
                <div class="comment-bd">
                  <font>
                    本商品评价
                    <font color="red">{{comments.count}}</font>条，最近所有商品评价
                    <font color="red">{{comments.allCount}}</font>条
                  </font>
                </div>
                <dl v-for="(i, index) in comments.list" :key="index">
                  <dt>
                    <img :src="i.img" height="63" width="58">
                    {{i.phone}}<br>{{i.area}}
                  </dt>
                  <dd>
                    <div class="hd">
                      <span class="pull-right">{{i.time}}</span>
                      整体评分：
                      <img src="//img02.hua.com/pc/member/images/review_img/review_star_fen.gif" align="absmiddle" v-for="i in i.rank" :key="i">
                    </div>
                    <div class="bd">
                      <p class="text-justify">{{i.msg}}</p>
                    </div>
                  </dd>
                </dl>
                <div class="comment-ft">
                    本商品评价<font color="red">{{comments.count}}</font>条【<router-link to="/detail">查看本商品全部评价</router-link>】【<router-link to="/detail">查看所有商品评价</router-link>】
                </div>
            </div>
            <!-- 购物保障 -->
            <ul class="tabs">
              <li class="tabs-item">
                <span @click="goAnchor('#Details')">商品详情</span>
              </li>
              <li class="tabs-item">
                <span  @click="goAnchor('#Comment')">用户评价</span>
              </li>
              <li class="tabs-item active">
                <span @click="goAnchor('#Server')">购物保障</span>
              </li>
            </ul>
            <div id="Server" class="tabs-panel">
              <ul class="tab-indicators">
                <li v-for="(i, index) in indicators" :key="index" @mouseenter="goServer(index)" :class="{ 'active': index === serCurrent }">
                  <i :class="i.logo" :ref="i.logo"></i>{{i.name}}
                </li>
              </ul>
              <div class="tab-content">
                <div class="tab-pane">
                  <img :src="defaultServer" height="350" width="910">
                </div>
              </div>
            </div>
        </el-col>
      </el-row>
    </section>
  </section>
</template>

<script>
  import VDistpicker from 'v-distpicker'

  export default {
    components: {
      VDistpicker
    },
    data () {
      return {
        appShow: false,
        wxShow: false,
        title: '爱是唯一 鲜花礼盒----雪山白玫瑰11枝、白百合3枝',
        areaText: '请选择',
        bigCurrent: 0,
        defaultPreview: '',
        preview: [{
          id: '1',
          img: '//img01.hua.com/uploadpic/newpic/9012078.jpg'
        }, {
          id: '2',
          img: '//img01.hua.com/uploadpic/newpic/201708091818414871.jpg'
        }, {
          id: '3',
          img: '//img01.hua.com/uploadpic/newpic/201708091818468453.jpg'
        }, {
          id: '4',
          img: '//img01.hua.com/uploadpic/newpic/201708091818522407.jpg'
        }],
        attrs: [
          {
            title: '类 别：',
            msg: '鲜花-鲜花礼盒 编 号：9012222'
          },
          {
            title: '材 料：',
            msg: '雪山白玫瑰11枝、白百合3枝、银叶菊0.5扎、栀子叶2枝'
          },
          {
            title: '包 装：',
            msg: '蓝灰色绝色纸1张，灰色雾面纸1张，白蓝细纹罗文带1米、60#大号魔力铁山灰包装盒'
          },
          {
            title: '花 语：',
            msg: '我把你当作我的空气，捧你在我手心，在爱的纯净世界，你就是我唯一，我唯一爱的就是你！'
          },
          {
            title: '附 送：',
            msg: '下单填写留言，即免费赠送精美贺卡！'
          },
          {
            title: '配 送：',
            msg: '限送100多个主要城市的市区及近郊：北京,上海,深圳,广州,成都,武汉,南京,杭州,苏州,天津,西安,长沙,东莞,厦门,佛山,沈阳,合肥,重庆,大连,郑州,青岛,太原,无锡,石家庄,济南,宁波,哈尔滨,乌鲁木齐,贵阳,昆明,福州,长春,南昌,兰州,珠海,南宁,中山,常州,金华,邯郸,泉州,海口,嘉兴,南通,呼和浩特,廊坊,唐山,温州,徐州,绵阳,烟台,襄阳,保定,潍坊,镇江,衡阳,包头,赣州,扬州,清远,荆州,莆田,汉中,洛阳,湛江,九江,鞍山,大庆,秦皇岛,张家口,桂林,吉林,淄博,蚌埠,柳州,遵义,邢台,宜春,漳州,三亚,宜宾,东营,临沂,德州,开封,大同,龙岩,齐齐哈尔,连云港,新乡,黄冈,焦作,十堰,驻马店,信阳,牡丹江,黄石,宝鸡,丹东,阜阳,北海,聊城,锦州,许昌,内江,萍乡,安庆,承德,商丘,盘锦,乐山,沧州,河源,营口,平顶山,临汾,韶关,日照,新余,晋城,松原,淮北,淮南,晋中,潮州,滨州,自贡,六安,株州,濮阳,常熟,晋江,顺德,江阴,吴江,昆山,义乌,惠阳,银川,温江,燕郊,新都,涿州,南沙,宜兴,即墨,海安县,都江堰,增城,仙桃,菏泽'
          }
        ],
        originalPrice: '379',
        sellPrice: '296',
        appPrice: '290',
        products: [
          {
            id: 1,
            name: '爱是唯一',
            img: '//img01.hua.com/uploadpic/newpic/9012222.jpg_80x87.jpg'
          },
          {
            id: 2,
            name: '向日葵的夏天',
            img: '//img01.hua.com/uploadpic/newpic/9012201.jpg_80x87.jpg'
          },
          {
            id: 3,
            name: '馨情无限',
            img: '//img01.hua.com/uploadpic/newpic/9012200.jpg_80x87.jpg'
          },
          {
            id: 4,
            name: '暖暖的问候',
            img: '//img01.hua.com/uploadpic/newpic/9012221.jpg_80x87.jpg'
          },
          {
            id: 5,
            name: '浪漫告白',
            img: '//img01.hua.com/uploadpic/newpic/9012223.jpg_80x87.jpg'
          },
          {
            id: 6,
            name: '我只钟情你',
            img: '//img01.hua.com/uploadpic/newpic/9012196.jpg_80x87.jpg'
          }
        ],
        wrapper: '//img01.hua.com/uploadpic/images/f_9012222.jpg',
        sideItems: [
          {
            name: '鲜花/真爱如初-雪山玫瑰11枝、深紫色勿忘我0.3扎',
            img: '//img01.hua.com/uploadpic/newpic/9010947.jpg_220x240.jpg',
            price: '206'
          },
          {
            name: '鲜花/真爱如初-雪山玫瑰11枝、深紫色勿忘我0.3扎',
            img: 'https://img01.hua.com/uploadpic/newpic/9012038.jpg_220x240.jpg',
            price: '206'
          },
          {
            name: '鲜花/真爱如初-雪山玫瑰11枝、深紫色勿忘我0.3扎',
            img: '//img01.hua.com/uploadpic/newpic/9010947.jpg_220x240.jpg',
            price: '206'
          },
          {
            name: '鲜花/真爱如初-雪山玫瑰11枝、深紫色勿忘我0.3扎',
            img: 'https://img01.hua.com/uploadpic/newpic/9012038.jpg_220x240.jpg',
            price: '206'
          }
        ],
        details: [
          '//img01.hua.com/uploadpic/images/by_20180611163400921.jpg',
          '//img01.hua.com/uploadpic/images/by_20180629161207395.jpg',
          '//img01.hua.com/uploadpic/images/2017471318363721286.jpg',
          '//img01.hua.com/uploadpic/images/2017471318411266253.jpg',
          '//img01.hua.com/uploadpic/images/2017471319177740359.jpg',
          '//img01.hua.com/uploadpic/images/by_20180719143427875.jpg',
          '//img02.hua.com/pc/images/xianhua_cardstyle.jpg'
        ],
        comments: {
          count: '1416',
          allCount: '261846',
          list: [
            {
              img: '//img01.hua.com/uploadpic/newpic/9012078.jpg_80x87.jpg',
              phone: '150****3718',
              area: '湖北襄阳市保康***',
              time: '评价时间：2018-07-21  IP：223.104.14.1*',
              msg: '评价内容：花不错，配送很快',
              rank: 5
            },
            {
              img: '//img01.hua.com/uploadpic/newpic/9012078.jpg_80x87.jpg',
              phone: '150****3718',
              area: '湖北襄阳市保康***',
              time: '评价时间：2018-07-21  IP：223.104.14.1*',
              msg: '评价内容：花不错，配送很快',
              rank: 5
            },
            {
              img: '//img01.hua.com/uploadpic/newpic/9012078.jpg_80x87.jpg',
              phone: '150****3718',
              area: '湖北襄阳市保康***',
              time: '评价时间：2018-07-21  IP：223.104.14.1*',
              msg: '评价内容：花不错，配送很快',
              rank: 5
            },
            {
              img: '//img01.hua.com/uploadpic/newpic/9012078.jpg_80x87.jpg',
              phone: '150****3718',
              area: '湖北襄阳市保康***',
              time: '评价时间：2018-07-21  IP：223.104.14.1*',
              msg: '评价内容：花不错，配送很快',
              rank: 5
            },
            {
              img: '//img01.hua.com/uploadpic/newpic/9012078.jpg_80x87.jpg',
              phone: '150****3718',
              area: '湖北襄阳市保康***',
              time: '评价时间：2018-07-21  IP：223.104.14.1*',
              msg: '评价内容：花不错，配送很快',
              rank: 5
            },
            {
              img: '//img01.hua.com/uploadpic/newpic/9012078.jpg_80x87.jpg',
              phone: '150****3718',
              area: '湖北襄阳市保康***',
              time: '评价时间：2018-07-21  IP：223.104.14.1*',
              msg: '评价内容：花不错，配送很快',
              rank: 5
            }
          ]
        },
        indicators: [{
          logo: 'ico-server-go1',
          name: '13年品牌',
          img: '//img02.hua.com/pc/pimg/server_01.jpg'
        }, {
          logo: 'ico-server-go2',
          name: '销量第一',
          img: '//img02.hua.com/pc/pimg/server_02.jpg'
        }, {
          logo: 'ico-server-go3',
          name: '400万用户+信赖',
          img: '//img02.hua.com/pc/pimg/server_03.jpg'
        }, {
          logo: 'ico-server-go4',
          name: '订单实拍',
          img: '//img02.hua.com/pc/pimg/server_04.jpg'
        }, {
          logo: 'ico-server-go5',
          name: '销量3小时配送第一',
          img: '//img02.hua.com/pc/pimg/server_05.jpg'
        }, {
          logo: 'ico-server-go6',
          name: '200%退赔承诺',
          img: '//img02.hua.com/pc/pimg/server_06.jpg'
        }],
        serCurrent: 0,
        defaultServer: ''
      }
    },
    mounted () {
      this.defaultServer = this.indicators[0].img
      this.defaultPreview = this.preview[0].img
    },
    methods: {
      showApp () {
        this.appShow = true
      },
      hideApp () {
        this.appShow = false
      },
      showWX () {
        this.wxShow = true
      },
      hideWX () {
        this.wxShow = false
      },
      goAnchor (selector) {
        this.$el.querySelector(selector).scrollIntoView(true)
      },
      goServer (index) {
        this.serCurrent = index
        this.defaultServer = this.indicators[index].img
      },
      goPreview (index) {
        this.bigCurrent = index
        this.defaultPreview = this.preview[index].img
      }
    }
  }
</script> 