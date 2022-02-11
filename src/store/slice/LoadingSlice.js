/* eslint-disable no-undef */
/* eslint-disable prefer-destructuring */
import { createSlice } from '@reduxjs/toolkit';

const LoadingSlice = createSlice({
  name: 'Loading',
  initialState:
  {
    loading: false,
    loaded: false,

  },
  reducers: {
    setLoading(state) {
      state.loading = true;
      state.loaded = false;
    },
    setLoaded(state) {
      state.loading = false;
      state.loaded = true;
    },

  },
});

export const loading = (state) => state.Loading.loading;
export const loaded = (state) => state.Loading.loaded;
export const {
  setLoading, setLoaded,
} = LoadingSlice.actions;
export default LoadingSlice.reducer;
