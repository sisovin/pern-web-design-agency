import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk } from '../../app/store';
import { setCache, getCache, deleteCache, setSession, getSession, deleteSession, rateLimit } from '../../api/redis';

interface CacheState {
  cache: Record<string, any>;
  sessions: Record<string, any>;
  rateLimits: Record<string, number>;
  loading: boolean;
  error: string | null;
}

const initialState: CacheState = {
  cache: {},
  sessions: {},
  rateLimits: {},
  loading: false,
  error: null,
};

const cacheSlice = createSlice({
  name: 'cache',
  initialState,
  reducers: {
    setLoading(state) {
      state.loading = true;
    },
    setError(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    setCacheData(state, action: PayloadAction<{ key: string; value: any }>) {
      state.loading = false;
      state.cache[action.payload.key] = action.payload.value;
      state.error = null;
    },
    setSessionData(state, action: PayloadAction<{ sessionId: string; sessionData: any }>) {
      state.loading = false;
      state.sessions[action.payload.sessionId] = action.payload.sessionData;
      state.error = null;
    },
    setRateLimit(state, action: PayloadAction<{ key: string; limit: number }>) {
      state.loading = false;
      state.rateLimits[action.payload.key] = action.payload.limit;
      state.error = null;
    },
    clearCache(state) {
      state.cache = {};
      state.error = null;
    },
    clearSessions(state) {
      state.sessions = {};
      state.error = null;
    },
    clearRateLimits(state) {
      state.rateLimits = {};
      state.error = null;
    },
  },
});

export const { setLoading, setError, setCacheData, setSessionData, setRateLimit, clearCache, clearSessions, clearRateLimits } = cacheSlice.actions;

export const fetchCacheData = (key: string): AppThunk => async (dispatch) => {
  try {
    dispatch(setLoading());
    const data = await getCache(key);
    dispatch(setCacheData({ key, value: data }));
  } catch (error) {
    dispatch(setError(error.message));
  }
};

export const saveCacheData = (key: string, value: any, ttl: number): AppThunk => async (dispatch) => {
  try {
    dispatch(setLoading());
    await setCache(key, value, ttl);
    dispatch(setCacheData({ key, value }));
  } catch (error) {
    dispatch(setError(error.message));
  }
};

export const removeCacheData = (key: string): AppThunk => async (dispatch) => {
  try {
    dispatch(setLoading());
    await deleteCache(key);
    dispatch(clearCache());
  } catch (error) {
    dispatch(setError(error.message));
  }
};

export const fetchSessionData = (sessionId: string): AppThunk => async (dispatch) => {
  try {
    dispatch(setLoading());
    const data = await getSession(sessionId);
    dispatch(setSessionData({ sessionId, sessionData: data }));
  } catch (error) {
    dispatch(setError(error.message));
  }
};

export const saveSessionData = (sessionId: string, sessionData: any, ttl: number): AppThunk => async (dispatch) => {
  try {
    dispatch(setLoading());
    await setSession(sessionId, sessionData, ttl);
    dispatch(setSessionData({ sessionId, sessionData }));
  } catch (error) {
    dispatch(setError(error.message));
  }
};

export const removeSessionData = (sessionId: string): AppThunk => async (dispatch) => {
  try {
    dispatch(setLoading());
    await deleteSession(sessionId);
    dispatch(clearSessions());
  } catch (error) {
    dispatch(setError(error.message));
  }
};

export const checkRateLimit = (key: string, limit: number, ttl: number): AppThunk => async (dispatch) => {
  try {
    dispatch(setLoading());
    const exceeded = await rateLimit(key, limit, ttl);
    dispatch(setRateLimit({ key, limit: exceeded ? limit : 0 }));
  } catch (error) {
    dispatch(setError(error.message));
  }
};

export default cacheSlice.reducer;
