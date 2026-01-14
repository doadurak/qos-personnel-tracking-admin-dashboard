import React from 'react';
import './StatCard.css';

const StatCard = ({ title, value, subText, icon, colorClass }) => {
  return (
    <div className="stat-card">
      <div className="stat-info">
        <p className="stat-title">{title}</p>
        <p className="stat-value">{value}</p>
        <p className={`stat-subtext ${colorClass}`}>{subText}</p>
      </div>
      <div className="stat-icon-wrapper">
        {icon}
      </div>
    </div>
  );
};

export default StatCard;