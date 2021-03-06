const webpack = require('webpack'),
			path = require('path'),
			endPath = path.resolve(__dirname, 'build')

module.exports = {
	resolve: {
		extensions: ['.js', '.jsx', '.json', '.css']
	},
	cache: true,
	entry: [
		'react-hot-loader/patch', //Active Hot Module Reloading HMR for React
		'webpack-dev-server/client?http://localhost:9000',
		'webpack/hot/only-dev-server',
		'./src/app.jsx', 
	],
	output: {
		path: endPath,
		filename: 'app.js',
		publicPath: '/' //Needed for hot-reloading
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: '/node_modules/',
				use: 'babel-loader'
			},
			{
				test: /\.json$/,
				use: 'json-loader'
			},
			{
				test: /\.css$/,
				use: [
					'style-loader',
					{
						loader: 'css-loader',
						options: { modules:true }
					}
				]
			}
		]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NamedModulesPlugin()
	],
	devtool: 'inline-source-map',
	devServer: {
		hot: true,
		contentBase: endPath,
		inline: true,
		compress: true,
		port: 9000,
		publicPath: '/'
	}
}