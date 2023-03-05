import NodemonPlugin from 'nodemon-webpack-plugin';
import path from 'path';
import nodeExternals from 'webpack-node-externals';

const config = {
    entry: './src/index.js',
    externals: [
        nodeExternals(),
    ],
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                include: path.resolve(__dirname, 'src'),
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
        extensions: ['.ts', '.js'],
    },
    target: 'node',
};

export default config;
