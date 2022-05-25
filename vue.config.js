const { defineConfig } = require('@vue/cli-service');

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
  publicPath: process.env.NODE_ENV === 'production' ? 'https://daesung6756.github.io/vue3-setting/' : '/vue3-setting/',
  outputDir: './docs',
});
