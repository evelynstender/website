module.exports = {
  filenameHashing: true,
  lintOnSave: false,
  transpileDependencies: ['vuetify'],
  pages: {
    index: {
      entry: 'src/main.js',
      template: 'public/index.html',
      filename: 'index.html',
    },
  },
  devServer: {
    host: 'localhost',
  },
};
