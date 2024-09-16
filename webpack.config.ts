import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import path from 'path';
import webpack from 'webpack';
import 'webpack-dev-server';

type Envs = {
  mode: 'development' | 'production';
  port: number;
};

export default (envs: Envs): webpack.Configuration => {
  const isDev = envs.mode === 'development';
  const isProd = envs.mode === 'production';

  const config: webpack.Configuration = {
    mode: envs.mode ?? 'development',
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    output: {
      path: path.resolve(__dirname, 'build'),
      filename: '[name].[contenthash:8].js',
      clean: true,
    },
    plugins: [
      new HtmlWebpackPlugin({template: path.resolve(__dirname, 'public', 'index.html')}),
      isProd &&
        new MiniCssExtractPlugin({
          filename: '[name].[contenthash:8].css',
          chunkFilename: '[name].[contenthash:8].css',
        }),
      isDev && new webpack.ProgressPlugin(),
    ].filter(Boolean),
    devServer: isDev
      ? {
          port: envs.port,
          open: true,
          static: './build',
        }
      : undefined,
    optimization: isDev
      ? {
          runtimeChunk: 'single',
        }
      : undefined,
    devtool: isDev && 'inline-source-map',
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
        {
          test: /\.css$/i,
          use: [isDev ? 'style-loader' : MiniCssExtractPlugin.loader, 'css-loader'],
        },
      ],
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
    },
  };

  return config;
};
