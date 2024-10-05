import {Routes, Route, BrowserRouter} from 'react-router-dom';
import {appRoutes} from './routes';
import {RouterPaths} from '@/shared/consts';
import {AppRoute} from './types';

const renderRoutes = (routes: AppRoute[], parentPath = '') => {
  return routes.map(({path, element, children}) => {
    const fullPath = parentPath ? `${parentPath}-${path}` : path;
    const isIndexRoute = path === RouterPaths.Index;

    return isIndexRoute ? (
      <Route index element={element} key={fullPath} />
    ) : (
      <Route path={path} element={element} key={fullPath}>
        {children && renderRoutes(children, fullPath)}
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
