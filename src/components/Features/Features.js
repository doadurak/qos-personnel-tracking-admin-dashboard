import './Features.css';
import { Activity, Cpu, Wifi } from 'lucide-react';

export default function Features() {
  const items = [
    {
      icon: <Wifi size={28} />,
      title: 'QoS İzleme',
      desc: 'Güvenilir iş gücü bağlantısı için gecikme, veri aktarım hızı ve paket kaybı dahil gerçek zamanlı Wi-Fi performans analizi.'
    },
    {
      icon: <Cpu size={28} />,
      title: 'AutoML Performans Tahmini',
      desc: 'Mükemmele yakın tahmin doğruluğu için H2O AutoML, XGBoost ve GBM kullanarak otomatik model seçimi ve optimizasyonu.'
    },
    {
      icon: <Activity size={28} />,
      title: 'Dijital İkiz Senkronizasyonu',
      desc: 'Gerçek zamanlı izleme ve simülasyon için fiziksel IoT cihazları ile sanal kopyaları arasında sürekli veri eşitleme.'
    }
  ];

  return (
    <section id="features" className="features-section">
      <div className="features-container">
        <span className="features-badge">TEMEL YETENEKLER</span>

        <h2 className="features-title">Kurumsal Özellikler</h2>
        <p className="features-subtitle">
          Gelişmiş Yapay Zeka, Dijital İkiz ve IoT teknolojileriyle desteklenen 
          kapsamlı iş gücü ve ağ yönetimi.
        </p>

        <div className="features-grid">
          {items.map((item, i) => (
            <div key={i} className="feature-card">
              <div className="feature-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}