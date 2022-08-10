const path = require('path');

module.exports = {
  entry: {
    'tree-traverse': './src/main.js'
  },
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
  },
};