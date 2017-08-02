module.exports = {
  entry: "./scripts/script1.js",
  output: {
    filename: "src/bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader']
      },
      {
        test: /\.scss$/,
        use: [{ loader: "style-loader" },
              { loader: "css-loader" },
              { loader: "sass-loader" }
        ]
      }
    ]
  }
}