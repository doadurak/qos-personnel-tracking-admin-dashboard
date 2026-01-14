import './DigitalTwin.css';
import DigitalTwinImg from '../../assets/images/DigitalTwin.png';

export default function DigitalTwin() {
  return (
    <section id="digital-twin" className="dt-section">
      <div className="dt-container">

        {/* SOL TARAF – METİN */}
        <div className="dt-text">
          <span className="dt-badge">DIGITAL TWIN POWERED</span>

          <h2>
            Real-Time Workforce & Network
            <span> Digital Twin Platform</span>
          </h2>

          <p>
            The system creates a synchronized virtual replica of personnel,
            IoT devices, and Wi-Fi infrastructure. Real-time data streams
            continuously update the Digital Twin, enabling simulation,
            QoS-aware monitoring, and predictive decision support.
          </p>

          <ul>
            <li>✔ Real-time IoT & Wi-Fi synchronization</li>
            <li>✔ QoS-aware Digital Twin monitoring</li>
            <li>✔ Predictive workforce analytics with AutoML</li>
          </ul>
        </div>

        {/* SAĞ TARAF – GÖRSEL */}
        <div className="dt-visual">
          <div className="dt-glow" />
          <img src={DigitalTwinImg} alt="Digital Twin Visualization" />
        </div>

      </div>
    </section>
  );
}
