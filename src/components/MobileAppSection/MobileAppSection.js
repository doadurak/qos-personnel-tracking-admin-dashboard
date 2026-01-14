import React from "react";
import "./MobileAppSection.css";

import DashboardImg from "../../assets/mobile/mobile-dashboard.png";
import AnalyticsImg from "../../assets/mobile/mobile-analytics.png";
import PersonnelImg from "../../assets/mobile/mobile-personnel.png";

export default function MobileAppSection() {
  return (
    <section id="mobile-app" className="mobile-section">
      <div className="mobile-container">

        {/* HEADER */}
        <div className="mobile-header">
          <span className="mobile-badge">Mobile Application</span>
          <h2>Control Workforce Anywhere</h2>
          <p>
            Real-time personnel tracking, QoS analytics and performance insights
            delivered through a unified mobile experience.
          </p>
        </div>

        {/* CONTENT */}
        <div className="mobile-content">

          {/* TEXT */}
          <div className="mobile-text">
            <ul>
              <li>📊 Live performance & QoS dashboards</li>
              <li>👤 Personnel profiles with activity timelines</li>
              <li>📡 Wi-Fi coverage & access point monitoring</li>
              <li>⚡ Energy efficiency and usage analytics</li>
            </ul>
          </div>

          {/* PHONES */}
          <div className="mobile-visual">
            <img src={DashboardImg} alt="Mobile Dashboard" />
            <img src={AnalyticsImg} alt="Mobile Analytics" />
            <img src={PersonnelImg} alt="Personnel Detail" />
          </div>

        </div>
      </div>
    </section>
  );
}
