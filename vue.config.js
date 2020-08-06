const path = require('path');
const pages = require('./configs/pages');
function resolve(dir) {
  //此处使用path.resolve 或path.join 可自行调整
  return path.join(__dirname, dir)
}

console.log(pages)
module.exports = {

  pages,
  publicPath: process.env.NODE_ENV === 'production' ? '/' : '/',
  chainWebpack: config => {
    // 移除 prefetch 插件
    config.plugins.delete('preload')

  },
  devServer: {
    host: "127.0.0.1",
    port: 8051, // 端口号
    https: false, // https:{type:Boolean}
    open: true, //配置自动启动浏览器」
  },
  configureWebpack: {
    externals: {
      'vue': 'Vue',
      // 'element-ui': 'ELEMENT'
      //'mint-ui':'MINT',
      //'axios':'axios',
      //'vue-router':'VueRouter',
    },
    resolve: {
      extensions: [".js", ".json"],
      alias: {
        //'vue$': 'vue/dist/vue.esm.js',
        '@': resolve('src'),
        '@api': resolve('src/api'),
      }
    },
  },
  productionSourceMap: false, // 生产环境是否生成 SourceMap
}
