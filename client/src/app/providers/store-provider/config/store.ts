import {configureStore} from '@reduxjs/toolkit';
import {elementsTreeReducer} from '@/entities/elementsTree';

export const store = configureStore({reducer: {elementsTree: elementsTreeReducer}});
