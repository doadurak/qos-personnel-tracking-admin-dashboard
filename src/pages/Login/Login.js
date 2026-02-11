import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import axios from "axios";
import { toast } from "react-toastify";
import { Player } from "@lottiefiles/react-lottie-player";
import { Mail, Lock, ChevronRight, ShieldCheck } from "lucide-react";
import animationData from "../../assets/factory-anim.json";

export default function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!email || !password) {
      toast.warn("Lütfen tüm alanları doldurun");
      return;
    }

    setLoading(true);

    try {
      const payload = {
        email: email.trim().toLowerCase(),
        password: password.trim(),
      };

      console.log("LOGIN PAYLOAD:", payload);

      const res = await axios.post(
        "http://localhost:5000/api/auth/login",
        payload,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log("LOGIN RESPONSE:", res.data);

      const { role, name } = res.data;

      // ŞİMDİLİK fake token (JWT'yi sonra ekleyeceğiz)
      const fakeToken = "DEV_TOKEN";

      login(fakeToken, role);

      toast.success(`Hoş geldin ${name}`);

      if (role === "ADMIN") {
        navigate("/admin");
      } else {
        navigate("/dashboard");
      }
    } catch (err) {
      console.error("LOGIN ERROR:", err.response?.data || err.message);

      toast.error(
        err.response?.data?.message || "Kimlik doğrulama başarısız."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page">
      <div className="animated-bg"></div>

      <div className="login-container">
        {/* SOL PANEL */}
        <div className="visual-section">
          <Player autoplay loop src={animationData} className="lottie-main" />
          <div className="visual-footer">
            <h2 className="tracking-tighter font-black">DIGITAL TWIN CLOUD</h2>
            <p className="text-[10px] opacity-60 uppercase tracking-[0.3em]">
              Real-time QoS Orchestration
            </p>
          </div>
        </div>

        {/* SAĞ PANEL */}
        <div className="form-section text-left">
          <div className="form-header">
            <div className="icon-badge">
              <ShieldCheck size={24} className="text-blue-600" />
            </div>
            <h1 className="text-3xl font-black text-slate-900">
              Sistem Girişi
            </h1>
            <p className="text-slate-400 text-sm mt-2">
              Lütfen yetkili bilgilerinizi giriniz.
            </p>
          </div>

          <div className="inputs-container">
            <div className="custom-input">
              <Mail className="input-icon" size={18} />
              <input
                type="email"
                placeholder="Kurumsal E-posta"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="custom-input">
              <Lock className="input-icon" size={18} />
              <input
                type="password"
                placeholder="Güvenli Şifre"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <div className="action-row">
            <button
              type="button"
              className="forgot-link"
              onClick={() =>
                toast.info("Şifre sıfırlama talebi yöneticiye iletilecek.")
              }
            >
              Şifremi Unuttum?
            </button>
          </div>

          <button
            className={`submit-button ${
              loading ? "loading opacity-70" : ""
            }`}
            onClick={handleLogin}
            disabled={loading}
          >
            {loading ? (
              "Doğrulanıyor..."
            ) : (
              <>
                <span className="mr-2">Sisteme Eriş</span>
                <ChevronRight size={20} />
              </>
            )}
          </button>

          <footer className="form-footer mt-10">
            <p className="text-[9px] text-slate-300 font-bold uppercase tracking-widest">
              Digital Twin Framework v1.2
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
}
