import React from 'react';
import { 
  Plus, Users, Activity, AlertCircle, WifiOff, Filter, RefreshCw, Eye, MoreVertical 
} from 'lucide-react';

const DigitalTwinPage = () => {
  // Makaledeki veri modellerine göre simüle edilmiş personel listesi
  const twins = [
    { id: 'AY', name: 'Ahmet Yılmaz', email: 'ahmet.yilmaz@techcorp.com', dept: 'Software', eff: 94, score: 'A+', tasks: '12/14', time: '7.5h', status: 'Active', color: 'blue' },
    { id: 'EK', name: 'Elif Kaya', email: 'elif.kaya@techcorp.com', dept: 'Marketing', eff: 87, score: 'A', tasks: '9/11', time: '6.2h', status: 'Active', color: 'pink' },
    { id: 'MD', name: 'Mehmet Demir', email: 'mehmet.demir@techcorp.com', dept: 'Operations', eff: 72, score: 'B', tasks: '6/10', time: '5.1h', status: 'Break', color: 'amber' },
    { id: 'ZA', name: 'Zeynep Arslan', email: 'zeynep.arslan@techcorp.com', dept: 'HR', eff: 91, score: 'A', tasks: '10/12', time: '6.8h', status: 'Active', color: 'cyan' },
    { id: 'ST', name: 'Selin Turan', email: 'selin.turan@techcorp.com', dept: 'Software', eff: 89, score: 'A', tasks: '11/13', time: '7.0h', status: 'Active', color: 'violet' },
    { id: 'CÖ', name: 'Can Özkan', email: 'can.ozkan@techcorp.com', dept: 'Software', eff: 58, score: 'C', tasks: '4/10', time: '4.2h', status: 'Offline', color: 'red' },
  ];

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Header with Actions */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h3 className="text-2xl font-black text-blue-900 uppercase tracking-tight">Digital Twin Management</h3>
          <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mt-1">Detailed analysis of personnel digital twins</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 text-white text-xs font-black uppercase tracking-widest hover:bg-blue-700 transition-all shadow-lg shadow-blue-200">
            <Plus size={18} strokeWidth={3} /> New Digital Twin
          </button>
          <button className="px-5 py-2.5 rounded-xl border-2 border-blue-100 text-blue-600 text-xs font-black uppercase tracking-widest hover:bg-blue-50 transition-colors">
            Bulk Actions
          </button>
        </div>
      </div>

      {/* Quick Stats Bar */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <TwinStat icon={<Users size={20}/>} label="Active Twins" value="238" sub="/ 247" color="green" />
        <TwinStat icon={<Activity size={20}/>} label="Avg Performance" value="87.4%" color="blue" />
        <TwinStat icon={<AlertCircle size={20}/>} label="Alerts" value="7" color="amber" />
        <TwinStat icon={<WifiOff size={20}/>} label="Offline" value="9" color="slate" />
      </div>

      {/* Filters Area */}
      <div className="bg-white rounded-2xl p-4 border border-blue-100 shadow-sm flex flex-wrap items-center gap-4">
        <div className="flex items-center gap-2 text-blue-900 font-black text-xs uppercase tracking-widest px-2">
          <Filter size={16} /> Filter By:
        </div>
        <select className="bg-blue-50 border-none rounded-xl px-4 py-2 text-xs font-bold text-blue-800 outline-none focus:ring-2 focus:ring-blue-200 cursor-pointer">
          <option>All Departments</option>
          <option>Software</option>
          <option>Marketing</option>
        </select>
        <select className="bg-blue-50 border-none rounded-xl px-4 py-2 text-xs font-bold text-blue-800 outline-none focus:ring-2 focus:ring-blue-200 cursor-pointer">
          <option>All Statuses</option>
          <option>Active</option>
          <option>Break</option>
        </select>
        <div className="flex-1"></div>
        <button className="flex items-center gap-1 text-blue-600 text-[10px] font-black uppercase tracking-widest hover:underline">
          <RefreshCw size={14} /> Reset Filters
        </button>
      </div>

      {/* Digital Twin Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {twins.map((twin, index) => (
          <TwinCard key={index} data={twin} />
        ))}
      </div>
    </div>
  );
};

// Alt Bileşenler (Components)
const TwinStat = ({ icon, label, value, sub, color }) => (
  <div className="bg-white rounded-2xl p-4 border border-blue-50 shadow-sm flex items-center gap-4">
    <div className={`w-12 h-12 rounded-xl bg-${color}-100 text-${color}-600 flex items-center justify-center shadow-inner`}>
      {icon}
    </div>
    <div>
      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{label}</p>
      <p className="text-xl font-black text-blue-900 leading-tight mt-0.5">{value} <span className="text-xs text-slate-400">{sub}</span></p>
    </div>
  </div>
);

const TwinCard = ({ data }) => (
  <div className={`bg-white rounded-3xl p-6 border border-blue-100 shadow-sm hover:shadow-xl transition-all duration-300 group ${data.status === 'Offline' ? 'opacity-75' : ''}`}>
    <div className="flex items-start justify-between mb-6">
      <div className="flex items-center gap-4">
        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br from-${data.color}-400 to-${data.color}-600 flex items-center justify-center text-xl font-black text-white shadow-lg group-hover:rotate-3 transition-transform`}>
          {data.id}
        </div>
        <div>
          <h4 className="font-black text-blue-900 tracking-tight">{data.name}</h4>
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{data.email}</p>
          <div className="flex items-center gap-2 mt-2">
            <span className="text-[9px] font-black uppercase tracking-widest bg-blue-50 text-blue-600 px-2 py-0.5 rounded-full border border-blue-100">{data.dept}</span>
            <div className="flex items-center gap-1">
              <span className={`w-1.5 h-1.5 rounded-full ${data.status === 'Active' ? 'bg-green-500 animate-pulse' : data.status === 'Break' ? 'bg-amber-500' : 'bg-slate-400'}`}></span>
              <span className="text-[9px] font-black text-slate-500 uppercase tracking-widest">{data.status}</span>
            </div>
          </div>
        </div>
      </div>
      <button className="text-slate-300 hover:text-blue-600 transition-colors"><MoreVertical size={20}/></button>
    </div>

    {/* Metrics */}
    <div className="space-y-4 mb-6">
      <div>
        <div className="flex justify-between mb-1.5">
          <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Efficiency (ηeff)</span>
          <span className="text-xs font-black text-green-600">{data.eff}%</span>
        </div>
        <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-green-400 to-green-600" style={{ width: `${data.eff}%` }}></div>
        </div>
      </div>
      <div>
        <div className="flex justify-between mb-1.5">
          <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Performance Score (Sp)</span>
          <span className="text-xs font-black text-blue-600">{data.score}</span>
        </div>
        <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-blue-400 to-blue-600" style={{ width: data.score === 'A+' ? '98%' : data.score === 'A' ? '85%' : '70%' }}></div>
        </div>
      </div>
    </div>

    <div className="grid grid-cols-2 gap-3 mb-6">
      <div className="bg-slate-50 rounded-2xl p-3 text-center border border-slate-100 group-hover:bg-blue-50 transition-colors">
        <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Daily Task</p>
        <p className="text-sm font-black text-blue-900 mt-0.5">{data.tasks}</p>
      </div>
      <div className="bg-slate-50 rounded-2xl p-3 text-center border border-slate-100 group-hover:bg-blue-50 transition-colors">
        <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Active Time</p>
        <p className="text-sm font-black text-blue-900 mt-0.5">{data.time}</p>
      </div>
    </div>

    <button className="w-full py-3 rounded-2xl bg-slate-900 text-white text-[10px] font-black uppercase tracking-[0.2em] hover:bg-blue-600 transition-all shadow-lg hover:shadow-blue-200">
      View Detail Twin
    </button>
  </div>
);

export default DigitalTwinPage;