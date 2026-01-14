import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* SOL */}
        <div className="footer-brand">
          <h3>Akıllı Personel Takip Sistemi</h3>
          <p className="footer-thesis">
            Dijital İkiz Destekli QoS Tabanlı Akıllı Personel Takip Sistemi
          </p>
          <p className="footer-advisor">
            Danışman: <strong>Doç. Dr. Müge Erel Özçevik</strong>
          </p>
        </div>

        {/* ORTA */}
        <div className="footer-author">
          <h4>Geliştirici</h4>
          <p className="author-name">Türkan Doğa Durak</p>
          <p className="author-desc">Profesyonel Tez & Araştırma Geliştirme</p>
        </div>

        {/* SAĞ */}
        <div className="footer-links">
          <h4>Bağlantılar</h4>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>

      </div>

      {/* ALT ÇİZGİ */}
      <div className="footer-bottom">
        © {new Date().getFullYear()} | Academic Research & Digital Twin Systems
      </div>
    </footer>
  );
}
