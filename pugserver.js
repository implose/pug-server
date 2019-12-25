#!/usr/bin/env node
const http = require('http')
const fs = require('fs')
const path = require('path')
const pug = require('pug')
const staticfiles = require('node-static')

const pugPath = process.argv[process.argv.length - 1]
const port = process.argv[process.argv.findIndex(e => e === '-p') + 1] || 8080
const fileServer = new staticfiles.Server(pugPath || '.')

try {
  http.createServer((req, res) => {
    console.info(req.method, req.url)

    const requrl = req.url.match(/\/$/) ? `${req.url}index` : req.url

    if (fs.existsSync(path.join(pugPath, `${requrl}.pug`))) {
      res.writeHead(200, { 'Content-Type': 'text/html' })
      res.end(pug.renderFile(path.join(pugPath, `${requrl}.pug`)))
    } else {
      req.addListener('end', () => { fileServer.serve(req, res) }).resume()
    }
  }).listen(port)
} catch (e) {
  throw new Error(e)
}
