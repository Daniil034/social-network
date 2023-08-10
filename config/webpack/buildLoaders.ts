import { BuildOptions } from './types/config';
import { buildScssLoader } from './loaders/buildScssLoader';
import { buildSVGLoader } from './loaders/buildSVGLoader';

export function buildLoaders({ isDev }: BuildOptions) {
    const typeScriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };

    const svgLoader = buildSVGLoader();

    const fileLoader = {
        test: /\.(png|jpe?g|gif|)$/i,
        loader: 'file-loader',
        options: {
            name: '[path][name].[ext]',
        },
    };

    const scssLoader = buildScssLoader(isDev);

    const babelLoader = {
        test: /\.(?:js|jsx|tsx)$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: [
                    ['@babel/preset-env', { targets: 'defaults' }],
                ],
            },
        },
    };

    const fontLoader = {
        test: /\.(eot|ttf|woff|woff2)$/i,
        use: 'file-loader',
    };

    return [
        svgLoader,
        fileLoader,
        babelLoader,
        typeScriptLoader,
        scssLoader,
        fontLoader,
    ];
}
