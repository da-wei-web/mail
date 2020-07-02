const path = require('path');
module.exports = {
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [
        path.resolve(__dirname, './src/css/base.less')
      ]
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
        // 'common': resolve('src/common'),
        // 'assets': resolve('src/assets'),
        'components': path.resolve(__dirname, 'src/components'),
        // 'network': resolve('src/network'),
        // 'views': resolve('src/views')
      }
    }
  }
}
