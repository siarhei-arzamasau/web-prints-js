import {Routes, Route, BrowserRouter} from 'react-router-dom';

import {EditorPage} from '@/pages/editor';
import {HomePage} from '@/pages/home';
import {Layout} from '../layout/layout';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path='editor' element={<EditorPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
