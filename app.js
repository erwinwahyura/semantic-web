var express = require('express')
var app = express()

app.use('/', function(req, res) {
  res.send('alive')
})

app.listen(3000)

module.exports = app