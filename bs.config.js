var proxyMiddleware = require('http-proxy-middleware');

module.exports = {
  "port": 3000,
  "files": ["./client/dist/**/*.{html,css,js}"],
  "server": {
    "baseDir": "client/dist",
    "index": "index.html",
    "middleware": [
      proxyMiddleware('/api', {
        target: 'https://ffxiv-greed-party.herokuapp.com/',
        changeOrigin: true
      })
    ]
  }
}
