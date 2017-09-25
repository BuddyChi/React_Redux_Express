const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool : 'eval-source-map',
    entry: __dirname+'/public/javascripts/main.js',
    output: {
        path: path.resolve(__dirname, 'public/build'),
        filename: 'bundle.js'
    },
    devServer:{
        contentBase:'./public',
        historyApiFallback:true,
        inline:true,
        hot:true
    },
    module: {
        rules: [
            {
                test: /(\.jsx|\.js)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader"
                    }, {
                        loader: "css-loader"
                    },{
                        loader:'postcss-loader'
                    }
                ]
            }
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin(),
        new webpack.BannerPlugin('版权所有，翻版必究'),
        new HtmlWebpackPlugin({
            template:__dirname + '/public/index.tmpl.html'
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
}