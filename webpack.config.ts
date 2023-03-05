import nodeExternals from 'webpack-node-externals';
import NodemonPlugin from 'nodemon-webpack-plugin';
import path from 'path';
import webpack from 'webpack';

const config: webpack.Configuration = {
    entry: './src/index.js',
    externals: [
        nodeExternals(),
    ],
    mode: 'development',
    module: {
        rules: [
            {
                exclude: /node_modules/,
                test: /\.ts$/,
                use: 'ts-loader',
            },
        ],
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    plugins: [
        new NodemonPlugin(),
    ],
    resolve: {
        alias: {
            'test-module': path.resolve(__dirname, './test-module'),
        },
        extensions: ['.ts', '.js'],
    },
    target: 'node',
};

export default config;
