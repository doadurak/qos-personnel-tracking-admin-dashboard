import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* SOL - PROJE VE DANIŞMAN BİLGİSİ */}
        <div className="footer-brand">
          <h3>Akıllı Personel Takip Sistemi</h3>
          <p className="footer-thesis">
            Dijital İkiz Destekli ve QoS Tabanlı Akıllı Personel Takip Sistemi
          </p>
          <p className="footer-advisor">
            Tez Danışmanı: <strong>Doç. Dr. Müge Erel Özçevik</strong>
          </p>
          <p className="footer-uni">Manisa Celal Bayar Üniversitesi</p>
        </div>

        {/* ORTA - GELİŞTİRİCİ BİLGİSİ */}
        <div className="footer-author">
          <h4>Araştırmacı & Geliştirici</h4>
          <p className="author-name">Türkan Doğa Durak</p>
          <p className="author-desc">Bilgisayar Mühendisliği Araştırma Grubu</p>
        </div>

        {/* SAĞ - BAĞLANTILAR */}
        <div className="footer-links">
          <h4>Hızlı Bağlantılar</h4>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
          >
            Kaynak Kodlar (GitHub)
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn Profili
          </a>
        </div>

      </div>

      {/* ALT ÇİZGİ */}
      <div className="footer-bottom">
        © {new Date().getFullYear()} | Akademik Araştırma ve Dijital İkiz Sistemleri
      </div>
    </footer>
  );
}