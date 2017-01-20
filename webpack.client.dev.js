var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: [
        path.resolve(__dirname, 'master/src/client')
    ],
    output: {
        path: path.resolve(__dirname, 'build'),
        publicPath: '/dist/',
        filename: 'app.bundle.js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    plugins: [
        new webpack.DefinePlugin({__CLIENT__: true,__SERVER__: false,__PRODUCTION__: false,__DEV__: true}),
        new webpack.DefinePlugin({
          "process.env": {
            "NODE_ENV": JSON.stringify(process.env.NODE_ENV) || JSON.stringify('development'),
            "CLIENT_ID": JSON.stringify(process.env.CLIENT_ID) || JSON.stringify('aF2xUgsBQqkLFmXwDKQgP8dLe'),
            "CLIENT_SECRET": JSON.stringify(process.env.CLIENT_SECRET) || JSON.stringify('BPaXFopxaZZ72wh'),
            "IMGIX_BASE_URL": JSON.stringify(process.env.IMGIX_BASE_URL) || JSON.stringify('https://detour-assets-testing.imgix.net')
          }
        }),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    module: {
        loaders: [{
            test: /\.(js|jsx)?$/,
            exclude: /node_modules/,
            loaders: ['react-hot']
        }, {
            test: /\.(js|jsx)?$/,
            exclude: /node_modules/,
            loader: 'babel',
            query: {
                presets: ['es2015', 'react', 'stage-2'],
                plugins: ['transform-decorators-legacy' ],
                compact: false
            }
        }, {
            test: /\.css$/,
            loader: "style-loader!css-loader"
        }, {
            test: /\.woff|\.woff2|\.svg|.eot|\.ttf/,
            loader: 'url?prefix=font/&limit=10000'
        }]
    }
};
