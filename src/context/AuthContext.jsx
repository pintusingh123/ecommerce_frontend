import { createContext, useContext, useEffect, useState } from "react";

import { loginUser, registerUser } from "../api/authApi";
import { getProfile } from "../api/profileApi";

import { tokenService } from "../services/tokenService";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(
    !!tokenService.getAccessToken(),
  );
  const [loading, setLoading] = useState(true);

  // Check authentication on app load
  useEffect(() => {
    const checkAuth = async () => {
      const token = tokenService.getAccessToken();

      if (token) {
        setIsAuthenticated(true);

        await fetchProfile();
      }

      setLoading(false);
    };

    checkAuth();
  }, []);

  // Register
  const register = async (userData) => {
    try {
      const res = await registerUser(userData);
      return {
        success: true,
        data: res.data,
      };
    } catch (err) {
      return {
        success: false,
        error: err.response?.data || err.message,
      };
    }
  };

  // Login
  const login = async (credentials) => {
    try {
      const res = await loginUser(credentials);

      tokenService.setTokens(res.data.access, res.data.refresh);

      setIsAuthenticated(true);

      await fetchProfile();

      return {
        success: true,
      };
    } catch (err) {
      return {
        success: false,
        error: err.response?.data || err.message,
      };
    }
  };

  // Logout
  const logout = () => {
    tokenService.clearTokens();
    setUser(null);
    setIsAuthenticated(false);
  };

 // profile fetching
const fetchProfile = async () => {
  try {
    const res = await getProfile();

    setUser(res.data);

    return res.data;
  } catch (error) {
    console.error(error);

    if (error.response?.status === 401) {
      tokenService.clearTokens();
      setIsAuthenticated(false);
    }

    setUser(null);

    return null;
  }
};

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        loading,
        isAuthenticated,
        register,
        login,
        logout,
        fetchProfile,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
