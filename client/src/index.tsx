// index.tsx - entry point
import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import {App} from './app';
import './index.css';

// import {DiagramNode} from '~shared';
// const a = {} as DiagramNode;

const container = document.querySelector('#root') as HTMLElement;
const root = createRoot(container);

root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);
