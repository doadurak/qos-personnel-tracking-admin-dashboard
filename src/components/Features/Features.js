import './Features.css';
import { Activity, Cpu, Wifi } from 'lucide-react';

export default function Features() {
  const items = [
    {
      icon: <Wifi size={28} />,
      title: 'QoS Monitoring',
      desc: 'Real-time Wi-Fi performance analysis including latency, throughput, and packet loss for reliable workforce connectivity.'
    },
    {
      icon: <Cpu size={28} />,
      title: 'AutoML Performance Prediction',
      desc: 'Automated model selection and optimization using H2O AutoML, XGBoost, and GBM for near-perfect prediction accuracy.'
    },
    {
      icon: <Activity size={28} />,
      title: 'Digital Twin Synchronization',
      desc: 'Continuous synchronization between physical IoT devices and their virtual replicas for real-time monitoring and simulation.'
    }
  ];

  return (
    <section id="features" className="features-section">
      <div className="features-container">
        <span className="features-badge">CORE CAPABILITIES</span>

        <h2 className="features-title">Enterprise Features</h2>
        <p className="features-subtitle">
          Comprehensive workforce and network management powered by advanced AI,
          Digital Twin, and IoT technologies.
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
