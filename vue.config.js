module.exports = {
  filenameHashing: true,
  lintOnSave: false,
  transpileDependencies: ['vuetify'],
  // css: {
  //   requireModuleExtension: true,
  //   loaderOptions: {
  //     css: {
  //       localIdentName: '[path][name]---[local]---[hash:base64:5]',
  //       camelCase: true,
  //     },
  //   },
  // },
  pages: {
    index: {
      entry: 'src/main.js',
      template: 'public/index.html',
      filename: 'index.html',
    },
  },
};
