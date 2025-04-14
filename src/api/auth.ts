import axiosInstance from './axios';

export const login = async (email: string, password: string) => {
  try {
    const response = await axiosInstance.post('/auth/login', { email, password });
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export const register = async (email: string, password: string) => {
  try {
    const response = await axiosInstance.post('/auth/register', { email, password });
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export const refreshToken = async (refreshToken: string) => {
  try {
    const response = await axiosInstance.post('/auth/refresh-token', { refreshToken });
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};
