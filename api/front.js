const { createProxyMiddleware } = require('http-proxy-middleware')

// module.exports = (req, res) => {
//   res.send('front => ' + req.url)
// }

module.exports = createProxyMiddleware({
  target: 'http://edufront.lagou.com/front/',
  pathRewrite: {
    '^/api/front': ''
  },
  changeOrigin: true
})
