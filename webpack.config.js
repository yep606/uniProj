const path = require('path');

module.exports = {
  entry: './project/code.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
};