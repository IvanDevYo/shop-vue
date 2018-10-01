const path = require('path');
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
    mode: "development",
    entry: "./src/common.js",
    module: {
        rules: [
        {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: ['babel-loader']
        },
        {
            test: /\.vue$/,
            loader: 'vue-loader'
        }
        ],
    },
    resolve: {
      extensions: [ '.vue', '.js' ]
    },
    output: {
        path: path.resolve(__dirname, './src/'),
        filename: 'bundle.js'
    },
    plugins: [
      new VueLoaderPlugin()
    ]
};