import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk } from '../../app/store';
import { login, register, refreshToken } from '../../api/auth';
import { AuthResponse, LoginData, RegisterData } from '../../interfaces';

interface AuthState {
  user: AuthResponse['user'] | null;
  token: string | null;
  loading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  user: null,
  token: null,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setLoading(state) {
      state.loading = true;
    },
    setError(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    setAuth(state, action: PayloadAction<AuthResponse>) {
      state.loading = false;
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.error = null;
    },
    clearAuth(state) {
      state.user = null;
      state.token = null;
      state.error = null;
    },
  },
});

export const { setLoading, setError, setAuth, clearAuth } = authSlice.actions;

export const loginUser = (loginData: LoginData): AppThunk => async (dispatch) => {
  try {
    dispatch(setLoading());
    const response = await login(loginData.email, loginData.password);
    dispatch(setAuth(response));
  } catch (error) {
    dispatch(setError(error.message));
  }
};

export const registerUser = (registerData: RegisterData): AppThunk => async (dispatch) => {
  try {
    dispatch(setLoading());
    const response = await register(registerData.email, registerData.password);
    dispatch(setAuth(response));
  } catch (error) {
    dispatch(setError(error.message));
  }
};

export const refreshUserToken = (refreshToken: string): AppThunk => async (dispatch) => {
  try {
    dispatch(setLoading());
    const response = await refreshToken(refreshToken);
    dispatch(setAuth(response));
  } catch (error) {
    dispatch(setError(error.message));
  }
};

export default authSlice.reducer;
