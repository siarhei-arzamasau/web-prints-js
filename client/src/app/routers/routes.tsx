import {Layout} from '@app/layout';
import {EditorPage} from '@pages/editor';
import {HomePage} from '@pages/home';
import {RouterPaths} from '@/shared/consts';
import {AppRoute} from './types';

export const appRoutes: AppRoute[] = [
  {
    element: <Layout />,
    path: RouterPaths.Home,
    isPublic: true,
    children: [
      {path: RouterPaths.Index, element: <HomePage />, isPublic: true},
      {
        path: RouterPaths.Editor,
        element: <EditorPage />,
        isPublic: true,
      },
    ],
  },
];
