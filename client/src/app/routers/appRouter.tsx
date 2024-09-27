import {Routes, Route, BrowserRouter} from 'react-router-dom';

import {EditorPage} from '@/pages/editor';
import {HomePage} from '@/pages/home';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='editor' element={<EditorPage />} />
      </Routes>
    </BrowserRouter>
  );
};
