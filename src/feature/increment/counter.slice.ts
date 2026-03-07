import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../../store/store.ts';

type CounterSliceType = {
  counter: number;
}

const initialState: CounterSliceType = {
  counter: 0,
}

export const counterSlice = createSlice({
  name: 'slice',
  initialState,
  reducers: {
    increment: (state) => {
      state.counter += 1;
    },
    decrement: (state) => {
      state.counter -= 1;
    }
  }
});

export const { increment, decrement  } = counterSlice.actions;

export const selectCount = (state: RootState) =>
  state.counter.counter

export default counterSlice.reducer
