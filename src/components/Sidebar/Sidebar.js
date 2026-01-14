import React from 'react';
import './Sidebar.css';
import { 
  LayoutDashboard, Users, Brain, Wifi, Map, Zap, CalendarCheck 
} from 'lucide-react'; // CalendarCheck ikonunu ekledik

const Sidebar = ({ activePage, onPageChange }) => {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: <LayoutDashboard size={20} /> },
    { id: 'digital-twins', label: 'Digital Twins', icon: <Users size={20} /> },
    { id: 'leave', label: 'Leave Management', icon: <CalendarCheck size={20} /> }, // Yeni öğe
    { id: 'automl', label: 'AutoML Tahminler', icon: <Brain size={20} /> },
    { id: 'wifi', label: 'Wi-Fi & Enerji', icon: <Wifi size={20} /> },
    { id: 'qos', label: 'QoS Haritası', icon: <Map size={20} /> },
  ];

  return (
    <aside className="sidebar-container">
      <div className="sidebar-logo">
        <div className="logo-icon"><Zap size={24} color="white" /></div>
        <div className="logo-text">
          <h1>SW Twin</h1>
          <span>Admin Panel</span>
        </div>
      </div>
      <nav className="sidebar-nav">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onPageChange(item.id)}
            className={`nav-item ${activePage === item.id ? 'active' : ''}`}
          >
            {item.icon} <span>{item.label}</span>
          </button>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;