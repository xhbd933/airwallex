// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path')
// eslint-disable-next-line @typescript-eslint/no-var-requires
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry:{index: path.resolve(__dirname, "src","index.js")},
  output:{
    path:path.resolve(__dirname, "./dist/")
  },
  plugins: [new HtmlWebpackPlugin({ template: './index.html' })],
  module:{
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /nodeModules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.(css|scss)$/,
        use: ['style-loader', 'css-loader', "sass-loader"],
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        exclude: /src/,
        use: [
          { loader: "style-loader" },
          {
            loader: "css-loader",
            options: {
              importLoaders: 1
            }
          }
        ]
      },
      {
        test: /\.(jsx|tsx)?$/,
        enforce: 'pre',
        loader: "eslint-loader",
        include: /src/
      },
      { test: /\.tsx?$/, loader: "awesome-typescript-loader" }
    ]
  },
  resolve: {
    extensions: ['.tsx','ts','.js', '.jsx','.json']
    
  }
};
