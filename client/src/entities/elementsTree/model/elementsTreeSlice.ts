import {createSlice, PayloadAction} from '@reduxjs/toolkit';

type ElementsTreeState = {
  value: object | null;
};

const initialState: ElementsTreeState = {
  value: null,
};

const elementsTreeSlice = createSlice({
  name: 'elementsTree',
  initialState,
  reducers: {
    parsed(state, action: PayloadAction<object>) {
      state.value = action.payload;
    },
  },
});

export const {parsed} = elementsTreeSlice.actions;
export const elementsTreeReducer = elementsTreeSlice.reducer;
