import React from "react";
import "./DigitalTwinVisualization.css";

export default function DigitalTwinVisualization() {
  return (
    <section className="dt-section">
      <div className="dt-container">

        {/* BAŞLIK (HEADER) */}
        <div className="dt-header">
          <span className="dt-badge">Dijital İkiz</span>
          <h2>Gerçek Zamanlı Bina Görselleştirme</h2>
          <p>
            Canlı personel takibi ve Wi-Fi QoS izleme özellikli, 
            akıllı bir fabrikanın etkileşimli dijital ikizi.
          </p>
        </div>

        {/* KART (CARD) */}
        <div className="dt-card">
          <div className="dt-canvas">

            <svg viewBox="0 0 800 520">
              {/* BİNA (BUILDING) */}
              <rect x="40" y="40" width="720" height="440" rx="14" className="dt-building"/>

              {/* ODALAR (ROOMS) */}
              {rooms.map((room) => (
                <g key={room.label}>
                  <rect
                    x={room.x}
                    y={room.y}
                    width={room.w}
                    height={room.h}
                    rx="10"
                    className="dt-room"
                  />
                  <text
                    x={room.x + room.w / 2}
                    y={room.y + room.h / 2 + 5}
                    textAnchor="middle"
                    className="dt-room-label"
                  >
                    {room.label}
                  </text>
                </g>
              ))}

              {/* ERİŞİM NOKTALARI (ACCESS POINTS) */}
              {accessPoints.map((ap, i) => (
                <g key={i}>
                  <circle cx={ap.x} cy={ap.y} r="7" className="dt-ap-core">
                    <animate
                      attributeName="r"
                      values="7;11;7"
                      dur="2s"
                      repeatCount="indefinite"
                    />
                  </circle>
                  <circle cx={ap.x} cy={ap.y} r="18" className="dt-ap-wave">
                    <animate
                      attributeName="r"
                      values="18;32;18"
                      dur="2s"
                      repeatCount="indefinite"
                    />
                  </circle>
                </g>
              ))}

              {/* PERSONEL (PERSONNEL) */}
              {personnel.map((p, i) => (
                <circle key={i} cx={p.x} cy={p.y} r="5" className="dt-person">
                  <animate
                    attributeName="cx"
                    values={`${p.x};${p.x + 20};${p.x}`}
                    dur={`${7 + i}s`}
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="cy"
                    values={`${p.y};${p.y + 12};${p.y}`}
                    dur={`${7 + i}s`}
                    repeatCount="indefinite"
                  />
                </circle>
              ))}
            </svg>

            {/* GÖSTERGE (LEGEND) */}
            <div className="dt-legend">
              <LegendItem type="ap" label="Wi-Fi Erişim Noktası" />
              <LegendItem type="person" label="Personel" />
              <LegendItem type="coverage" label="Kapsama Alanı" />
            </div>
          </div>

          {/* İSTATİSTİKLER (STATS) */}
          <div className="dt-stats">
            <Stat label="Aktif Personel" value="47" />
            <Stat label="Erişim Noktası" value="7" />
            <Stat label="Kapsama Oranı" value="%92" />
            <Stat label="Ort. Gecikme" value="8 ms" />
          </div>
        </div>

      </div>
    </section>
  );
}

/* ---------------- VERİ (DATA) ---------------- */

const rooms = [
  { x: 60, y: 60, w: 200, h: 120, label: "Üretim Alanı" },
  { x: 300, y: 60, w: 200, h: 120, label: "Montaj Hattı" },
  { x: 540, y: 60, w: 200, h: 120, label: "Kalite Kontrol" },
  { x: 60, y: 210, w: 280, h: 120, label: "Depo" },
  { x: 380, y: 210, w: 180, h: 120, label: "Ofis" },
  { x: 600, y: 210, w: 140, h: 120, label: "Dinlenme Odası" },
  { x: 60, y: 360, w: 680, h: 90, label: "Lojistik ve Sevkiyat" },
];

const accessPoints = [
  { x: 160, y: 90 },
  { x: 400, y: 90 },
  { x: 640, y: 90 },
  { x: 220, y: 250 },
  { x: 470, y: 250 },
  { x: 660, y: 250 },
];

const personnel = [
  { x: 140, y: 110 },
  { x: 380, y: 120 },
  { x: 610, y: 115 },
  { x: 200, y: 270 },
  { x: 450, y: 285 },
  { x: 640, y: 270 },
  { x: 350, y: 400 },
];

/* ---------------- UI PARÇALARI (UI PARTS) ---------------- */

function Stat({ label, value }) {
  return (
    <div className="dt-stat">
      <strong>{value}</strong>
      <span>{label}</span>
    </div>
  );
}

function LegendItem({ type, label }) {
  return (
    <div className="dt-legend-item">
      <span className={`dt-dot ${type}`} />
      {label}
    </div>
  );
}