import {ProgressPlugin, WebpackPluginInstance} from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import {WebpackOptions} from './types';

export const buildPlugins = (options: WebpackOptions): WebpackPluginInstance[] => {
  const {isDev, isProd, paths} = options;

  const plugins: WebpackPluginInstance[] = [new HtmlWebpackPlugin({template: paths.html})];

  if (isProd) {
    plugins.push(
      new MiniCssExtractPlugin({
        filename: '[name].[contenthash:8].css',
        chunkFilename: '[name].[contenthash:8].css',
      }),
    );
  }

  if (isDev) {
    plugins.push(new ProgressPlugin());
  }

  return plugins;
};
