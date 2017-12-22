/**
 * @Author: Aaron
 * @Date:   2017-12-05 08:48:13
 * @Email:  332904234@qq.com
 * @Filename: nuxt.config.js
 * @Last modified by:   Aaron
 * @Last modified time: 2017-12-22 21:16:34
 * @Copyright: 1.0
 */



module.exports = {
  // 设置页面跳转加载过程的loading
  loading: '~/components/loading.vue',
  // 设置文件的头部信息
  head: {
    title: '你好',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '练习项目' }
    ],
    // 浏览器上面图标
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  css:[
    // 'bulma/css/bulma.css',
    '~/css/main.css',
    '~/node_modules/iview/dist/styles/iview.css',
    // '~/node_modules/element-ui/lib/theme-chalk/index.css'
  ],
  // 定义中间件
  router: {
    middleware: ['getData']
  },
  //使用插件
  plugins: [
    // { src: '~/plugins/iv.js', ssr: false }
  ],
  // build: {
  //   vendor: ['axios']
  // },
}
