import CssMinimizerPlugin from "css-minimizer-webpack-plugin";
import webpack from "webpack";

export function buildMinimizers(): webpack.WebpackPluginInstance[] {
    return [
        "..." as unknown as webpack.WebpackPluginInstance,
        new CssMinimizerPlugin(),
    ];
}