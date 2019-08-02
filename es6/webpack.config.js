module.exports = {
  entry: "./assets/index.js",
  output: {
    path: __dirname,
    filename: "public/index.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
};
