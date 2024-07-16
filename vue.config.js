const { defineConfig } = require('@vue/cli-service');
const path = require('path');

module.exports = defineConfig({
  transpileDependencies: true,

  pluginOptions: {
    vuetify: {
      // https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vuetify-loader
    }
  },

  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src')
      }
    }
  },

  chainWebpack: config => {
    // 确保 Webpack 正确处理图片等静态资源
    config.module
      .rule('images')
      .use('file-loader')
      .loader('file-loader')
      .options({
        name: 'img/[name].[hash:7].[ext]'
      });
  },

  devServer: {
    port: 8080, // 根据需要修改端口
  }
});
