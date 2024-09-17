declare module '*.module.css' {
  interface ClassNames {
    [name: string]: string;
  }

  const classNames: ClassNames;
  export = classNames;
}

declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';

declare module '*.svg' {
  import React from 'react';
  const SVG: React.VFC<React.SVGProps<SVGSVGElement>>;
  export default SVG;
}

declare const __IS_DEV__: string;
declare const __IS_PROD__: string;
declare const __ENVIRONMENT__: string;
