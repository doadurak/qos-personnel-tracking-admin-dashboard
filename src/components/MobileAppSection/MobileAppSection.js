import React from "react";
import "./MobileAppSection.css";

import DashboardImg from "../../assets/mobile/mobile-dashboard.png";
import AnalyticsImg from "../../assets/mobile/mobile-analytics.png";
import PersonnelImg from "../../assets/mobile/mobile-personnel.png";

export default function MobileAppSection() {
  const images = [
    { src: DashboardImg, alt: "Mobil Panel" },
    { src: AnalyticsImg, alt: "Mobil Analitik" },
    { src: PersonnelImg, alt: "Personel Detayı" }
  ];

  return (
    <section id="mobile-app" className="mobile-section">
      <div className="mobile-container">

        <div className="mobile-header">
          <span className="mobile-badge">Mobil Uygulama</span>
          <h2>İş Gücünü Her Yerden Yönetin</h2>
          <p>
            Bütünleşik bir mobil deneyimle sunulan gerçek zamanlı personel takibi, 
            QoS analitiği ve performans öngörüleri.
          </p>
        </div>

        <div className="mobile-content">
          <div className="mobile-text">
            <ul>
              <li>📊 Canlı performans ve QoS panelleri</li>
              <li>👤 Aktivite zaman tünelli personel profilleri</li>
              <li>📡 Wi-Fi kapsaması ve erişim noktası izleme</li>
              <li>⚡ Enerji verimliliği ve kullanım analitiği</li>
            </ul>
          </div>

          <div className="mobile-visual">
            {images.map((img, index) => (
              <div key={index} className="phone-mockup">
                {/* Telefonun Üst Çentiği (Speaker/Notch) */}
                <div className="phone-speaker"></div>
                {/* Senin Ekran Görüntün */}
                <div className="phone-screen">
                  <img src={img.src} alt={img.alt} />
                </div>
                {/* Telefonun Alt Tuşu/Çizgisi */}
                <div className="phone-home-bar"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}