const express = require('express')

const isFileRequest = req => !req.headers
  || typeof req.headers.accept !== 'string'
  || req.headers.accept.includes('application/json')
  || !req.headers.accept.includes('text/html')
  || !req.headers.accept.includes('*/*')
  || req.path.includes('.')

const router = express.Router()

// rewrite non-file requests to serve the index page
router.get('*', (req, res, next) => {
  if (!isFileRequest(req)) req.url = '/'
  next()
})

if (process.env.NODE_ENV === 'development') {
  // build the client on the fly
  const webpack = require('webpack')
  const dev = require('webpack-dev-middleware')
  const hot = require('webpack-hot-middleware')
  const config = require('./webpack.config')

  config.entry.unshift('webpack-hot-middleware/client?reload=true')
  config.plugins.push(new webpack.HotModuleReplacementPlugin(), new webpack.NoErrorsPlugin())

  const compiler = webpack(config)
  router.use(dev(compiler, {noInfo: true}))
  router.use(hot(compiler))
} else {
  // serve the pre-built client
  router.use(express.static('lib'))
}

module.exports = router
