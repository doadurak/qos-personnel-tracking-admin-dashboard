import React from 'react';

const QosMap = () => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-blue-100">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-blue-900">QoS Heatmap</h3>
        <span className="text-[10px] text-blue-600 bg-blue-50 px-2 py-1 rounded-md font-black uppercase tracking-widest cursor-pointer hover:bg-blue-100 transition-all">Detailed View →</span>
      </div>

      <div className="relative bg-slate-50 rounded-xl p-4 border border-blue-50">
        <svg className="w-full h-48" viewBox="0 0 200 120">
          <rect x="5" y="5" width="190" height="110" fill="white" stroke="#e2e8f0" strokeWidth="1" rx="8" />
          {/* Floor Zones based on QoS Quality */}
          <rect x="10" y="10" width="55" height="45" fill="#10b981" fillOpacity="0.2" stroke="#10b981" strokeWidth="1" rx="4" />
          <rect x="135" y="10" width="55" height="45" fill="#f59e0b" fillOpacity="0.2" stroke="#f59e0b" strokeWidth="1" rx="4" />
          <rect x="100" y="60" width="90" height="50" fill="#ef4444" fillOpacity="0.2" stroke="#ef4444" strokeWidth="1" rx="4" />
          
          {/* AP Status Points */}
          <circle cx="37" cy="32" r="4" fill="#10b981" className="animate-pulse" />
          <circle cx="162" cy="32" r="4" fill="#f59e0b" />
          <circle cx="145" cy="85" r="4" fill="#ef4444" />
          
          <text x="37" y="50" textAnchor="middle" fill="#1e40af" fontSize="6" fontWeight="bold">Lobby</text>
          <text x="145" y="105" textAnchor="middle" fill="#1e40af" fontSize="6" fontWeight="bold">Server Room</text>
        </svg>
      </div>

      <div className="grid grid-cols-3 gap-3 mt-6">
        <StatusBox count="3" label="Optimal" color="green" />
        <StatusBox count="1" label="Warning" color="amber" />
        <StatusBox count="1" label="Critical" color="red" />
      </div>
    </div>
  );
};

const StatusBox = ({ count, label, color }) => (
  <div className={`text-center p-3 rounded-xl bg-${color}-50 border border-${color}-100`}>
    <p className={`text-2xl font-black text-${color}-600`}>{count}</p>
    <p className="text-[10px] text-slate-500 font-bold uppercase">{label}</p>
  </div>
);

export default QosMap;