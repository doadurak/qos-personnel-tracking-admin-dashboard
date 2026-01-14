import React, { useState } from 'react';
import { 
  Wifi, Zap, Battery, activity, BarChart3, 
  Settings2, ShieldAlert, Thermometer, Clock, Users
} from 'lucide-react';
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, 
  Tooltip, ResponsiveContainer, LineChart, Line 
} from 'recharts';

const WifiEnergyManagement = () => {
  // Makale III-D senaryolarını simüle eden veri
  const qosTrendData = [
    { time: '08:00', latency: 26, energy: 4.2 },
    { time: '10:00', latency: 28, energy: 4.5 },
    { time: '12:00', latency: 85, energy: 7.8 }, // Yük senaryosu (Lunch Break)
    { time: '14:00', latency: 32, energy: 4.8 },
    { time: '16:00', latency: 27, energy: 4.3 },
  ];

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700 text-left">
      {/* Sayfa Başlığı */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="text-left">
          <h3 className="text-2xl font-black text-blue-900 uppercase tracking-tight flex items-center gap-3">
            <Wifi className="text-blue-600" size={32} /> Network & Energy Optimization
          </h3>
          <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mt-1">
            Dynamic Access Point Management via Digital Twin
          </p>
        </div>
        <div className="bg-green-50 px-6 py-2 rounded-2xl border border-green-100">
           <p className="text-[10px] font-black text-green-600 uppercase tracking-widest text-center">Current Savings</p>
           <p className="text-2xl font-black text-green-700 text-center">-8.4% kWh</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* SOL: QoS ve Enerji Grafiği (8 Sütun) */}
        <div className="lg:col-span-8 space-y-8">
          <div className="bg-white rounded-3xl p-8 border border-blue-100 shadow-sm">
            <div className="flex justify-between items-center mb-8">
              <div className="text-left">
                <h4 className="font-black text-blue-900 text-lg uppercase">Latency vs. Energy Consumption</h4>
                <p className="text-slate-400 text-[10px] font-bold uppercase mt-1">Impact of Network Load on RTT and Power</p>
              </div>
              <div className="flex gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-blue-600"></div>
                  <span className="text-[10px] font-bold text-slate-500 uppercase">Latency (ms)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span className="text-[10px] font-bold text-slate-500 uppercase">Energy (kW)</span>
                </div>
              </div>
            </div>
            <div className="h-[350px] w-full text-left">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={qosTrendData}>
                  <defs>
                    <linearGradient id="colorLatency" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#2563eb" stopOpacity={0.1}/>
                      <stop offset="95%" stopColor="#2563eb" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                  <XAxis dataKey="time" axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 10, fontWeight: 700}} />
                  <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 10, fontWeight: 700}} />
                  <Tooltip contentStyle={{borderRadius: '16px', border: 'none', boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1)'}} />
                  <Area type="monotone" dataKey="latency" stroke="#2563eb" strokeWidth={4} fillOpacity={1} fill="url(#colorLatency)" />
                  <Area type="monotone" dataKey="energy" stroke="#10b981" strokeWidth={4} fillOpacity={0} />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* AP Status Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             <APDetailCard id="AP-01" label="Lobby Area" devices="32" temp="24°C" status="Optimal" />
             <APDetailCard id="AP-02" label="Production Floor" devices="124" temp="28°C" status="High Load" warning />
          </div>
        </div>

        {/* SAĞ: Otonom Kontroller (4 Sütun) */}
        <div className="lg:col-span-4 space-y-8">
          <div className="bg-[#001f3f] rounded-3xl p-8 text-white shadow-2xl space-y-6">
            <h4 className="font-black text-sky-400 text-sm uppercase tracking-widest flex items-center gap-2">
              <Settings2 size={18} /> Autonomous Controls
            </h4>
            
            <ControlToggle label="Smart Sleep Mode" desc="Auto-disable idle APs" active />
            <ControlToggle label="Traffic Shaping" desc="Prioritize IoT packets" active />
            <ControlToggle label="Staggered Breaks" desc="Auto-scheduling logic" />

            <div className="pt-6 border-t border-white/10">
               <div className="flex items-center gap-3 p-4 bg-white/5 rounded-2xl border border-white/10">
                  <ShieldAlert className="text-amber-400" size={24} />
                  <div className="text-left">
                    <p className="text-[10px] font-black uppercase text-amber-400">QoS Alert Threshold</p>
                    <p className="text-xs font-medium text-slate-300">RTT exceeded 80ms at 12:04</p>
                  </div>
               </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 border border-blue-100 shadow-sm text-left">
            <h4 className="font-black text-blue-900 text-sm uppercase tracking-widest mb-6">Real-time Metrics</h4>
            <div className="space-y-6 text-left">
              <MetricRow label="Avg Throughput" value="450 Mbps" icon={<BarChart3 size={16} />} />
              <MetricRow label="Packet Loss" value="0.02%" icon={<ShieldAlert size={16} />} />
              <MetricRow label="Active Nodes" value="18 APs" icon={<Wifi size={16} />} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Yardımcı Bileşenler ---

const APDetailCard = ({ id, label, devices, temp, status, warning }) => (
  <div className={`bg-white p-6 rounded-3xl border transition-all ${warning ? 'border-amber-200 bg-amber-50/30' : 'border-blue-50'}`}>
    <div className="flex justify-between items-start mb-4">
      <div className={`p-3 rounded-2xl ${warning ? 'bg-amber-500 text-white' : 'bg-blue-600 text-white'}`}>
        <Wifi size={20} />
      </div>
      <span className={`text-[9px] font-black px-2 py-1 rounded-lg uppercase ${warning ? 'bg-amber-100 text-amber-600' : 'bg-green-100 text-green-600'}`}>
        {status}
      </span>
    </div>
    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{id}</p>
    <h5 className="text-lg font-black text-blue-900 leading-none mt-1">{label}</h5>
    <div className="flex gap-4 mt-6">
      <div className="flex items-center gap-1.5 text-slate-500">
        <Users size={14} className="text-blue-400" />
        <span className="text-xs font-bold">{devices} Units</span>
      </div>
      <div className="flex items-center gap-1.5 text-slate-500">
        <Thermometer size={14} className="text-blue-400" />
        <span className="text-xs font-bold">{temp}</span>
      </div>
    </div>
  </div>
);

const ControlToggle = ({ label, desc, active }) => (
  <div className="flex items-center justify-between group">
    <div className="text-left">
      <p className="text-xs font-bold text-white group-hover:text-sky-400 transition-colors">{label}</p>
      <p className="text-[9px] text-slate-400 font-medium uppercase tracking-tighter">{desc}</p>
    </div>
    <div className={`w-10 h-5 rounded-full relative transition-all ${active ? 'bg-sky-500' : 'bg-slate-700'}`}>
      <div className={`absolute top-1 w-3 h-3 rounded-full bg-white transition-all ${active ? 'left-6' : 'left-1'}`}></div>
    </div>
  </div>
);

const MetricRow = ({ label, value, icon }) => (
  <div className="flex items-center justify-between text-left">
    <div className="flex items-center gap-2 text-slate-400">
      {icon}
      <span className="text-[10px] font-black uppercase tracking-widest">{label}</span>
    </div>
    <span className="text-sm font-black text-blue-900">{value}</span>
  </div>
);

export default WifiEnergyManagement;