const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = { 
    mode: 'development',
    entry: {
        bundle: path.resolve(__dirname, 'src/index.js'),
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[contenthash].js',
        clean: true 
    },
    devtool: 'inline-source-map',
    devServer: {
        static: { directory: path.resolve(__dirname, 'dist') },
        port: 3000,
        hot: true, //
        open: true,
    },
    // loaders
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            }
        ]
    },
    // plugins
    plugins: [
        new HtmlWebpackPlugin({
            title: 'JS-Animations',
            filename: 'index.html',
            template: path.resolve(__dirname, "src/template.html"),
        })
    ]
};
