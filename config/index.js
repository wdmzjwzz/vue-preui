'use strict'
const path = require('path')

module.exports = {

  dev: {
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {
      '/pre': {
        target: 'http://180.76.107.229:8081',//后端接口地址
        changeOrigin: true,  //是否跨域
        pathRewrite: {
          '^/pre': '/',//重写,
        }
      },
      '/api': {
        target: 'http://180.76.107.229:8081',//后端接口地址
        changeOrigin: true,  //是否跨域
        pathRewrite: {
          '^/api': '/api',//重写,
        }
      },
      '/login': {
        target: 'http://180.76.107.229:8081',//后端接口地址
        changeOrigin: true,  //是否跨域
        pathRewrite: {
          '^/login': '/login',//重写,
        }
      },
    },

    // 本地开发使用
    host: 'localhost',
    port: 9527,
    autoOpenBrowser: true,
    errorOverlay: true,
    notifyOnErrors: false,
    poll: false,
    useEslint: true,
    showEslintErrorsInOverlay: false,
    devtool: 'cheap-source-map',
    cssSourceMap: false
  },

  build: {
    index: path.resolve(__dirname, '../dist/index.html'),
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',

    productionSourceMap: false,
    devtool: 'source-map',
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],
    bundleAnalyzerReport: process.env.npm_config_report || false,
    generateAnalyzerReport: process.env.npm_config_generate_report || false
  }
}
