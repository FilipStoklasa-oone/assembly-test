const path = require('path');
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './src/index.tsx',
	mode:"none",
	target: 'web',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
	},
	plugins:[
		new HtmlWebpackPlugin({
			template: path.join(__dirname, 'src', 'index.html')
	}),
	new webpack.ProvidePlugin({
		process: 'process/browser',
	}),
	]
};