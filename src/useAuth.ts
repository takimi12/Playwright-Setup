// useAuth.js
import { useState, useEffect, useCallback } from 'react';

export const useAuth = () => {
  const [isAuth, setIsAuth] = useState(() => {
    // Sprawdza localStorage przy inicjalizacji
    return localStorage.getItem('auth') === 'true';
  });

  const login = useCallback(() => {
    localStorage.setItem('auth', 'true');
    setIsAuth(true);
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem('auth');
    setIsAuth(false);
  }, []);

  useEffect(() => {
    const handleStorageChange = () => {
      setIsAuth(localStorage.getItem('auth') === 'true');
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  return { isAuth, login, logout };
};
