import React from 'react';
import { Eye, MoreVertical } from 'lucide-react';

const PersonnelTwinStatus = () => {
  const personnel = [
    { id: 'AY', name: 'Ahmet Yilmaz', dept: 'Software', eff: 94, score: 'A+', status: 'Active', time: '2m ago', color: 'blue' },
    { id: 'EK', name: 'Elif Kaya', dept: 'Marketing', eff: 87, score: 'A', status: 'Active', time: '5m ago', color: 'pink' },
    { id: 'MD', name: 'Mehmet Demir', dept: 'Operations', eff: 72, score: 'B', status: 'Break', time: '15m ago', color: 'amber' },
  ];

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-blue-100 overflow-hidden">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-blue-900">Personnel Digital Twin Status</h3>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-xl text-sm font-bold hover:bg-blue-700 transition-all">+ New Personnel</button>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-blue-50 text-slate-400 text-xs font-black uppercase tracking-widest">
              <th className="pb-4">Personnel</th>
              <th className="pb-4">Dept.</th>
              <th className="pb-4">Efficiency (ηeff)</th>
              <th className="pb-4">Twin Status</th>
              <th className="pb-4">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-blue-50">
            {personnel.map((p, i) => (
              <tr key={i} className="group hover:bg-blue-50/50 transition-all">
                <td className="py-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-full bg-gradient-to-br from-${p.color}-400 to-${p.color}-600 flex items-center justify-center text-white font-bold shadow-sm`}>{p.id}</div>
                    <span className="font-bold text-slate-800 text-sm">{p.name}</span>
                  </div>
                </td>
                <td className="py-4 text-xs font-bold text-slate-500">{p.dept}</td>
                <td className="py-4">
                  <div className="flex items-center gap-2">
                    <div className="w-20 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                      <div className="h-full bg-green-500" style={{ width: `${p.eff}%` }}></div>
                    </div>
                    <span className="text-xs font-black text-green-600">{p.eff}%</span>
                  </div>
                </td>
                <td className="py-4">
                  <span className={`flex items-center gap-1.5 text-xs font-bold ${p.status === 'Active' ? 'text-green-600' : 'text-amber-600'}`}>
                    <span className={`w-2 h-2 rounded-full ${p.status === 'Active' ? 'bg-green-500 animate-pulse' : 'bg-amber-500'}`}></span>
                    {p.status}
                  </span>
                </td>
                <td className="py-4">
                  <button className="p-2 text-blue-600 hover:bg-blue-100 rounded-lg transition-all"><Eye size={18} /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PersonnelTwinStatus;