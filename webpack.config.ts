import path from "path";
// in case you run into any typescript error when configuring `devServer`
import "webpack-dev-server";
import {buildWebpackConfig} from "./config/webpack/buildWebpackConfig";
import {BuildEnv, BuildPaths} from "./config/webpack/types/config";


export default (env: BuildEnv) => {
    const paths: BuildPaths = {
        entry: path.resolve(__dirname, "src", "index.tsx"),
        build: path.resolve(__dirname, "dist"),
        html: path.resolve(__dirname, "public", "index.html"),
    };

    const mode = env.mode || "development";
    const isDev = mode === "development";
    const PORT = env.port || 3000;

    return buildWebpackConfig({
        mode,
        paths,
        isDev,
        port: PORT,
    });
};