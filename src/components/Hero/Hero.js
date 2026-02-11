import './Hero.css';
import DigitalTwin from '../../images/DigitalTwin.png';

export default function Hero() {
  return (
    <section className="hero">

      {/* SOL TARAF */}
      <div className="hero-left">
        <h1>
          QoS Tabanlı Personel Takibi
          <span> Dijital İkiz ve AutoML</span>
        </h1>

        <p className="hero-subtitle">
          Akıllı binalarda iş gücü yönetimini ve enerji verimliliğini dönüştürmek için 
          gerçek zamanlı IoT verileri, Wi-Fi QoS izleme ve AutoML destekli 
          öngörücü analizler.
        </p>

        <div className="hero-buttons">
          <button className="primary-btn">Sistemi Keşfet</button>
          <button className="secondary-btn">Teknik Doküman</button>
        </div>
      </div>

      {/* SAĞ TARAF */}
      <div className="hero-right">
        <div className="hero-image-wrapper">
          <img
            src={DigitalTwin}
            alt="Dijital İkiz Sistem Mimarisi"
            className="hero-image"
          />
        </div>
      </div>
    </section>
  );
}