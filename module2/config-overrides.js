const webpack = require('webpack');

module.exports = function override(config) {
  // Add fallbacks for Node.js core modules
  config.resolve = {
    ...config.resolve,
    fallback: {
      util: require.resolve('util/'),
      buffer: require.resolve('buffer/'),
      process: require.resolve('process/browser'),
      stream: require.resolve('stream-browserify'),
      crypto: require.resolve('crypto-browserify'),
      path: false,
      fs: false,
      net: false,
      tls: false,
      os: false,
      http: false,
      https: false,
      zlib: false,
    },
  };

  // Add plugins to provide Node.js globals
  config.plugins = [
    ...config.plugins,
    new webpack.ProvidePlugin({
      process: 'process/browser',
      Buffer: ['buffer', 'Buffer'],
    }),
  ];

  // Ignore source map warnings
  config.ignoreWarnings = [/Failed to parse source map/];

  return config;
};