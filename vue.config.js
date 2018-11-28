module.exports = {
    lintOnSave: true,
    configureWebpack: {},
    devServer: {
        host: '0.0.0.0',
        port: 3000,
        public: 'shboom.iptime.org:3000',
        hot: true,
        disableHostCheck: true,
    },
};