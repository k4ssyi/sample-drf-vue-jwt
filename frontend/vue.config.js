module.exports = {
  outputDir: '../static',
  assetsDir: 'vue',
  indexPath: '../templates/index.html',
  publicPath: process.env.NODE_ENV === 'production' ? '/static/' : '/'
}
