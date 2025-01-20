module.exports = function override(config, env) {
    if (env === 'development') {
    config.devServer.allowedHosts = ['localhost', 'your-domain.com'];
    }
    return config;
    };