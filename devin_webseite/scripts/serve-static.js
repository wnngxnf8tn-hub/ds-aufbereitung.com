#!/usr/bin/env node
const http = require('http')
const fs = require('fs')
const path = require('path')

const PORT = process.env.PORT || 5000
const OUT = path.resolve(__dirname, '..', 'out')
const BASE_PATH = (process.env.BASE_PATH || '').replace(/\/$/, '')

const mime = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.map': 'application/octet-stream'
}

function send404(res) {
  res.statusCode = 404
  res.end('Not found')
}

function sendFile(res, filePath) {
  fs.stat(filePath, (err, stat) => {
    if (err || !stat.isFile()) return send404(res)
    const ext = path.extname(filePath).toLowerCase()
    const type = mime[ext] || 'application/octet-stream'
    res.setHeader('Content-Type', type)
    const stream = fs.createReadStream(filePath)
    stream.pipe(res)
  })
}

const server = http.createServer((req, res) => {
  try {
    let url = decodeURIComponent(req.url.split('?')[0])

    // Optionally strip a configured base path (e.g. BASE_PATH=/foo)
    if (BASE_PATH && url.startsWith(BASE_PATH + '/')) {
      url = url.slice(BASE_PATH.length)
    }

    // Default to index.html
    if (url === '/' || url === '') {
      return sendFile(res, path.join(OUT, 'index.html'))
    }

    // Prevent path traversal
    const filePath = path.join(OUT, url)
    if (!filePath.startsWith(OUT)) return send404(res)

    // If it's a directory, try index.html inside it
    fs.stat(filePath, (err, stat) => {
      if (!err && stat.isDirectory()) {
        return sendFile(res, path.join(filePath, 'index.html'))
      }
      return sendFile(res, filePath)
    })
  } catch (e) {
    send404(res)
  }
})

server.listen(PORT, () => {
  console.log(`Static server for out/ listening on http://localhost:${PORT}`)
})
