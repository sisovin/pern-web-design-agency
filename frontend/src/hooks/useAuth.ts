import { useState, useEffect } from 'react';
import { login, register, refreshToken, logout } from '../api/auth';

const useAuth = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem('token');
      if (token) {
        try {
          const data = await refreshToken(token);
          setUser(data.user);
          localStorage.setItem('token', data.token);
        } catch (error) {
          console.error('Failed to refresh token:', error);
        }
      }
      setLoading(false);
    };

    checkAuth();
  }, []);

  const handleLogin = async (email, password) => {
    try {
      const data = await login(email, password);
      setUser(data.user);
      localStorage.setItem('token', data.token);
    } catch (error) {
      console.error('Failed to login:', error);
    }
  };

  const handleRegister = async (email, password) => {
    try {
      const data = await register(email, password);
      setUser(data.user);
      localStorage.setItem('token', data.token);
    } catch (error) {
      console.error('Failed to register:', error);
    }
  };

  const handleLogout = async () => {
    try {
      await logout();
      setUser(null);
      localStorage.removeItem('token');
    } catch (error) {
      console.error('Failed to logout:', error);
    }
  };

  return {
    user,
    loading,
    handleLogin,
    handleRegister,
    handleLogout,
  };
};

export default useAuth;
