import {resolve} from 'path';
import {Configuration} from 'webpack';
import {buildWebpack, WebpackEnvs, WebpackOptions, WebpackPaths} from './config';
import 'webpack-dev-server';

export default (envs: WebpackEnvs): Configuration => {
  const isDev = envs.mode === 'development';
  const isProd = envs.mode === 'production';

  const paths: WebpackPaths = {
    entry: resolve(__dirname, 'src', 'index.tsx'),
    output: resolve(__dirname, 'build'),
    src: resolve(__dirname, 'src'),
    html: resolve(__dirname, 'public', 'index.html'),
  };

  const options: WebpackOptions = {
    isDev,
    isProd,
    envs,
    paths,
  };

  return buildWebpack(options);
};
