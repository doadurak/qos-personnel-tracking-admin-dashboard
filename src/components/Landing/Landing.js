import './Landing.css';
import {
  Cpu,
  Wifi,
  Brain,
  BarChart3,
  ShieldCheck,
} from 'lucide-react';

export default function Landing() {
  return (
    <div className="page">

      {/* ===== NAVBAR ===== */}
      <header className="navbar">
        <div className="logo">DT TwinTrack AI</div>
        <nav className="nav">
          <button>Özellikler</button>
          <button>Digital Twin</button>
          <button>AutoML</button>
          <button className="cta">Admin Dashboard</button>
        </nav>
      </header>

      {/* ===== HERO ===== */}
      <section className="hero">
        <div className="hero-text">
          <h1>
            QoS-Based Personnel Tracking <br />
            with <span>Digital Twin & AutoML</span>
          </h1>
          <p>
            Real-time IoT data, Wi-Fi QoS monitoring and predictive analytics
            to transform workforce management and energy efficiency
            in smart buildings.
          </p>
        </div>

        <div className="hero-box">
          <Cpu size={40} />
          <p>Digital Twin powered<br />Workforce Modeling</p>
        </div>
      </section>

      {/* ===== FEATURES ===== */}
      <section className="features">
        <Feature
          icon={<Wifi />}
          title="QoS-Aware Wi-Fi Management"
          text="Latency, packet loss and throughput are continuously monitored
          to maintain real-time synchronization between physical IoT devices
          and their Digital Twins."
        />
        <Feature
          icon={<Brain />}
          title="AutoML-Driven Performance Prediction"
          text="H2O AutoML, XGBoost and GBM automatically select and optimize
          models to predict employee performance with near-perfect accuracy."
        />
        <Feature
          icon={<BarChart3 />}
          title="Advanced Workforce Analytics"
          text="Beyond attendance tracking, efficiency ratio, break ratio
          and performance score are derived from real-time data streams."
        />
      </section>

      {/* ===== DIGITAL TWIN SECTION ===== */}
      <section className="deep">
        <h2>Digital Twin & IoT Integration</h2>
        <p>
          The system creates a virtual replica of personnel and network
          infrastructure, continuously synchronized with IoT sensors via Wi-Fi.
          This enables simulation, prediction and optimization of both
          workforce behavior and network reliability.
        </p>
      </section>

      {/* ===== SECURITY / TRUST ===== */}
      <section className="trust">
        <ShieldCheck size={32} />
        <p>
          Secure, scalable and explainable AI architecture designed
          for enterprise-level workforce management and smart buildings.
        </p>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="footer">
        <div>
          <strong>DT TwinTrack AI</strong><br />
          QoS-Based Personnel Tracking System
        </div>

        <div>
          <p>
            Built on IoT, Digital Twin and AutoML technologies
            to support data-driven workforce optimization
            and energy-aware network management.
          </p>
        </div>

        <div className="footer-bottom">
          © 2026 TwinTrack AI · Academic & Industrial Research Project
        </div>
      </footer>
    </div>
  );
}

function Feature({ icon, title, text }) {
  return (
    <div className="feature">
      {icon}
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}
