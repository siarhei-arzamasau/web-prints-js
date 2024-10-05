import {Routes, Route, BrowserRouter} from 'react-router-dom';
import {appRoutes} from './routes';
import {RouterPaths} from '@/shared/consts';
import {AppRoute} from './types';

const renderRoutes = (routes: AppRoute[]) => {
  return routes.map(({path, element, children}) => {
    const isIndexRoute = path === RouterPaths.Index;

    return isIndexRoute ? (
      <Route index element={element} key={path} />
    ) : (
      <Route path={path} element={element} key={path}>
        {children && renderRoutes(children)}
      </Route>
    );
  });
};

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>{renderRoutes(appRoutes)}</Routes>
    </BrowserRouter>
  );
};
