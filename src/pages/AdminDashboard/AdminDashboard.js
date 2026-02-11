import React, { useState, useEffect } from 'react';
import { 
  LayoutDashboard, Users, Brain, Wifi, Map, Settings, 
  Search, Bell, TrendingUp, Zap, AlertTriangle, Eye, Calendar,
  MoreVertical, LogOut, ChevronRight
} from 'lucide-react';
import api from '../../api/api';

import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer 
} from 'recharts';
import './AdminDashboard.css';

// Sayfaları ve Bileşenleri import ediyoruz
import LeaveManagement from './LeaveManagement';
import TeamHeatmap from '../../components/Dashboard/TeamHeatmap';
import PersonnelTwinStatus from '../../components/Dashboard/PersonnelTwinStatus';
import WifiEnergyControl from '../../components/Dashboard/WifiEnergyControl';
import QosMap from '../../components/Dashboard/QosMap';
import DigitalTwinPage from '../DigitalTwinPage/DigitalTwinPage'; 
import AdminProfile from '../AdminDashboard/AdminProfile'; 
import AutoMLPredictions from '../AdminDashboard/AutoMLPredictions'; 
import WifiEnergyManagement from '../AdminDashboard/WifiEnergyManagement'; 
import QosMapPage from '../AdminDashboard/QosMapPage';

const performanceData = [
  { name: 'Pzt', Sp: 85, eff: 70 },
  { name: 'Sal', Sp: 88, eff: 75 },
  { name: 'Çar', Sp: 92, eff: 80 },
  { name: 'Per', Sp: 78, eff: 65 },
  { name: 'Cum', Sp: 95, eff: 85 },
  { name: 'Cmt', Sp: 60, eff: 50 },
  { name: 'Paz', Sp: 65, eff: 55 },
];




const AdminDashboard = ({ user, onLogout }) => {
  const [activePage, setActivePage] = useState('dashboard');
  const [currentTime, setCurrentTime] = useState(new Date());
  const [users, setUsers] = useState([]);
const [loading, setLoading] = useState(true);


  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
  const fetchUsers = async () => {
    try {
      const res = await api.get("/users/all");

      // MOCK METRICS FALLBACK
      const enrichedUsers = res.data.map((u, i) => ({
        ...u,
        metrics: u.metrics || {
          performanceScore: 70 + i * 3,
        },
        status: u.status || "ACTIVE",
      }));

      setUsers(enrichedUsers);
    } catch (err) {
      console.error("User fetch error:", err);
    } finally {
      setLoading(false);
    }
  };

  fetchUsers();
}, []);


  return (
    <div className="flex h-screen w-full bg-slate-50 overflow-hidden font-sans text-slate-900">
      
      {/* SIDEBAR - Sabit genişlik ve yüksek performanslı Layout */}
      <aside className="w-72 flex-shrink-0 bg-white border-r border-blue-100 flex flex-col hidden lg:flex shadow-xl z-30">
        <div className="p-6 border-b border-blue-100">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-700 to-blue-900 flex items-center justify-center shadow-lg text-white">
              <Zap size={24} fill="white" />
            </div>
            <div className="text-left">
              <h1 className="font-bold text-xl text-blue-900 leading-none tracking-tight">TechCorp</h1>
              <span className="text-[10px] text-blue-600 font-black uppercase tracking-widest mt-1 inline-block">Admin Panel</span>
            </div>
          </div>
        </div>

        <nav className="flex-1 p-4 space-y-1 overflow-y-auto custom-scrollbar">
          <SidebarItem icon={<LayoutDashboard size={20}/>} label="Dashboard" active={activePage === 'dashboard'} onClick={() => setActivePage('dashboard')} />
          <SidebarItem icon={<Users size={20}/>} label="Digital Twins" active={activePage === 'twins'} onClick={() => setActivePage('twins')} />
          <SidebarItem icon={<Calendar size={20}/>} label="Leave Management" active={activePage === 'leave'} onClick={() => setActivePage('leave')} />
          <SidebarItem icon={<Brain size={20}/>} label="AutoML Tahminler" active={activePage === 'automl'} onClick={() => setActivePage('automl')} />
          <SidebarItem icon={<Wifi size={20}/>} label="Wi-Fi & Enerji" active={activePage === 'wifi'} onClick={() => setActivePage('wifi')} />
          <SidebarItem icon={<Map size={20}/>} label="QoS Haritası" active={activePage === 'qos'} onClick={() => setActivePage('qos')} />
        </nav>

        {/* Profil Alanı */}
        <div 
          onClick={() => setActivePage('profile')} 
          className={`p-4 border-t border-blue-50 cursor-pointer transition-all mb-2 ${
            activePage === 'profile' ? 'bg-blue-50' : 'hover:bg-slate-50'
          }`}
        >
          <div className="flex items-center gap-3 p-3 rounded-xl border border-transparent hover:border-blue-100">
            <div className="w-10 h-10 rounded-full bg-blue-900 flex items-center justify-center text-white font-bold text-xs shadow-md">TD</div>
            <div className="flex-1 min-w-0 text-left">
              <p className="text-sm font-semibold text-blue-900 truncate tracking-tighter">Türkan Doğa Durak</p>
              <p className="text-[10px] text-blue-600 font-black uppercase tracking-widest leading-none">Profil Ayarları</p>
            </div>
            <ChevronRight size={16} className={`transition-transform ${activePage === 'profile' ? 'rotate-90 text-blue-600' : 'text-blue-300'}`} />
          </div>
        </div>
      </aside>

      {/* MAIN CONTENT AREA */}
      <main className="flex-1 flex flex-col min-w-0 overflow-hidden bg-[#f8fafc]">
        
        {/* HEADER - Dinamik Başlık Sistemi */}
        <header className="flex-shrink-0 bg-white/90 backdrop-blur-md border-b border-blue-100 px-8 py-5 flex items-center justify-between shadow-sm z-20">
          <div className="text-left">
            <h2 className="text-2xl font-black text-blue-900 tracking-tight uppercase leading-none">
              {activePage === 'dashboard' && 'Yönetim Paneli'}
              {activePage === 'leave' && 'Leave Management'}
              {activePage === 'twins' && 'Digital Twins'}
              {activePage === 'profile' && 'Hesap ve İK Yönetimi'}
              {activePage === 'automl' && 'AutoML Analizleri'}
              {activePage === 'wifi' && 'Enerji Optimizasyonu'}
              {activePage === 'qos' && 'QoS Altyapı Haritası'}
            </h2>
            <div className="flex items-center gap-2 mt-1.5">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest leading-none">
                Real-time Analytics (AutoML R²: 0.995)
              </p>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <div className="relative hidden md:block">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-300" size={16} />
              <input type="text" placeholder="Search parameters..." className="bg-blue-50 border border-blue-100 rounded-xl pl-10 pr-4 py-2 text-xs focus:ring-2 focus:ring-blue-200 outline-none w-64 text-blue-900 font-medium" />
            </div>
            <div className="text-right bg-blue-50 px-4 py-2 rounded-xl border border-blue-100">
              <p className="text-[10px] text-blue-600 font-black uppercase tracking-tighter">{currentTime.toLocaleDateString('tr-TR', { weekday: 'long' })}</p>
              <p className="text-sm font-black text-blue-900 tracking-tighter leading-none mt-1">{currentTime.toLocaleTimeString('tr-TR')}</p>
            </div>
          </div>
        </header>

        {/* DİNAMİK İÇERİK - Scrollable Alan */}
        <div className="flex-1 overflow-y-auto p-8 animate-in fade-in duration-500 custom-scrollbar relative bg-[#f8fafc]">
          <div className="max-w-[1600px] mx-auto w-full">
            
            {/* DASHBOARD HOME */}
            {activePage === 'dashboard' && (
              <div className="space-y-8 animate-in slide-in-from-bottom-4 duration-500">
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
                  <StatCard
  title="Total Personnel"
  value={users.length}
  sub="Total registered users"
  icon={<Users />}
/>

<StatCard
  title="Active Twins"
  value={users.filter(u => u.status === 'ACTIVE').length}
  sub="Currently online"
  icon={<ActivityIcon />}
/>
                  <StatCard title="Power Saved" value="42.8 kWh" sub="-8% optimized" icon={<Zap className="text-white"/>} />
                  <StatCard title="QoS Score" value="%94.2" sub="Optimal Reliability" icon={<Wifi className="text-white"/>} />
                </div>

                <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 items-start">
                  <div className="xl:col-span-2 space-y-8 text-left">
                    <div className="bg-white rounded-3xl p-8 border border-blue-100 shadow-sm">
                      <h3 className="font-black text-blue-900 text-lg uppercase tracking-tight text-left mb-6">Performance Trend (Sp)</h3>
                      <div className="h-[350px] w-full">
                        <ResponsiveContainer width="100%" height="100%">
                          <AreaChart data={performanceData}>
                            <defs>
                              <linearGradient id="colorSp" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#1e40af" stopOpacity={0.15}/>
                                <stop offset="95%" stopColor="#1e40af" stopOpacity={0}/>
                              </linearGradient>
                            </defs>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                            <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 10, fontWeight: 700}} />
                            <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 10, fontWeight: 700}} />
                            <Tooltip contentStyle={{borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)'}} />
                            <Area type="monotone" dataKey="Sp" stroke="#1e40af" strokeWidth={4} fill="url(#colorSp)" />
                          </AreaChart>
                        </ResponsiveContainer>
                      </div>
                    </div>
                    <PersonnelTwinStatus />
                    <div className="bg-white rounded-3xl border border-blue-100 shadow-sm overflow-hidden">
                      <div className="p-6 border-b border-blue-50 bg-slate-50/30 text-left">
                        <h3 className="font-black text-blue-900 text-lg uppercase tracking-tight font-bold leading-none">Coverage Map Preview</h3>
                      </div>
                      <div className="p-6"><QosMap /></div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-8 text-left">
                    <TeamHeatmap />
                    <WifiEnergyControl />
                  </div>
                </div>
              </div>
            )}

            {/* DİNAMİK SAYFA RENDERLAMA */}
            {activePage === 'twins' && <DigitalTwinPage />}
            {activePage === 'leave' && <LeaveManagement />}
            {activePage === 'automl' && <AutoMLPredictions />}
            {activePage === 'wifi' && <WifiEnergyManagement />}
            {activePage === 'qos' && <QosMapPage />}
            {activePage === 'profile' && <AdminProfile onLogout={onLogout} />}
            
          </div>
        </div>
      </main>
    </div>
  );
};

// --- Helpers ---
const SidebarItem = ({ icon, label, active, onClick }) => (
  <button onClick={onClick} className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-2xl transition-all ${active ? 'bg-blue-600 text-white font-bold shadow-lg shadow-blue-200 translate-x-2 text-left' : 'text-slate-500 hover:bg-blue-50 hover:text-blue-900 text-left'}`}>
    {icon} <span className="text-sm tracking-tight">{label}</span>
  </button>
);

const StatCard = ({ title, value, sub, icon }) => (
  <div className="bg-white p-6 rounded-3xl border border-blue-100 shadow-sm hover:shadow-xl transition-all duration-300">
    <div className="flex justify-between items-start text-left">
      <div>
        <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest">{title}</p>
        <p className="text-3xl font-black text-blue-900 mt-2 tracking-tighter">{value}</p>
        <p className="text-xs text-blue-600 font-bold mt-2 flex items-center gap-1">
          <TrendingUp size={12} /> {sub}
        </p>
      </div>
      <div className="p-4 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl shadow-xl">
        {React.cloneElement(icon, { size: 24, strokeWidth: 3 })}
      </div>
    </div>
  </div>
);

const ActivityIcon = (props) => (
  <svg {...props} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
  </svg>
);

export default AdminDashboard;