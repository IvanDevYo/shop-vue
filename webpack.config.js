const path = require('path');
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
    mode: "development",
    entry: "./src/common.ts",
    module: {
        rules: [
        {
            test: /\.(ts|tsx)?$/,
            exclude: /node_modules/,
            loader: 'ts-loader',
            options: {
                appendTsSuffixTo: [/\.vue$/]
            }
        },
        {
            test: /\.vue$/,
            loader: 'vue-loader',
            options: {
                loaders: {
                  ts: 'ts-loader'
                },
                esModule: true
            }
        }
        ],
    },
    resolve: {
      extensions: [ '.vue','.ts', '.tsx', '.js' ]
    },
    output: {
        path: path.resolve(__dirname, './src/'),
        filename: 'bundle.js'
    },
    plugins: [
      new VueLoaderPlugin()
    ]
};