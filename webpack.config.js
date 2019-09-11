const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: [
        "@babel/polyfill",
        "./src/index.js"
    ],
    output: {
        path: path.join(__dirname, "/dist"),
        filename: "index_bundle.js",
    }
    , module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                },
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.scss$/,
                loaders: [
                    require.resolve('style-loader'),
                    require.resolve('css-loader'),
                    require.resolve('sass-loader')
                ]
            }
        ]
    }
    , plugins: [
        new HtmlWebpackPlugin({
            template: "./static/index.template.html"
            , filename: './index.html'
        })
    ]
};
