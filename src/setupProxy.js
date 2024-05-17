const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function (app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'http://192.168.4.6:8020',
            changeOrigin: true,
        })
    );
};