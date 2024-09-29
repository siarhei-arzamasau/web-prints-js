import {Provider} from 'react-redux';
import {store} from '@app/providers';

export const AppProvider = ({children}: ChildrenProps) => {
  return <Provider store={store}>{children}</Provider>;
};
