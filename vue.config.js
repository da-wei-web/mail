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
        'common': path.resolve(__dirname, 'src/common'),
        'assets': path.resolve(__dirname, 'src/assets'),
        'components': path.resolve(__dirname, 'src/components'),
        'network': path.resolve(__dirname, 'src/network'),
        'views': path.resolve(__dirname, 'src/views')
      }
    }
  }
}
