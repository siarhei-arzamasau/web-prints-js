declare module '*.module.css' {
  interface ClassNames {
    [name: string]: string;
  }

  const classNames: ClassNames;
  export = classNames;
}
