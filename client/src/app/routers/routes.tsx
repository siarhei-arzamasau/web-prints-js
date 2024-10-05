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
        children: [
          {path: 'index', element: <HomePage />, isPublic: true},
          {path: '/editor/lol', element: <HomePage />, isPublic: true},
          {path: '/editor/2', element: <EditorPage />, isPublic: true},
        ],
      },
    ],
  },
];
