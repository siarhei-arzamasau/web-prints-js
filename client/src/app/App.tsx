import {AppProvider} from './providers';
import {AppRouter} from './routers';

export const App = () => {
  return (
    <AppProvider>
      <AppRouter />
    </AppProvider>
  );
};
