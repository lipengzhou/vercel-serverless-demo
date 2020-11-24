const { createProxyMiddleware } = require('http-proxy-middleware')

// module.exports = (req, res) => {
//   res.send(JSON.stringify(createProxyMiddleware))
// }

// module.exports = (req, res) => {
//   createProxyMiddleware({
//     target: 'http://jsonplaceholder.typicode.com/',
//     changeOrigin: true,
//     pathRewrite: {
//       '^/api/': ''
//     }
//   })
// }

module.exports = createProxyMiddleware({
  target: 'http://jsonplaceholder.typicode.com/',
  changeOrigin: true,
  pathRewrite: {
    '^/api/': ''
  }
})

// module.exports = (req, res) => {
//   res.json({
//     message: 'Hello World!'
//   })
//   // res.json({
//   //   body: req.body,
//   //   query: req.query,
//   //   cookies: req.cookies
//   // })
// }
