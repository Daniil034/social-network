import {BuildOptions} from "./types/config";
import {buildLoaders} from "./buildLoaders";
import {buildResolvers} from "./buildResolvers";
import {buildPlugins} from "./buildPlugins";
import {buildDevServer} from "./buildDevServer";
import webpack from "webpack";
import {buildMinimizers} from "./buildMinimizers";

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
    const {paths, mode, isDev} = options;

    return {
        mode,
        devtool: isDev ? "inline-source-map" : undefined,
        module: {
            rules: buildLoaders(options),
        },
        resolve: buildResolvers(),
        devServer: isDev ? buildDevServer(options) : undefined,
        entry: paths.entry,
        output: {
            path: paths.build,
            filename: "[name].[contenthash].js",
            clean: true,
        },
        plugins: buildPlugins(options),
        optimization: {
            minimizer: buildMinimizers(),
        },
    };
}