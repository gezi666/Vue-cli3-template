
// 详细配置参数请参考：https://cli.vuejs.org/zh/config/#%E5%85%A8%E5%B1%80-cli-%E9%85%8D%E7%BD%AE

// const path = require('path')

module.exports = {
  devServer: {
    // easymock模拟接口
    proxy: {        
      '/demo': {
        target: 'http://10.10.50.190:7300/mock/5cbeb362abf86b3bdc64f106/example',
        changeOrigin: true
      }
    }
  },
  productionSourceMap:false,
  // webpack相关
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      // 为生产环境修改配置...
      config.optimization.splitChunks =  {
        chunks: 'all',
        maxInitialRequests: Infinity,
        cacheGroups: {
          commons: {
            name: 'commons',
            chunks: 'initial',
            minChunks: 2
          },
          vendor: {
            test: /[\\/]node_modules[\\/](echarts|element-ui)[\\/]/,
            chunks: 'all',
            name(module) {
              const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1]
              return `vendor~${packageName.replace('@', '')}`
            }
          }
        }
      }
    } else {
      // 为开发环境修改配置...
    }
  }
}
