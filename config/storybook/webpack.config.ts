import path from 'path';
import webpack from 'webpack';
import { BuildPaths } from '../webpack/types/config';
import { buildScssLoader } from '../webpack/loaders/buildScssLoader';
import { buildSVGLoader } from '../webpack/loaders/buildSVGLoader';

export default ({ config }: { config: webpack.Configuration }) => {
    const paths: BuildPaths = {
        build: '',
        html: '',
        entry: '',
        src: path.resolve(__dirname, '..', '..', 'src'),
    };
    config?.resolve?.modules?.push(paths.src);
    config?.resolve?.extensions?.push('.ts', '.tsx');
    config?.module?.rules?.push(buildScssLoader(true));

    return config;
};
