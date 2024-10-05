import {Outlet} from 'react-router-dom';
import * as s from './layout.module.css';

export const Layout = () => {
  return (
    <main className={s.layout}>
      <Outlet />
    </main>
  );
};
