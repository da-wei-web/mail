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
      extensions: ['.less'],
      alias: {
        'assets': '@/assets',
        'components': '@components',
        'network': '@network',
        'common': '@common',
        'views': '@views'
      }
    }
  }
}
