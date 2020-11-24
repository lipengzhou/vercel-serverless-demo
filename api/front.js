const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = createProxyMiddleware({
  target: 'http://edufront.lagou.com/front/',
  pathRewrite: {
    '^/api/front': ''
  },
  changeOrigin: true
})
