import './Header.css';
import { useNavigate } from "react-router-dom";


export default function Header() {
    const navigate = useNavigate();


  return (
    <header className="header">
      
      {/* SOL */}
      <div className="header-left">
        Personel Takip Sistemi
      </div>

      {/* ORTA MENÜ */}
      <nav className="header-menu">
        <a href="#features">Özellikler</a>
        <a href="#digital-twin">Digital Twin</a>
        <a href="#mobile">Mobil Uygulama</a>
      </nav>

      <div className="header-right">
  <button
    className="login-btn"
    onClick={() => navigate("/login")}
  >
    Kullanıcı Girişi
  </button>
</div>

    </header>
  );
}
