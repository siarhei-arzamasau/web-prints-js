import {configureStore} from '@reduxjs/toolkit';
import elementsTreeReducer from '@/entities/elementsTree/model/elementsTreeSlice';

export const store = configureStore({reducer: {elementsTree: elementsTreeReducer}});
