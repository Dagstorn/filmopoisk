import {  createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface AuthState {
  token: string | null;
  isAuthenticated: boolean;
}

export const initialState: AuthState = {
  token: null,
  isAuthenticated: false,
};


const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
      state.isAuthenticated = true;
    },
    clearToken: (state) => {
      state.token = null;
      state.isAuthenticated = false;
    },
    restoreLogin(state, action: PayloadAction<string | null>) {
      if (action.payload) {
        state.isAuthenticated = true;
        state.token = action.payload;
      } else {
        state.isAuthenticated = false;
        state.token = null;
      }
    },
  },
});

export const { setToken, clearToken, restoreLogin } = authSlice.actions;
export default authSlice.reducer;
