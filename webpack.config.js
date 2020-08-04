const path = require('path');

module.exports = {
  entry: './project/ax.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
};