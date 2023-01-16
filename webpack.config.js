// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const isProduction = process.env.NODE_ENV == 'production';


const stylesHandler = 'style-loader';



const config = {
    entry: {
        index: path.resolve(__dirname, "src", "index.js"),
        nieve: path.resolve(__dirname, "src", "nieve.js"),
        confetti: path.resolve(__dirname, "src", "confetti.js"),
      },
    output: {
        path: path.resolve(__dirname, 'dist'),
    },
    devServer: {
        open: true,
        host: 'localhost',
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.resolve(__dirname, 'src', 'index.html'),
            chunks: ['index']
        }),
        new HtmlWebpackPlugin({
            filename: 'nieve.html',
            template: path.resolve(__dirname, 'src', 'nieve.html'),
            chunks: ['nieve']
        }),
        new HtmlWebpackPlugin({
            filename: 'confetti.html',
            template: path.resolve(__dirname, 'src', 'confetti.html'),
            chunks: ['confetti']
        }),

        // Add your plugins here
        // Learn more about plugins from https://webpack.js.org/configuration/plugins/
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/i,
                loader: 'babel-loader',
            },
            {
                test: /\.css$/i,
                use: [stylesHandler,'css-loader'],
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
                type: 'asset',
            },

            // Add your rules for custom modules here
            // Learn more about loaders from https://webpack.js.org/loaders/
        ],
    },
};

module.exports = () => {
    if (isProduction) {
        config.mode = 'production';
        
        
    } else {
        config.mode = 'development';
    }
    return config;
};
