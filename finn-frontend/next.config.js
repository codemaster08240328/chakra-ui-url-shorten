const withImages = require('next-images');

module.exports = withImages({
  trailingSlash: true,
  sassLoaderOptions: {},
  esModule: true,
  webpack(config, options) {
    return config;
  }
});
