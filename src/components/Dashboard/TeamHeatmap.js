import React from 'react';

const TeamHeatmap = () => {
  // Simulating performance scores (Sp) from the paper
  const heatmapData = [
    { value: '94%', color: 'bg-green-500' }, { value: '87%', color: 'bg-green-400' },
    { value: '96%', color: 'bg-green-600' }, { value: '72%', color: 'bg-amber-400' },
    { value: '89%', color: 'bg-green-500' }, { value: 'Weekend', color: 'bg-slate-100' },
    { value: 'Weekend', color: 'bg-slate-100' },
    // Week 2
    { value: '88%', color: 'bg-green-400' }, { value: '92%', color: 'bg-green-500' },
    { value: '68%', color: 'bg-amber-300' }, { value: '93%', color: 'bg-green-500' },
    { value: '90%', color: 'bg-green-500' }, { value: 'Weekend', color: 'bg-slate-100' },
    { value: 'Weekend', color: 'bg-slate-100' },
    // Week 3
    { value: '97%', color: 'bg-green-600' }, { value: '94%', color: 'bg-green-500' },
    { value: '91%', color: 'bg-green-500' }, { value: '58%', color: 'bg-red-400' },
    { value: '76%', color: 'bg-amber-400' }, { value: 'Weekend', color: 'bg-slate-100' },
    { value: 'Weekend', color: 'bg-slate-100' },
    // Week 4
    { value: '89%', color: 'bg-green-400' }, { value: '92%', color: 'bg-green-500' },
    { value: '95%', color: 'bg-green-500' }, { value: '87%', color: 'bg-green-400' },
    { value: '98%', color: 'bg-green-600' }, { value: 'Weekend', color: 'bg-slate-100' },
    { value: 'Weekend', color: 'bg-slate-100' },
  ];

  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-blue-100">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-blue-900">Team Performance Heatmap</h3>
        <select className="bg-blue-50 border border-blue-100 rounded-xl px-4 py-2 text-xs font-bold text-blue-800 outline-none cursor-pointer hover:bg-blue-100 transition-all">
          <option>All Departments</option>
          <option>Software</option>
          <option>Marketing</option>
          <option>Operations</option>
        </select>
      </div>

      <div className="grid grid-cols-7 gap-2">
        {days.map(day => (
          <div key={day} className="text-[10px] uppercase font-black text-blue-400 text-center mb-2 tracking-tighter">
            {day}
          </div>
        ))}

        {heatmapData.map((cell, index) => (
          <div
            key={index}
            className={`h-10 rounded-lg ${cell.color} cursor-pointer transition-all hover:scale-110 shadow-sm border border-white/20`}
            title={`Efficiency Score: ${cell.value}`}
          />
        ))}
      </div>

      <div className="flex items-center justify-between mt-6 pt-4 border-t border-slate-50">
        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Low Efficiency</span>
        <div className="flex gap-1.5">
          <div className="w-4 h-4 rounded bg-red-400"></div>
          <div className="w-4 h-4 rounded bg-amber-400"></div>
          <div className="w-4 h-4 rounded bg-green-400"></div>
          <div className="w-4 h-4 rounded bg-green-600"></div>
        </div>
        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">High Efficiency</span>
      </div>
    </div>
  );
};

export default TeamHeatmap;