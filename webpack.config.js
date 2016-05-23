var webpack = require("webpack");
var path = require("path");

module.exports = {
	entry: "./main.ts",
	output: {
		filename: "bundle.js"
	},
	module: {
		loaders: [
			{
        test: /\.ts$/,
        loader: "awesome-typescript-loader"
      }
		]
  }
}
