const path = require('path');

module.exports = {
    transpileDependencies: ['vuetify'],
    chainWebpack: (config) => {
        config.resolve.alias.set('@', path.resolve(__dirname, 'src/'));
    },
    devServer: {
        disableHostCheck: true,
        proxy: {
            '/api': {
                target: 'http://mydistributedapi.myvnc.com:2780/api',
                pathRewrite: { '^/api': '' },
                changeOrigin: true,
                ws: true,
            }
        }
    }
};
