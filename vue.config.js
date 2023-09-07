const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  // outputDir: path.resolve(__dirname, "../www"),
  publicPath: '/', // 도메인 주소에서 절대 경로로 접근하도록
  pluginOptions: {},
  devServer: {
    historyApiFallback: true,
    proxy: {
      '/api': {
        target: 'http://dev.smartbas.org'
      },
      '/chat-rooms': {
        target: 'ws://dev.smartbas.org/chat-rooms',
        ws: true,
        changeOrigin: true
      }
    }
  }
})
