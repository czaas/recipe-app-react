var webpack = require('webpack');

module.exports = {
	entry: './app/components/Main.js',
	output: {
		path: './server/public',
		filename: 'bundled.js'
	},
	module: {
		loaders: [{
			test: /\.jsx?$/, 
			exclude: /(node_modules|bower_components)/, 
			loader: 'babel'
		}]
	},
	plugins: [
		new webpack.optimize.UglifyJsPlugin({ sourceMap: false, mangle: false })
	],
	resolve: {
		extensions: ['', '.js', '.jsx']
	}
};