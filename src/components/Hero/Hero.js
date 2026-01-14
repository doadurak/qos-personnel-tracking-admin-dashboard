import './Hero.css';
import DigitalTwin from '../../images/DigitalTwin.png';

export default function Hero() {
  return (
    <section className="hero">

      {/* SOL TARAF */}
      <div className="hero-left">
        <h1>
          QoS-Based Personnel Tracking
          <span> Digital Twin & AutoML</span>
        </h1>

        <p className="hero-subtitle">
          Real-time IoT data, Wi-Fi QoS monitoring and AutoML-driven
          predictive analytics to transform workforce management
          and energy efficiency in smart buildings.
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
      alt="Digital Twin System Architecture"
      className="hero-image"
    />
  </div>
</div>
    </section>
  );
}
