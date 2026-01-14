import "./Login.css";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    // fake login
    navigate("/admin");
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <h2>Kullanıcı Girişi</h2>

        <input type="email" placeholder="E-posta" />
        <input type="password" placeholder="Şifre" />

        <button onClick={handleLogin}>Giriş Yap</button>
      </div>
    </div>
  );
}
