const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = createProxyMiddleware({
  target: 'http://eduboss.lagou.com/boss/',
  pathRewrite: {
    '^/api/boss': ''
  },
  changeOrigin: true
})
