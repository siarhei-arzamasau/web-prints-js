import {Routes, Route, BrowserRouter} from 'react-router-dom';

import {Layout} from '@app/layout';
import {EditorPage} from '@pages/editor';
import {HomePage} from '@pages/home';
import {RouterPaths} from '@/shared/consts';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={RouterPaths.Home} element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path={RouterPaths.Editor} element={<EditorPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
