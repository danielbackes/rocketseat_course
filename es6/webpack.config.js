module.exports = {
  entry: {
    index: "./src/index.js",
    "conceitos/exercicio-1": "./src/conceitos/exercicio-1.js",
    "conceitos/exercicio-2": "./src/conceitos/exercicio-2.js",
    "conceitos/exercicio-3": "./src/conceitos/exercicio-3.js",
    "conceitos/exercicio-4": "./src/conceitos/exercicio-4.js",
    "conceitos/exercicio-5": "./src/conceitos/exercicio-5.js",
    "conceitos/exercicio-6": "./src/conceitos/exercicio-6.js",
    "conceitos/exercicio-7": "./src/conceitos/exercicio-7.js",
    "webpack/index": "./src/webpack/index.js",
    "async-await/axios": "./src/async-await/axios.js",
    "async-await/exercicio-1": "./src/async-await/exercicio-1.js",
    "async-await/exercicio-2": "./src/async-await/exercicio-2.js",
    "async-await/exercicio-3": "./src/async-await/exercicio-3.js",
    "async-await/exercicio-4": "./src/async-await/exercicio-4.js"
  },
  output: {
    path: __dirname + "/public",
    filename: "[name].js"
  },
  devServer: {
    contentBase: __dirname + "/public"
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
