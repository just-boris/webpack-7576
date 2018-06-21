module.exports = {
  entry: 'loader-one!./src/index.js',
  resolveLoader: {
    modules: [__dirname + '/loaders']
  },

  mode: 'none',

  module: {
    rules: [
      {
        test: /src\/index\.js/,
        use: "loader-two"
      }
    ]
  }
};
