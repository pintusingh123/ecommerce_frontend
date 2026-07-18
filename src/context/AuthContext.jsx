import { createContext, useContext, useEffect, useState } from "react";
import { loginUser, registerUser } from "../api/authApi";
import { tokenService } from "../services/tokenService";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  // Check authentication on app load
  useEffect(() => {
    const token = tokenService.getAccessToken();

    if (token) {
      setIsAuthenticated(true);
    }

    setLoading(false);
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

      tokenService.setTokens(
        res.data.access,
        res.data.refresh
      );

      setIsAuthenticated(true);

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

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        isAuthenticated,
        register,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);