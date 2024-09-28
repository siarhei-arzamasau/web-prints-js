import {Providers} from './providers/providers';
import {AppRouter} from './routers/appRouter';

const App = () => {
  return (
    <Providers>
      <AppRouter />
    </Providers>
  );
};

export default App;
