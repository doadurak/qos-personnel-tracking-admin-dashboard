import React from 'react';
import { 
  Brain, TrendingUp, AlertTriangle, Cpu, 
  BarChart3, Target, Gauge, Zap 
} from 'lucide-react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, 
  Tooltip, ResponsiveContainer, Cell 
} from 'recharts';

const AutoMLPredictions = () => {
  // Makale Fig 6: Feature Importance Verileri
  const featureImportance = [
    { name: 'Error Rate (e)', value: 45, color: '#ef4444' },
    { name: 'Efficiency Ratio (ηeff)', value: 30, color: '#3b82f6' },
    { name: 'Working Hours (h)', value: 15, color: '#1e40af' },
    { name: 'Break Minutes (b)', value: 10, color: '#0ea5e9' },
  ];

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700 text-left">
      {/* Sayfa Başlığı */}
      <div>
        <h3 className="text-2xl font-black text-blue-900 uppercase tracking-tight flex items-center gap-3">
          <Brain className="text-blue-600" size={32} /> AutoML Predictive Engine
        </h3>
        <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mt-1">
          Stacked Ensemble Model Results (R²: 0.995 / RMSE: 0.62)
        </p>
      </div>

      {/* Üst Tahmin Kartları */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <PredictionCard 
          title="Performance Projection" 
          value="%88.2" 
          desc="Next 15-day average Sp score" 
          icon={<Target className="text-blue-600" />} 
          trend="+5.2%"
        />
        <PredictionCard 
          title="Attrition Risk Index" 
          value="%12.4" 
          desc="Based on behavioral patterns" 
          icon={<AlertTriangle className="text-orange-500" />} 
          trend="Stable"
        />
        <PredictionCard 
          title="QoS Reliability Forecast" 
          value="%96.8" 
          desc="Estimated network stability" 
          icon={<Zap className="text-green-500" />} 
          trend="Optimal"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Feature Importance Grafiği */}
        <div className="bg-white rounded-3xl p-8 border border-blue-100 shadow-sm">
          <div className="mb-6">
            <h4 className="font-black text-blue-900 text-lg uppercase tracking-tighter flex items-center gap-2">
              <BarChart3 size={20} className="text-blue-500" /> Feature Importance Analysis
            </h4>
            <p className="text-slate-400 text-[10px] font-bold uppercase mt-1">Factors impacting Sp score calculation</p>
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={featureImportance} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} stroke="#f1f5f9" />
                <XAxis type="number" hide />
                <YAxis dataKey="name" type="category" axisLine={false} tickLine={false} tick={{fill: '#1e40af', fontSize: 10, fontWeight: 800}} width={140} />
                <Tooltip cursor={{fill: '#f8fafc'}} contentStyle={{borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)'}} />
                <Bar dataKey="value" radius={[0, 10, 10, 0]} barSize={30}>
                  {featureImportance.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* AutoML Model Leaderboard */}
        <div className="bg-[#001f3f] rounded-3xl p-8 text-white shadow-2xl relative overflow-hidden">
          <h4 className="font-black text-sky-400 text-lg uppercase tracking-tighter mb-6 flex items-center gap-2">
            <Cpu size={20} /> AutoML Leaderboard
          </h4>
          <div className="space-y-4 relative z-10">
            <ModelRow name="Stacked Ensemble" score="0.9954" active />
            <ModelRow name="XGBoost" score="0.9882" />
            <ModelRow name="GBM (Gradient Boosting)" score="0.9745" />
            <ModelRow name="Deep Learning" score="0.9610" />
            <ModelRow name="Random Forest" score="0.9520" />
          </div>
          <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-sky-500/10 rounded-full blur-3xl"></div>
        </div>
      </div>
    </div>
  );
};

// Yardımcı Bileşenler
const PredictionCard = ({ title, value, desc, icon, trend }) => (
  <div className="bg-white p-6 rounded-3xl border border-blue-50 shadow-sm hover:shadow-md transition-all group">
    <div className="flex justify-between items-start mb-4">
      <div className="p-3 bg-slate-50 rounded-2xl group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <span className="text-[10px] font-black px-2 py-1 bg-green-50 text-green-600 rounded-lg uppercase">
        {trend}
      </span>
    </div>
    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{title}</p>
    <h4 className="text-3xl font-black text-blue-900 my-1">{value}</h4>
    <p className="text-[10px] font-bold text-slate-500">{desc}</p>
  </div>
);

const ModelRow = ({ name, score, active }) => (
  <div className={`flex items-center justify-between p-3 rounded-xl border transition-all ${active ? 'bg-sky-500/20 border-sky-400/50' : 'bg-white/5 border-white/10'}`}>
    <span className={`text-xs font-bold ${active ? 'text-white' : 'text-slate-400'}`}>{name}</span>
    <div className="flex items-center gap-3">
      <span className="text-[10px] font-black text-sky-400 uppercase tracking-widest">R² Score</span>
      <span className="text-xs font-black font-mono">{score}</span>
    </div>
  </div>
);

export default AutoMLPredictions;