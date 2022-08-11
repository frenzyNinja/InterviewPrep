const path = require('path');

module.exports = {
  entry: {
    'tree-traverse': './src/tree-traversal/main.js'
  },
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
  },
};