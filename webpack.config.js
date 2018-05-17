const path = require('path');

module.exports = {
  mode: 'development',
  devtool: 'none',
  entry: './server.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'server.js'
  },
  target: 'node',
  stats: {
    warnings: false
  },
  node: {
    __filename: false,
    __dirname: false
  }
};
