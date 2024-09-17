import {ModuleOptions} from 'webpack';
import {WebpackOptions} from './types';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export const buildLoaders = (options: WebpackOptions): ModuleOptions['rules'] => {
  const {isDev} = options;

  const cssLoaderWithModules = {
    loader: 'css-loader',
    options: {
      modules: {
        localIdentName: isDev ? '[path][name]__[local]' : '[hash:base64:8]',
      },
    },
  };

  return [
    {
      test: /\.tsx?$/,
      use: 'ts-loader',
      exclude: /node_modules/,
    },
    {
      test: /\.css$/i,
      use: [isDev ? 'style-loader' : MiniCssExtractPlugin.loader, cssLoaderWithModules],
    },
  ];
};
