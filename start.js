#!/usr/bin/env node
const express = require('express')
const client = require('mew-client')
const server = require('mew-server')

const PORT = process.env.PORT || 3000

const app = express()

app.use('/api', server)
app.use(client)

app.listen(PORT, error => {
  if (error) console.error(error)
  else console.log(`Server started at http://localhost:${PORT}`)
})
