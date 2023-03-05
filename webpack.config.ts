import NodemonPlugin from 'nodemon-webpack-plugin';
import path from 'path';
import nodeExternals from 'webpack-node-externals';
import url from 'url';

// const __dirname = path.dirname(url.fileURLToPath(import.meta.url));

const config = {
    entry: './src/index.js',
    experiments: {
        outputModule: true,
    },
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
        chunkFormat: 'esm',
        filename: 'bundle.js',
        libraryTarget: 'module',
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
