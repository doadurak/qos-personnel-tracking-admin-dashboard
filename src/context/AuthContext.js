import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // Başlangıç değerlerini localStorage'dan alıyoruz ki F5 atınca giriş gitmesin!
  const [token, setToken] = useState(localStorage.getItem("token") || null);
  const [role, setRole] = useState(localStorage.getItem("role") || null);

  // Uygulama ilk açıldığında localStorage'daki verileri state'e senkronize et
  useEffect(() => {
    const savedToken = localStorage.getItem("token");
    const savedRole = localStorage.getItem("role");
    if (savedToken && savedRole) {
      setToken(savedToken);
      setRole(savedRole);
    }
  }, []);

  const login = (newToken, userRole) => {
    // Role bilgisini garantilemek için büyük harfe çevirebilirsin
    const upperRole = userRole.toUpperCase(); 
    
    setToken(newToken);
    setRole(upperRole);
    
    localStorage.setItem("token", newToken);
    localStorage.setItem("role", upperRole);
  };

  const logout = () => {
    setToken(null);
    setRole(null);
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    // localStorage.clear() yerine spesifik silmek daha güvenlidir kanka
  };

  return (
    <AuthContext.Provider value={{ token, role, login, logout, isAuthenticated: !!token }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);