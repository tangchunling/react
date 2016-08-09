var ExtractTextPlugin = require('extract-text-webpack-plugin'); //css单独打包
var webpack = require('webpack');

/*var plugins = [];
plugins.push(new ExtractTextPlugin('[name].css')); */

var config = {
   entry: './app/module/router.js',
	
   output: {
      path:'./',
      filename: 'index.js'
   },
	
   devServer: {
      inline: true,
      port: 3000
   },
	
   module: {
      loaders: [ {
         test: /\.jsx?$/,
         exclude: /node_modules/,
         loader: 'babel',
			
         query: {
            presets: ['es2015', 'react']
         }
      },
      {
            test: /\.css$/,
            exclude: /^node_modules$/,
            loader: ExtractTextPlugin.extract('style-loader', 'css-loader!autoprefixer-loader')
        },
      {
	        test: /\.(png|jpg)$/,
	        exclude: /^node_modules$/,
	        loader: 'url-loader?limit=8192' //注意后面那个limit的参数，当你图片大小小于这个限制的时候，会自动启用base64编码图片
	    }]
   },
   plugins: [new ExtractTextPlugin("style.css", {
            allChunks: true
        })]
	
}

module.exports = config;
