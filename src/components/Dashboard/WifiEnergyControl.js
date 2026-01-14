import React, { useState } from 'react';
import { Wifi, WifiOff, Zap } from 'lucide-react';

const WifiEnergyControl = () => {
  const [apStatus, setApStatus] = useState([
    { id: 'AP-01', location: 'Lobi', devices: 32, power: '2.4W', active: true, color: 'green' },
    { id: 'AP-02', location: 'Kat 1', devices: 58, power: '3.1W', active: true, color: 'blue' },
    { id: 'AP-03', location: 'Kat 2', devices: 12, power: '1.8W', active: true, color: 'amber' },
    { id: 'AP-04', location: 'Toplantı', devices: 0, power: '0W', active: false, color: 'slate' },
  ]);

  const toggleAp = (id) => {
    setApStatus(prev => prev.map(ap => 
      ap.id === id ? { ...ap, active: !ap.active, power: !ap.active ? '2.1W' : '0W' } : ap
    ));
  };

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-blue-100">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-blue-900">Wi-Fi Energy Control</h3>
        <span className="text-blue-600 text-xs font-bold bg-blue-50 px-3 py-1 rounded-full uppercase tracking-tighter cursor-pointer hover:bg-blue-100 transition-all">All APs →</span>
      </div>
      
      <div className="space-y-3">
        {apStatus.map((ap) => (
          <div key={ap.id} className={`flex items-center justify-between p-4 rounded-xl border transition-all ${ap.active ? `bg-${ap.color}-50 border-${ap.color}-200` : 'bg-slate-50 border-slate-200 opacity-75'}`}>
            <div className="flex items-center gap-3">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center shadow-sm ${ap.active ? `bg-${ap.color}-500 text-white` : 'bg-slate-400 text-white'}`}>
                {ap.active ? <Wifi size={24} /> : <WifiOff size={24} />}
              </div>
              <div>
                <p className="text-sm font-bold text-slate-800">{ap.id} {ap.location}</p>
                <p className="text-xs text-slate-500 font-medium">{ap.active ? `${ap.devices} devices connected` : 'Sleep Mode - Saving Energy'}</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className={`text-sm font-bold ${ap.active ? `text-${ap.color}-600` : 'text-slate-500'}`}>{ap.power}</span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" checked={ap.active} onChange={() => toggleAp(ap.id)} className="sr-only peer" />
                <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-6 pt-4 border-t border-blue-50 flex items-center justify-between p-4 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50">
        <span className="text-sm font-bold text-blue-900">Total AP Consumption</span>
        <span className="text-2xl font-black text-blue-600">7.3W</span>
      </div>
    </div>
  );
};

export default WifiEnergyControl;