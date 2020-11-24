module.exports = (req, res) => {
  res.json({
    message: 'Hello World!'
  })
  // res.json({
  //   body: req.body,
  //   query: req.query,
  //   cookies: req.cookies
  // })
}
