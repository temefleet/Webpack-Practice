module.exports = {
  entry: "./scripts/script1.js",
  devtool: "inline-source-map",
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
              { 
                loader: "css-loader",
                options: {
                  sourceMap: true
                } 
              },
              { loader: "sass-loader" }
        ]
      }
    ]
  }
}