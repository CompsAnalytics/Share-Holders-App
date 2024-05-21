const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function (app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'http://196.200.29.226:8020',
            changeOrigin: true,
        })
    );
};