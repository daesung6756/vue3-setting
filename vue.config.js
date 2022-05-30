const { defineConfig } = require('@vue/cli-service');
const path = require('path');
const config = require('webpack-chain');

module.exports = defineConfig({
  transpileDependencies: true,
  pluginOptions: {
    i18n: {
      locale: 'ko',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableLegacy: false,
      runtimeOnly: false,
      compositionOnly: false,
      fullInstall: true,
    },
  },
  publicPath: process.env.NODE_ENV === 'production' ? '/vue3-setting/' : '/',
  lintOnSave: process.env.NODE_ENV !== 'production',
  outputDir: './docs/',
  assetsDir: './assets',
  devServer: {
    historyApiFallback: true,
    overlay: {
      warnings: true,
      errors: true,
    },
  },
  pages: {
    index: {
      entry: 'src/main.js',
      template: 'public/index.html',
      filename: 'index.html',
      title: 'Index page',
      chunks: ['chunk-vendors', 'chunk-common', 'index'],
    },
  },
  configureWebpack: {

  },
});
