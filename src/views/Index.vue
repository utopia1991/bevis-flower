<style lang="scss" scoped>
  @import "../assets/scss/Index";
</style>

<template>
  <section id="index">
    <!-- 首页轮播 -->
    <el-carousel :interval="5000" class="carousel" height="400px">
      <el-carousel-item v-for="item in items" :key="item.url">
        <a :href="item.link" target="_blank">
          <img :src="item.url" :alt="item.url" />
        </a>
      </el-carousel-item>
    </el-carousel>
    <!-- 热门标签 -->
    <section class="hot-tag">
      <section class="container">
        <p class="title">
          热门标签
          <a href="" class="more">
            更多<i class="el-icon-d-arrow-right"></i>
          </a>
        </p>
        <el-row :gutter="20">
          <el-col :span="6" v-for="tag in tags" :key="tag.name">
            <span style="font-size: 16px;">{{tag.name}}</span>
            <ul class="list">
              <li v-for="(li, index) in tag.list" :key="index">
                <a :href='li.url'>{{li.name}}</a>
              </li>
            </ul>
          </el-col>
			  </el-row>
      </section>
    </section>
    <!-- 精选推荐 -->
    <section class="selections">
      <section class="container">
        <section class="title">
          <h2>
            <i class="ico-left-arrow"></i>
            精选推荐
            <i class="ico-right-arrow"></i>
          </h2>
          <h3>SELECTIONS RECOMMENDATION</h3>
        </section>
        <el-carousel class="selections-carousel" height="244px" indicator-position="none" arrow="always" :autoplay=false>
          <el-carousel-item v-for="(item, index) in selections" :key="index">
            <router-link v-for="(li, index) in item.list" :key="index" class="selection-item" :to="li.link">
              <img :src="li.url" alt="" />
            </router-link>
          </el-carousel-item>
        </el-carousel>
      </section>
    </section>
    <!-- 限时秒杀 -->
    <section class="miaosha">
      <section class="container">
        <span class="title">
          <i class="ico-miaosha"></i>
          限时秒杀
        </span>
        <router-link v-for="(li, index) in miaosha" :key="index" class="miaosha-item" :to="li.link">
          <img :src="li.url" alt="" />
        </router-link>
        <section class="clearfix"></section>
      </section>
    </section>
    <!-- 专项分类 -->
    <section class="selections classify" v-for="(item, index) in classifies" :key="index">
      <section class="container">
        <section class="title">
          <h2>
            <i class="ico-left-arrow"></i>
            {{item.name}}
            <i class="ico-right-arrow"></i>
          </h2>
          <h3>
            {{item.en}}
          </h3>
          <a href="" class="more">
            更多<i class="el-icon-d-arrow-right"></i>
          </a>
        </section>
        <el-carousel class="selections-carousel" height="248px" indicator-position="none" arrow="always" :autoplay=false>
          <el-carousel-item v-for="(i, index) in item.list" :key="index">
            <span v-for="(li, index) in i.list" :key="index" class="selection-item">
              <router-link :to="{ path: 'detail', query: { id: li.id }}" class="img">
                <img :src="li.url" alt="" />
              </router-link>
              <section class="price">
                <router-link :to="{ path: 'detail', query: { id: li.id }}">¥198</router-link>
                <span style="float:right;">
                  <i class="ico-cart-gray"></i>
                </span>
              </section>
            </span>
          </el-carousel-item>
        </el-carousel>
      </section>
    </section>
    <!-- 限时秒杀 -->
    <section class="miaosha">
      <section class="container">
        <span class="title">
          <i class="ico-miaosha"></i>
          限时秒杀
        </span>
        <router-link v-for="(li, index) in miaosha" :key="index" class="miaosha-item" :to="li.link">
          <img :src="li.url" alt="" />
        </router-link>
        <section class="clearfix"></section>
      </section>
    </section>
    <section class="bar">
      <span v-for='(tab, index) in tabs' :key='index'>
        <i :class="'ico-' + tab.name"></i>
        <font>{{tab.word}}</font>
      </span>
    </section>
  </section>
</template>

<script>
  import getIndex from '@/api/getIndex'

  export default {
    data () {
      return {
        items: [{
          link: 'http://www.baidu.com',
          url: 'http://img02.hua.com/slider/17_xingzuo_jxz_pc.jpg'
        }, {
          link: 'http://www.baidu.com',
          url: 'http://img02.hua.com/slider/18_youflower_pc.jpg'
        }, {
          link: 'http://www.baidu.com',
          url: 'http://img02.hua.com/slider/18_birthday_pc.jpg'
        }],
        tags: [{
          name: '爱情鲜花',
          list: [
            {name: '玫瑰鲜花', url: ''},
            {name: '玫瑰鲜花', url: ''},
            {name: '玫瑰鲜花', url: ''},
            {name: '玫瑰鲜花', url: ''},
            {name: '玫瑰鲜花', url: ''},
            {name: '玫瑰鲜花', url: ''},
            {name: '玫瑰鲜花', url: ''},
            {name: '玫瑰鲜花', url: ''},
            {name: '玫瑰鲜花', url: ''},
            {name: '玫瑰鲜花', url: ''},
            {name: '玫瑰鲜花', url: ''},
            {name: '玫瑰鲜花', url: ''},
            {name: '玫瑰鲜花', url: ''}
          ]
        }, {
          name: '送长辈',
          list: [
            {name: '玫瑰鲜花', url: ''},
            {name: '玫瑰鲜花', url: ''},
            {name: '玫瑰鲜花', url: ''},
            {name: '玫瑰鲜花', url: ''},
            {name: '玫瑰鲜花', url: ''},
            {name: '玫瑰鲜花', url: ''},
            {name: '玫瑰鲜花', url: ''},
            {name: '玫瑰鲜花', url: ''},
            {name: '玫瑰鲜花', url: ''},
            {name: '玫瑰鲜花', url: ''},
            {name: '玫瑰鲜花', url: ''},
            {name: '玫瑰鲜花', url: ''},
            {name: '玫瑰鲜花', url: ''}
          ]
        }, {
          name: '商业用花',
          list: [
            {name: '玫瑰鲜花', url: ''},
            {name: '玫瑰鲜花', url: ''},
            {name: '玫瑰鲜花', url: ''},
            {name: '玫瑰鲜花', url: ''},
            {name: '玫瑰鲜花', url: ''},
            {name: '玫瑰鲜花', url: ''},
            {name: '玫瑰鲜花', url: ''},
            {name: '玫瑰鲜花', url: ''},
            {name: '玫瑰鲜花', url: ''},
            {name: '玫瑰鲜花', url: ''},
            {name: '玫瑰鲜花', url: ''},
            {name: '玫瑰鲜花', url: ''},
            {name: '玫瑰鲜花', url: ''}
          ]
        }, {
          name: '特色花礼',
          list: [
            {name: '玫瑰鲜花', url: ''},
            {name: '玫瑰鲜花', url: ''},
            {name: '玫瑰鲜花', url: ''},
            {name: '玫瑰鲜花', url: ''},
            {name: '玫瑰鲜花', url: ''},
            {name: '玫瑰鲜花', url: ''},
            {name: '玫瑰鲜花', url: ''},
            {name: '玫瑰鲜花', url: ''},
            {name: '玫瑰鲜花', url: ''},
            {name: '玫瑰鲜花', url: ''},
            {name: '玫瑰鲜花', url: ''},
            {name: '玫瑰鲜花', url: ''},
            {name: '玫瑰鲜花', url: ''}
          ]
        }],
        selections: [{
          tag: 1,
          list: [
            {
              url: 'http://img01.hua.com/uploadpic/newpic/9012009.jpg_220x240.jpg',
              link: '/detail'
            },
            {
              url: 'http://img01.hua.com/uploadpic/newpic/9010947.jpg_220x240.jpg',
              link: '/detail'
            },
            {
              url: 'http://img01.hua.com/uploadpic/newpic/9010011.jpg_220x240.jpg',
              link: '/detail'
            },
            {
              url: 'http://img01.hua.com/uploadpic/newpic/9012009.jpg_220x240.jpg',
              link: '/detail'
            },
            {
              url: 'http://img01.hua.com/uploadpic/newpic/9012243.jpg_220x240.jpg',
              link: '/detail'
            }
          ]
        }, {
          tag: 2,
          list: [
            {
              url: 'http://img01.hua.com/uploadpic/newpic/9012009.jpg_220x240.jpg',
              link: '/detail'
            },
            {
              url: 'http://img01.hua.com/uploadpic/newpic/9012009.jpg_220x240.jpg',
              link: '/detail'
            },
            {
              url: 'http://img01.hua.com/uploadpic/newpic/9012009.jpg_220x240.jpg',
              link: '/detail'
            },
            {
              url: 'http://img01.hua.com/uploadpic/newpic/9012009.jpg_220x240.jpg',
              link: '/detail'
            },
            {
              url: 'http://img01.hua.com/uploadpic/newpic/9010947.jpg_220x240.jpg',
              link: '/detail'
            }
          ]
        }, {
          tag: 3,
          list: [
            {
              url: 'http://img01.hua.com/uploadpic/newpic/9010947.jpg_220x240.jpg',
              link: '/detail'
            },
            {
              url: 'http://img01.hua.com/uploadpic/newpic/9010947.jpg_220x240.jpg',
              link: '/detail'
            }
          ]
        }],
        miaosha: [
          {
            url: 'https://img02.hua.com/tuijian/xianshi_1_180626.jpg',
            link: '/detail'
          },
          {
            url: 'https://img02.hua.com/tuijian/xianshi_1_180626.jpg',
            link: '/detail'
          },
          {
            url: 'https://img02.hua.com/tuijian/xianshi_1_180626.jpg',
            link: '/detail'
          },
          {
            url: 'https://img02.hua.com/tuijian/xianshi_1_180626.jpg',
            link: '/detail'
          },
          {
            url: 'https://img02.hua.com/tuijian/xianshi_1_180626.jpg',
            link: '/detail'
          }
        ],
        classifies: [
          {
            name: '爱情鲜花',
            en: 'LOVE FLOWERS',
            list: [
              {
                tag: 1,
                list: [
                  {
                    id: 123,
                    url: 'http://img01.hua.com/uploadpic/newpic/9012009.jpg_220x240.jpg'
                  },
                  {
                    id: 123,
                    url: 'http://img01.hua.com/uploadpic/newpic/9010947.jpg_220x240.jpg'
                  },
                  {
                    id: 123,
                    url: 'http://img01.hua.com/uploadpic/newpic/9010011.jpg_220x240.jpg'
                  },
                  {
                    id: 123,
                    url: 'http://img01.hua.com/uploadpic/newpic/9012009.jpg_220x240.jpg'
                  },
                  {
                    id: 123,
                    url: 'http://img01.hua.com/uploadpic/newpic/9012243.jpg_220x240.jpg'
                  }
                ]
              }, {
                tag: 2,
                list: [
                  {
                    id: 123,
                    url: 'http://img01.hua.com/uploadpic/newpic/9012009.jpg_220x240.jpg'
                  },
                  {
                    id: 123,
                    url: 'http://img01.hua.com/uploadpic/newpic/9012009.jpg_220x240.jpg'
                  },
                  {
                    id: 123,
                    url: 'http://img01.hua.com/uploadpic/newpic/9012009.jpg_220x240.jpg'
                  },
                  {
                    id: 123,
                    url: 'http://img01.hua.com/uploadpic/newpic/9012009.jpg_220x240.jpg'
                  },
                  {
                    id: 123,
                    url: 'http://img01.hua.com/uploadpic/newpic/9010947.jpg_220x240.jpg'
                  }
                ]
              }, {
                tag: 3,
                list: [
                  {
                    id: 123,
                    url: 'http://img01.hua.com/uploadpic/newpic/9010947.jpg_220x240.jpg'
                  },
                  {
                    id: 123,
                    url: 'http://img01.hua.com/uploadpic/newpic/9010947.jpg_220x240.jpg'
                  }
                ]
              }
            ]
          },
          {
            name: '送长辈',
            en: 'LOVE FLOWERS',
            list: [
              {
                tag: 1,
                list: [
                  {
                    id: 123,
                    url: 'http://img01.hua.com/uploadpic/newpic/9012009.jpg_220x240.jpg'
                  },
                  {
                    id: 123,
                    url: 'http://img01.hua.com/uploadpic/newpic/9010947.jpg_220x240.jpg'
                  },
                  {
                    id: 123,
                    url: 'http://img01.hua.com/uploadpic/newpic/9010011.jpg_220x240.jpg'
                  },
                  {
                    id: 123,
                    url: 'http://img01.hua.com/uploadpic/newpic/9012009.jpg_220x240.jpg'
                  },
                  {
                    id: 123,
                    url: 'http://img01.hua.com/uploadpic/newpic/9012243.jpg_220x240.jpg'
                  }
                ]
              }, {
                tag: 2,
                list: [
                  {
                    id: 123,
                    url: 'http://img01.hua.com/uploadpic/newpic/9012009.jpg_220x240.jpg'
                  },
                  {
                    id: 123,
                    url: 'http://img01.hua.com/uploadpic/newpic/9012009.jpg_220x240.jpg'
                  },
                  {
                    id: 123,
                    url: 'http://img01.hua.com/uploadpic/newpic/9012009.jpg_220x240.jpg'
                  },
                  {
                    id: 123,
                    url: 'http://img01.hua.com/uploadpic/newpic/9012009.jpg_220x240.jpg'
                  },
                  {
                    id: 123,
                    url: 'http://img01.hua.com/uploadpic/newpic/9010947.jpg_220x240.jpg'
                  }
                ]
              }, {
                tag: 3,
                list: [
                  {
                    id: 123,
                    url: 'http://img01.hua.com/uploadpic/newpic/9010947.jpg_220x240.jpg'
                  },
                  {
                    id: 123,
                    url: 'http://img01.hua.com/uploadpic/newpic/9010947.jpg_220x240.jpg'
                  }
                ]
              }
            ]
          },
          {
            name: '商业用花',
            en: 'LOVE FLOWERS',
            list: [
              {
                tag: 1,
                list: [
                  {
                    id: 123,
                    url: 'http://img01.hua.com/uploadpic/newpic/9012009.jpg_220x240.jpg'
                  },
                  {
                    id: 123,
                    url: 'http://img01.hua.com/uploadpic/newpic/9010947.jpg_220x240.jpg'
                  },
                  {
                    id: 123,
                    url: 'http://img01.hua.com/uploadpic/newpic/9010011.jpg_220x240.jpg'
                  },
                  {
                    id: 123,
                    url: 'http://img01.hua.com/uploadpic/newpic/9012009.jpg_220x240.jpg'
                  },
                  {
                    id: 123,
                    url: 'http://img01.hua.com/uploadpic/newpic/9012243.jpg_220x240.jpg'
                  }
                ]
              }, {
                tag: 2,
                list: [
                  {
                    id: 123,
                    url: 'http://img01.hua.com/uploadpic/newpic/9012009.jpg_220x240.jpg'
                  },
                  {
                    id: 123,
                    url: 'http://img01.hua.com/uploadpic/newpic/9012009.jpg_220x240.jpg'
                  },
                  {
                    id: 123,
                    url: 'http://img01.hua.com/uploadpic/newpic/9012009.jpg_220x240.jpg'
                  },
                  {
                    id: 123,
                    url: 'http://img01.hua.com/uploadpic/newpic/9012009.jpg_220x240.jpg'
                  },
                  {
                    id: 123,
                    url: 'http://img01.hua.com/uploadpic/newpic/9010947.jpg_220x240.jpg'
                  }
                ]
              }, {
                tag: 3,
                list: [
                  {
                    id: 123,
                    url: 'http://img01.hua.com/uploadpic/newpic/9010947.jpg_220x240.jpg'
                  },
                  {
                    id: 123,
                    url: 'http://img01.hua.com/uploadpic/newpic/9010947.jpg_220x240.jpg'
                  }
                ]
              }
            ]
          },
          {
            name: '特色花礼',
            en: 'LOVE FLOWERS',
            list: [
              {
                tag: 1,
                list: [
                  {
                    id: 123,
                    url: 'http://img01.hua.com/uploadpic/newpic/9012009.jpg_220x240.jpg'
                  },
                  {
                    id: 123,
                    url: 'http://img01.hua.com/uploadpic/newpic/9010947.jpg_220x240.jpg'
                  },
                  {
                    id: 123,
                    url: 'http://img01.hua.com/uploadpic/newpic/9010011.jpg_220x240.jpg'
                  },
                  {
                    id: 123,
                    url: 'http://img01.hua.com/uploadpic/newpic/9012009.jpg_220x240.jpg'
                  },
                  {
                    id: 123,
                    url: 'http://img01.hua.com/uploadpic/newpic/9012243.jpg_220x240.jpg'
                  }
                ]
              }, {
                tag: 2,
                list: [
                  {
                    id: 123,
                    url: 'http://img01.hua.com/uploadpic/newpic/9012009.jpg_220x240.jpg'
                  },
                  {
                    id: 123,
                    url: 'http://img01.hua.com/uploadpic/newpic/9012009.jpg_220x240.jpg'
                  },
                  {
                    id: 123,
                    url: 'http://img01.hua.com/uploadpic/newpic/9012009.jpg_220x240.jpg'
                  },
                  {
                    id: 123,
                    url: 'http://img01.hua.com/uploadpic/newpic/9012009.jpg_220x240.jpg'
                  },
                  {
                    id: 123,
                    url: 'http://img01.hua.com/uploadpic/newpic/9010947.jpg_220x240.jpg'
                  }
                ]
              }, {
                tag: 3,
                list: [
                  {
                    id: 123,
                    url: 'http://img01.hua.com/uploadpic/newpic/9010947.jpg_220x240.jpg'
                  },
                  {
                    id: 123,
                    url: 'http://img01.hua.com/uploadpic/newpic/9010947.jpg_220x240.jpg'
                  }
                ]
              }
            ]
          }
        ],
        tabs: [{
          name: 'koubei',
          word: '10年品牌，真实口碑'
        }, {
          name: 'camare',
          word: '鲜花实拍秀展示'
        }, {
          name: 'sanh',
          word: '全国连锁，3小时送达'
        }, {
          name: 'peifu',
          word: '200%退赔承诺'
        }]
      }
    },
    mounted () {
      this.getItems()
    },
    methods: {
      getItems () {
        console.log('test')
      }
    }
  }
</script>