module.exports = {
  // 配置相对路径
  publicPath: '',
  // 配置别名
  configureWebpack:{
    resolve: {
      alias: {
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views',
      }
    }
  }
}