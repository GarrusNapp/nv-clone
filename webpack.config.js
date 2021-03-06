const path = require("path");

module.exports = {
  entry: ["./js/index.js"],
  output: {
    path: path.resolve(__dirname, "out"), //output directory
    filename: "out.js", //output file (merge all JS-files will into one out.js file)
    publicPath: "out"
  },
  module: {
    rules: [
      //scripts rule (*.js)
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              [
                "env",
                {
                  targets: {
                    browsers: ["> 1%", "last 2 versions"]
                    // browsers: ['Chrome 49']
                  }
                }
              ]
            ]
          }
        }
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader", // creates style nodes from JS strings
          "css-loader", // translates CSS into CommonJS
          "sass-loader" // compiles Sass to CSS
        ]
      },
      {
        test: /\.(woff(2)?|ttf|eot|otf|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "/fonts/"
            }
          }
        ]
      },
      {
        test: /\.(html)$/,
        use: {
          loader: "html-loader",
          options: {
            attrs: false
          }
        }
      },

      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "/images/"
            }
          }
        ]
      }
    ]
  },

  devServer: {
    filename: "./js/out.js"
  },
  plugins: [],
  watch: true,
  mode: "development",
  devtool: "source-map"
};
