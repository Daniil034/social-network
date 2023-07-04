import HtmlWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";
import {BuildOptions} from "./types/config";
import MiniCssExtractPlugin from "mini-css-extract-plugin";


export function buildPlugins(options: BuildOptions) {
    const {paths, isDev} = options;

    return [
        new HtmlWebpackPlugin({
            template: paths.html,
        }),
        new webpack.ProgressPlugin(),
        new MiniCssExtractPlugin({
            filename: isDev ? "css/[name].css" : "css/[name].[contenthash].css",
            chunkFilename: isDev ? "css/[id].css" : "css/[id].[contenthash].css",
        }),
    ];
}