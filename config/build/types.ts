export type WebpackEnvs = {
  mode: 'development' | 'production';
  port: number;
};

export type WebpackPaths = {
  entry: string;
  output: string;
  html: string;
  src: string;
};

export type WebpackOptions = {
  envs: WebpackEnvs;
  paths: WebpackPaths;
  isDev: boolean;
  isProd: boolean;
};
