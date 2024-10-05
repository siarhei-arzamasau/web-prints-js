import {ReactNode} from 'react';

export type AppRoute = {
  element: ReactNode;
  path?: string;
  children?: AppRoute[];
  isIndex?: boolean;
  isPublic: boolean;
};
