// import React, { useState, useRef } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { 
//   Plus, Trash2, Edit3, Save, X, FileBarChart, Layers,
//   Move, Target, ShieldCheck, Radio, Signal, Zap, Activity, Info
// } from 'lucide-react';

// const QosMapPage = () => {
//   const constraintsRef = useRef(null);
//   const [isEditMode, setIsEditMode] = useState(false);
//   const [reportRoom, setReportRoom] = useState(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   // Başlangıç Departmanları - Makale Fig 3 Mimarisi
//   const [rooms, setRooms] = useState([
//     { id: 1, x: 40, y: 40, w: 220, h: 160, name: "Software Lab", rtt: 26.7, color: "blue", type: "R&D" },
//     { id: 2, x: 280, y: 40, w: 280, h: 160, name: "Production Floor", rtt: 32.2, color: "green", type: "Main" },
//     { id: 3, x: 580, y: 40, w: 180, h: 160, name: "Break Room", rtt: 85.4, color: "amber", type: "Social" },
//     { id: 4, x: 40, y: 220, w: 520, h: 200, name: "Assembly Line", rtt: 28.1, color: "emerald", type: "Main" },
//     { id: 5, x: 580, y: 220, w: 180, h: 200, name: "Server Room", rtt: 124.8, color: "red", type: "Infra" },
//   ]);

//   const [newZoneForm, setNewZoneForm] = useState({ name: '', width: 180, height: 140, type: 'General' });

//   // Modal'dan yeni alan ekleme fonksiyonu
//   const handleDeployNode = (e) => {
//     e.preventDefault();
//     const newNode = {
//       id: Date.now(),
//       x: 30, y: 30,
//       w: parseInt(newZoneForm.width),
//       h: parseInt(newZoneForm.height),
//       name: newZoneForm.name || "Unnamed Node",
//       rtt: Math.floor(Math.random() * 50) + 20,
//       color: "indigo",
//       type: newZoneForm.type
//     };
//     setRooms([...rooms, newNode]);
//     setIsModalOpen(false);
//     setIsEditMode(true);
//     setNewZoneForm({ name: '', width: 180, height: 140, type: 'General' });
//   };

//   const deleteZone = (id) => {
//     setRooms(rooms.filter(r => r.id !== id));
//     if (reportRoom?.id === id) setReportRoom(null);
//   };

//   return (
//     <div className="space-y-8 animate-in fade-in duration-700 text-left pb-20 relative px-2">
      
//       {/* 1. ÜST PANEL - KONTROLLER */}
//       <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 bg-white p-8 rounded-[2.5rem] border border-blue-100 shadow-sm relative overflow-hidden">
//         <div className="relative z-10">
//           <div className="flex items-center gap-4 mb-2 text-left">
//             <div className="p-3 bg-blue-600 rounded-2xl shadow-lg shadow-blue-100">
//               <Layers className="text-white" size={24} />
//             </div>
//             <h3 className="text-2xl font-black text-blue-900 uppercase tracking-tighter leading-none">Infrastructure Manager</h3>
//           </div>
//           <p className="text-slate-500 text-xs font-bold uppercase tracking-widest flex items-center gap-2 mt-2">
//             <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
//             Real-time Digital Twin Synchronization
//           </p>
//         </div>

//         <div className="flex flex-wrap gap-4 relative z-10">
//           <button 
//             onClick={() => setIsEditMode(!isEditMode)}
//             className={`flex items-center gap-2 px-6 py-3.5 rounded-2xl text-[10px] font-black uppercase transition-all shadow-md ${isEditMode ? 'bg-amber-500 text-white shadow-amber-200' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
//           >
//             {isEditMode ? <><Save size={16}/> Lock Layout</> : <><Edit3 size={16}/> Configure Plan</>}
//           </button>
//           <button 
//             onClick={() => setIsModalOpen(true)}
//             className="flex items-center gap-2 bg-blue-900 text-white px-6 py-3.5 rounded-2xl text-[10px] font-black uppercase hover:bg-blue-800 shadow-xl shadow-blue-100 transition-all active:scale-95"
//           >
//             <Plus size={16} /> Deploy New Node
//           </button>
//         </div>
//       </div>

//       <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 items-start">
//         {/* 2. INTERAKTIF HARITA */}
//         <div className="xl:col-span-8 space-y-6">
//           <div className="bg-white rounded-[3.5rem] p-6 border border-blue-50 shadow-2xl relative">
//             <div className="mb-6 flex justify-between items-center px-4">
//                <div className="bg-blue-50 px-5 py-2 rounded-full flex items-center gap-3">
//                   <Target size={16} className="text-blue-600" />
//                   <span className="text-[10px] font-black text-blue-900 uppercase tracking-widest">Digital Twin Floor Plan</span>
//                </div>
//                <div className="flex gap-6">
//                   <LegendItem color="bg-green-500" label="Baseline" />
//                   <LegendItem color="bg-red-500" label="Congested" />
//                </div>
//             </div>

//             {/* Sürükleme Alanı - Radial Gradient Background */}
//             <div 
//               ref={constraintsRef}
//               className="relative w-full h-[650px] bg-[#fdfdfe] rounded-[3rem] border-2 border-dashed border-slate-200 overflow-hidden"
//               style={{ backgroundImage: 'radial-gradient(#e2e8f0 1.5px, transparent 1.5px)', backgroundSize: '40px 40px' }}
//             >
//               {rooms.map((room) => (
//                 <motion.div
//                   key={room.id}
//                   drag={isEditMode}
//                   dragConstraints={constraintsRef}
//                   dragMomentum={false}
//                   dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
//                   onClick={() => !isEditMode && setReportRoom(room)}
//                   initial={{ opacity: 0, scale: 0.9 }}
//                   animate={{ opacity: 1, scale: 1, left: room.x, top: room.y }}
//                   style={{ width: room.w, height: room.h, position: 'absolute' }}
//                   className={`rounded-[2.5rem] p-6 border-2 transition-all cursor-pointer group flex flex-col justify-between
//                     ${isEditMode ? 'cursor-move ring-8 ring-amber-400/10 border-amber-400 border-dashed bg-white/90 z-50' : 
//                       reportRoom?.id === room.id ? 'bg-white border-blue-600 shadow-2xl z-40 scale-[1.03]' : `bg-white/70 backdrop-blur-sm border-slate-100 hover:border-blue-300 shadow-sm`}
//                   `}
//                 >
//                   <div className="text-left">
//                     <div className="flex justify-between items-start mb-3">
//                       <span className={`text-[8px] font-black px-2.5 py-1 rounded-lg uppercase tracking-widest ${room.rtt > 80 ? 'bg-red-100 text-red-600' : 'bg-blue-100 text-blue-600'}`}>
//                         {room.type}
//                       </span>
//                       {isEditMode && (
//                         <button onClick={(e) => {e.stopPropagation(); deleteZone(room.id)}} className="text-red-400 hover:text-red-600 bg-red-50 p-1.5 rounded-xl transition-colors">
//                           <Trash2 size={16} />
//                         </button>
//                       )}
//                     </div>
//                     <h5 className="text-sm font-black text-blue-900 uppercase leading-tight tracking-tight">{room.name}</h5>
//                   </div>
                  
//                   <div className="space-y-3">
//                     <div className="flex justify-between items-end">
//                       <div className="text-left">
//                         <p className="text-[8px] font-bold text-slate-400 uppercase">RTT Latency</p>
//                         <p className={`text-sm font-black ${room.rtt > 80 ? 'text-red-600' : 'text-blue-600'}`}>{room.rtt} ms</p>
//                       </div>
//                       <div className={`p-2 rounded-xl ${room.rtt > 80 ? 'bg-red-50 text-red-500 animate-pulse' : 'bg-green-50 text-green-500'}`}>
//                          <Signal size={14} />
//                       </div>
//                     </div>
//                     <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden shadow-inner">
//                        <motion.div 
//                         initial={{ width: 0 }}
//                         animate={{ width: `${Math.min((room.rtt / 150) * 100, 100)}%` }}
//                         className={`h-full transition-all ${room.rtt > 80 ? 'bg-red-500' : 'bg-blue-500'}`} 
//                        />
//                     </div>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* 3. SAĞ PANEL - AI ANALİZ */}
//         <div className="xl:col-span-4 space-y-6">
//           <AnimatePresence mode="wait">
//             {reportRoom ? (
//               <motion.div 
//                 key="report"
//                 initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 30 }}
//                 className="bg-[#001f3f] rounded-[3.5rem] p-10 text-white shadow-2xl relative overflow-hidden"
//               >
//                 <div className="relative z-10 text-left">
//                   <div className="flex justify-between items-center mb-10">
//                     <div className="p-4 bg-white/10 rounded-2xl shadow-inner">
//                       <Zap size={24} className="text-sky-400" />
//                     </div>
//                     <button onClick={() => setReportRoom(null)} className="text-slate-400 hover:text-white transition-all hover:rotate-90">
//                       <X size={28} />
//                     </button>
//                   </div>

//                   <h4 className="text-[10px] font-black text-sky-400 uppercase tracking-[0.4em] mb-3">Zone QoS Analysis</h4>
//                   <h2 className="text-3xl font-black uppercase mb-10 tracking-tighter leading-none">{reportRoom.name}</h2>

//                   <div className="space-y-8">
//                     <DetailItem label="Service Quality" value={reportRoom.rtt > 80 ? "CRITICAL" : "OPTIMAL"} status={reportRoom.rtt > 80 ? "critical" : "good"} />
//                     <DetailItem label="Network Load" value={`${Math.floor(Math.random() * 40) + 10}%`} sub="Throughput Saturation" />
                    
//                     <div className="pt-8 border-t border-white/10">
//                       <div className="flex items-center gap-2 mb-4">
//                         <ShieldCheck size={16} className="text-sky-400" />
//                         <h5 className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Corrective Strategy</h5>
//                       </div>
//                       <div className="bg-sky-500/10 border border-sky-500/20 p-5 rounded-[1.5rem] flex items-start gap-3">
//                          <Info size={18} className="text-sky-400 shrink-0 mt-0.5" />
//                          <p className="text-[11px] text-slate-200 font-medium leading-relaxed uppercase tracking-tighter">
//                            {reportRoom.rtt > 80 
//                              ? "Staggered break scheduling initiated to mitigate current congestion." 
//                              : "Network baseline stable. Continue Digital Twin monitoring."}
//                          </p>
//                       </div>
//                     </div>
//                   </div>

//                   <button className="w-full mt-12 bg-sky-500 hover:bg-sky-400 text-blue-900 py-5 rounded-[2rem] font-black text-[11px] uppercase tracking-[0.2em] flex items-center justify-center gap-3 shadow-2xl transition-all hover:-translate-y-1 active:scale-95 group">
//                     <FileBarChart size={22} className="group-hover:rotate-12 transition-transform" /> Export QoS Report
//                   </button>
//                 </div>
//                 <Activity className="absolute bottom-[-60px] left-[-60px] size-72 text-white opacity-[0.03] pointer-events-none" />
//               </motion.div>
//             ) : (
//               <div className="bg-white rounded-[3.5rem] p-12 border border-blue-50 shadow-sm flex flex-col items-center justify-center text-center h-full min-h-[500px] group transition-all hover:shadow-xl">
//                 <div className="w-28 h-28 bg-blue-50 rounded-full flex items-center justify-center mb-8 group-hover:scale-110 transition-transform shadow-inner">
//                    <Radio size={56} className="text-blue-500 animate-pulse" />
//                 </div>
//                 <p className="text-sm font-black text-blue-900 uppercase tracking-[0.2em] leading-relaxed">System Ready<br/>Select Node</p>
//                 <p className="text-[10px] text-slate-400 font-bold mt-5 uppercase max-w-[220px] leading-loose">Select a department zone in the floor plan to start packet-level analysis</p>
//               </div>
//             )}
//           </AnimatePresence>
//         </div>
//       </div>

//       {/* 4. DEPLOY NODE MODAL */}
//       <AnimatePresence>
//         {isModalOpen && (
//           <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
//             <motion.div 
//               initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
//               onClick={() => setIsModalOpen(false)}
//               className="absolute inset-0 bg-blue-950/40 backdrop-blur-xl"
//             />
//             <motion.div 
//               initial={{ scale: 0.9, y: 30, opacity: 0 }} animate={{ scale: 1, y: 0, opacity: 1 }} exit={{ scale: 0.9, y: 30, opacity: 0 }}
//               className="relative w-full max-w-xl bg-white rounded-[4rem] p-12 shadow-2xl border border-blue-50 overflow-hidden"
//             >
//               <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
//                  <Zap size={180} className="text-blue-900" />
//               </div>

//               <div className="flex justify-between items-center mb-10 relative">
//                 <h4 className="text-3xl font-black text-blue-900 uppercase tracking-tighter">Deploy Twin Node</h4>
//                 <button onClick={() => setIsModalOpen(false)} className="bg-slate-50 p-3 rounded-2xl text-slate-400 hover:text-red-500 transition-colors shadow-sm"><X size={24}/></button>
//               </div>

//               <form onSubmit={handleDeployNode} className="space-y-8 text-left relative">
//                 <div className="space-y-3">
//                   <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] ml-2">Digital Identity (Name)</label>
//                   <input 
//                     autoFocus required type="text" 
//                     value={newZoneForm.name}
//                     onChange={(e) => setNewZoneForm({...newZoneForm, name: e.target.value})}
//                     placeholder="Ar-Ge Lab-04"
//                     className="w-full bg-slate-50 border-2 border-transparent rounded-[1.5rem] px-8 py-5 text-base font-bold text-blue-900 focus:border-blue-100 focus:bg-white transition-all outline-none shadow-inner"
//                   />
//                 </div>

//                 <div className="grid grid-cols-2 gap-8">
//                   <div className="space-y-3">
//                     <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] ml-2">Node Width (px)</label>
//                     <input 
//                       type="number" value={newZoneForm.width}
//                       onChange={(e) => setNewZoneForm({...newZoneForm, width: e.target.value})}
//                       className="w-full bg-slate-50 border-none rounded-[1.5rem] px-8 py-5 text-base font-bold text-blue-900 outline-none shadow-inner"
//                     />
//                   </div>
//                   <div className="space-y-3">
//                     <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] ml-2">Node Height (px)</label>
//                     <input 
//                       type="number" value={newZoneForm.height}
//                       onChange={(e) => setNewZoneForm({...newZoneForm, height: e.target.value})}
//                       className="w-full bg-slate-50 border-none rounded-[1.5rem] px-8 py-5 text-base font-bold text-blue-900 outline-none shadow-inner"
//                     />
//                   </div>
//                 </div>

//                 <button type="submit" className="w-full bg-blue-900 text-white py-6 rounded-[2.5rem] font-black text-xs uppercase tracking-[0.4em] shadow-2xl hover:bg-blue-800 transition-all hover:scale-[1.02] active:scale-95 mt-6">
//                   Sync & Initialize Node
//                 </button>
//               </form>
//             </motion.div>
//           </div>
//         )}
//       </AnimatePresence>

//     </div>
//   );
// };

// // --- Yardımcı Alt Bileşenler ---

// const DetailItem = ({ label, value, sub, status }) => (
//   <div className="text-left group">
//     <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1.5 group-hover:text-sky-400 transition-colors">{label}</p>
//     <div className="flex items-baseline gap-4">
//       <p className={`text-4xl font-black tracking-tighter leading-none ${status === 'critical' ? 'text-red-400' : 'text-white'}`}>{value}</p>
//       {sub && <span className="text-[9px] font-bold text-sky-300 uppercase opacity-60 tracking-widest">{sub}</span>}
//     </div>
//   </div>
// );

// const LegendItem = ({ color, label }) => (
//   <div className="flex items-center gap-3">
//     <div className={`w-3.5 h-3.5 rounded-full ${color} shadow-lg shadow-${color.split('-')[1]}/20`} />
//     <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{label}</span>
//   </div>
// );

// export default QosMapPage;

import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Plus, Trash2, Edit3, Save, X, FileBarChart, Layers,
  Move, Target, ShieldCheck, Radio, Signal, Zap, Activity, Info, Bell, Cpu
} from 'lucide-react';

const QosMapPage = () => {
  const constraintsRef = useRef(null);
  const [isEditMode, setIsEditMode] = useState(false);
  const [reportRoom, setReportRoom] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);

  // Otonom Karar Logları
  const [decisions] = useState([
    { id: 1, title: 'Network Mitigation', msg: 'Staggered break scheduling initiated due to high RTT (85ms) in Server Node.', time: 'Just now', type: 'urgent', icon: <Zap size={14}/> },
    { id: 2, title: 'Energy Optimization', msg: 'Access Point AP-04 shifted to Deep Sleep mode (Zero traffic detected).', time: '12 mins ago', type: 'success', icon: <Cpu size={14}/> },
    { id: 3, title: 'QoS Re-routing', msg: 'IoT data streams redirected to Node-02 to maintain baseline throughput.', time: '1 hour ago', type: 'info', icon: <Activity size={14}/> },
  ]);

  // Departman Verileri - Dikey Hiyerarşi
  const [rooms, setRooms] = useState([
    { id: 1, x: 50, y: 50, w: 220, h: 160, name: "Software Lab", rtt: 26.7, color: "blue", type: "R&D" },
    { id: 2, x: 300, y: 50, w: 220, h: 160, name: "Production Floor", rtt: 32.2, color: "green", type: "Main" },
    { id: 3, x: 550, y: 50, w: 220, h: 160, name: "Break Room", rtt: 85.4, color: "amber", type: "Social" },
    { id: 4, x: 50, y: 250, w: 470, h: 200, name: "Assembly Line", rtt: 28.1, color: "emerald", type: "Main" },
    { id: 5, x: 550, y: 250, w: 220, h: 200, name: "Server Room", rtt: 124.8, color: "red", type: "Infra" },
    { id: 6, x: 50, y: 480, w: 720, h: 200, name: "Logistics Hub", rtt: 30.5, color: "cyan", type: "Operations" },
  ]);

  const [newZoneForm, setNewZoneForm] = useState({ name: '', width: 220, height: 160, type: 'General' });

  const handleDeployNode = (e) => {
    e.preventDefault();
    const newNode = {
      id: Date.now(),
      x: 50, y: 700, 
      w: parseInt(newZoneForm.width),
      h: parseInt(newZoneForm.height),
      name: newZoneForm.name || "Unnamed Node",
      rtt: 30,
      color: "indigo",
      type: newZoneForm.type
    };
    setRooms([...rooms, newNode]);
    setIsModalOpen(false);
    setIsEditMode(true);
    setNewZoneForm({ name: '', width: 220, height: 160, type: 'General' });
  };

  return (
    <div className="flex flex-col space-y-6 animate-in fade-in duration-700 pb-80 relative px-2">
      
      {/* 1. ÜST ARAÇ ÇUBUĞU & OTONOM BİLDİRİM BUTONU */}
      <div className="flex items-center justify-between bg-white p-6 rounded-[2.5rem] border border-blue-50 shadow-sm sticky top-0 z-[100] backdrop-blur-md bg-white/80">
        <div className="flex items-center gap-4 text-left">
          <div className="p-3 bg-blue-600 rounded-2xl text-white shadow-lg shadow-blue-100">
            <Layers size={20} />
          </div>
          <div>
            <h3 className="text-lg font-black text-blue-900 uppercase leading-none">Infrastructure Manager</h3>
            <p className="text-[10px] font-bold text-slate-400 uppercase mt-1 tracking-widest">Digital Twin Orchestration</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          {/* BİLDİRİM TETİKLEYİCİ */}
          <button 
            onClick={() => setIsNotificationsOpen(!isNotificationsOpen)}
            className="relative p-3 bg-blue-50 text-blue-600 rounded-2xl hover:bg-blue-600 hover:text-white transition-all group"
          >
            <Bell size={20} className="group-hover:rotate-12 transition-transform" />
            <span className="absolute top-2 right-2 w-3 h-3 bg-red-500 border-2 border-white rounded-full animate-bounce"></span>
          </button>

          <div className="h-8 w-[1px] bg-slate-100 mx-1"></div>

          <button onClick={() => setIsEditMode(!isEditMode)} className={`flex items-center gap-2 px-6 py-3 rounded-2xl text-[10px] font-black uppercase transition-all shadow-sm ${isEditMode ? 'bg-amber-500 text-white shadow-amber-200' : 'bg-slate-50 text-slate-600 hover:bg-slate-100'}`}>
            {isEditMode ? <><Save size={16}/> Lock Plan</> : <><Edit3 size={16}/> Configure</>}
          </button>
          <button onClick={() => setIsModalOpen(true)} className="flex items-center gap-2 bg-blue-900 text-white px-6 py-3 rounded-2xl text-[10px] font-black uppercase hover:bg-blue-800 shadow-xl transition-all active:scale-95">
            <Plus size={16} /> Deploy Node
          </button>
        </div>

        {/* OTONOM KARAR PANELİ */}
        <AnimatePresence>
          {isNotificationsOpen && (
            <motion.div 
              initial={{ opacity: 0, y: 10, scale: 0.95 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 10, scale: 0.95 }}
              className="absolute top-24 right-6 w-96 bg-white rounded-[2.5rem] shadow-2xl border border-blue-50 overflow-hidden z-[110]"
            >
              <div className="p-6 bg-slate-50 border-b border-blue-50 flex justify-between items-center">
                 <h4 className="font-black text-blue-900 text-xs uppercase tracking-widest flex items-center gap-2">
                    <Cpu size={16} className="text-blue-600" /> Autonomous Decision Hub
                 </h4>
                 <button onClick={() => setIsNotificationsOpen(false)} className="text-slate-400 hover:text-red-500 transition-colors"><X size={18}/></button>
              </div>
              <div className="max-h-[400px] overflow-y-auto p-4 space-y-3 custom-scrollbar">
                {decisions.map(dec => (
                  <div key={dec.id} className="p-4 rounded-2xl bg-white border border-slate-100 hover:border-blue-200 transition-all text-left">
                    <div className="flex justify-between items-start mb-2">
                       <span className={`p-1.5 rounded-lg ${dec.type === 'urgent' ? 'bg-red-50 text-red-500' : 'bg-blue-50 text-blue-600'}`}>
                          {dec.icon}
                       </span>
                       <span className="text-[8px] font-black text-slate-300 uppercase">{dec.time}</span>
                    </div>
                    <p className="text-[10px] font-black text-blue-900 uppercase mb-1">{dec.title}</p>
                    <p className="text-[11px] text-slate-500 font-medium leading-relaxed italic">"{dec.msg}"</p>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* 2. HARİTA ALANI (1500px DİKEY) */}
      <div className="relative bg-white rounded-[4rem] p-10 border border-blue-50 shadow-2xl overflow-hidden min-h-[1500px]">
        <div ref={constraintsRef} className="relative w-full h-[1400px] bg-[#fdfdfe] rounded-[3rem] border-2 border-dashed border-slate-200 overflow-hidden"
             style={{ backgroundImage: 'radial-gradient(#e2e8f0 1.5px, transparent 1.5px)', backgroundSize: '60px 60px' }}>
          
          {rooms.map((room) => (
            <motion.div
              key={room.id} drag={isEditMode} dragConstraints={constraintsRef} dragMomentum={false}
              onClick={() => !isEditMode && setReportRoom(room)}
              animate={{ left: room.x, top: room.y }}
              style={{ width: room.w, height: room.h, position: 'absolute' }}
              className={`rounded-[2.5rem] p-6 border-2 transition-all cursor-pointer flex flex-col justify-between overflow-hidden
                ${isEditMode ? 'ring-8 ring-amber-400/10 border-amber-400 border-dashed bg-white/90 z-50' : 
                  reportRoom?.id === room.id ? 'bg-white border-blue-600 shadow-2xl z-40 scale-[1.02]' : `bg-white border-slate-100 hover:border-blue-300 shadow-md`}
              `}
            >
              <div className="text-left flex justify-between items-start relative z-10">
                <div>
                  <span className={`text-[8px] font-black px-2.5 py-1 rounded-lg uppercase tracking-widest ${room.rtt > 80 ? 'bg-red-100 text-red-600' : 'bg-blue-100 text-blue-600'}`}>
                    {room.type}
                  </span>
                  <h5 className="text-sm font-black text-blue-900 uppercase mt-2 tracking-tight">{room.name}</h5>
                </div>
                {isEditMode && <button onClick={(e) => {e.stopPropagation(); setRooms(rooms.filter(r => r.id !== room.id))}} className="text-red-400 p-1.5 hover:bg-red-50 rounded-xl transition-all"><Trash2 size={16} /></button>}
              </div>

              <div className="space-y-2 relative z-10">
                <div className="flex justify-between items-end">
                  <div className="text-left">
                    <p className="text-[8px] font-bold text-slate-400 uppercase tracking-tighter">RTT Latency</p>
                    <p className={`text-base font-black ${room.rtt > 80 ? 'text-red-600' : 'text-blue-600'}`}>{room.rtt} ms</p>
                  </div>
                  <Signal size={16} className={room.rtt > 80 ? 'text-red-500 animate-pulse' : 'text-green-500'} />
                </div>
                <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                  <motion.div initial={{ width: 0 }} animate={{ width: `${Math.min(room.rtt, 100)}%` }} className={`h-full transition-all duration-1000 ${room.rtt > 80 ? 'bg-red-500' : 'bg-blue-500'}`} />
                </div>
              </div>
              
              {isEditMode && <div className="absolute bottom-2 right-1/2 translate-x-1/2 opacity-20"><Move size={14} className="text-amber-600" /></div>}
            </motion.div>
          ))}
        </div>
      </div>

      {/* 3. ALT ANALİZ PANELİ (DOCK) */}
      <AnimatePresence>
        {reportRoom && (
          <motion.div initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 100, opacity: 0 }}
            className="fixed bottom-10 left-[360px] right-12 bg-[#001f3f] rounded-[3.5rem] p-10 text-white shadow-2xl z-[120] flex flex-col md:flex-row items-center gap-12 border border-white/10 backdrop-blur-2xl"
          >
            <div className="flex items-center gap-8 border-r border-white/10 pr-12 text-left text-left">
              <div className="p-5 bg-sky-500 rounded-[2.2rem] text-[#001f3f] shadow-lg">
                <ShieldCheck size={40} />
              </div>
              <div>
                <h4 className="text-[10px] font-black text-sky-400 uppercase tracking-[0.4em] mb-2">Live Node Analysis</h4>
                <h2 className="text-2xl font-black uppercase tracking-tight leading-none">{reportRoom.name}</h2>
              </div>
            </div>

            <div className="flex flex-1 justify-around gap-12 text-left text-left">
              <DetailBox label="QoS Status" value={reportRoom.rtt > 80 ? "CONGESTED" : "OPTIMAL"} color={reportRoom.rtt > 80 ? "text-red-400" : "text-green-400"} />
              <DetailBox label="Packet RTT" value={`${reportRoom.rtt} ms`} sub="Cross-layer stream" />
              <DetailBox label="Load Index" value={reportRoom.rtt > 80 ? "High" : "Stable"} sub="" />
            </div>

            <div className="flex gap-4">
              <button className="bg-sky-500 text-blue-950 hover:bg-sky-400 px-10 py-5 rounded-[1.8rem] font-black text-[11px] uppercase tracking-widest transition-all shadow-xl active:scale-95">
                Download PDF
              </button>
              <button onClick={() => setReportRoom(null)} className="bg-white/5 text-white p-5 rounded-3xl hover:bg-red-500 transition-all border border-white/10">
                <X size={28} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 4. MODAL - DEPLOY NODE */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-6 text-left">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setIsModalOpen(false)} className="absolute inset-0 bg-blue-950/40 backdrop-blur-xl" />
            <motion.div initial={{ scale: 0.9, y: 30, opacity: 0 }} animate={{ scale: 1, y: 0, opacity: 1 }} exit={{ scale: 0.9, y: 30, opacity: 0 }}
              className="relative w-full max-w-xl bg-white rounded-[4rem] p-12 shadow-2xl border border-blue-50"
            >
              <div className="flex justify-between items-center mb-10 text-left">
                <h4 className="text-3xl font-black text-blue-900 uppercase tracking-tighter leading-none">Initialize New Node</h4>
                <button onClick={() => setIsModalOpen(false)} className="bg-slate-50 p-3 rounded-2xl text-slate-400 hover:text-red-500 transition-colors shadow-sm"><X size={24}/></button>
              </div>

              <form onSubmit={handleDeployNode} className="space-y-8 text-left text-left">
                <div className="space-y-3">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] ml-2">Node Name</label>
                  <input autoFocus required type="text" value={newZoneForm.name} onChange={(e) => setNewZoneForm({...newZoneForm, name: e.target.value})} placeholder="e.g. Lab 404"
                    className="w-full bg-slate-50 border-2 border-transparent rounded-[1.5rem] px-8 py-5 text-base font-bold text-blue-900 focus:border-blue-100 outline-none shadow-inner"
                  />
                </div>
                <div className="grid grid-cols-2 gap-8 text-left">
                  <div className="space-y-3">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] ml-2 text-left">Width (px)</label>
                    <input type="number" value={newZoneForm.width} onChange={(e) => setNewZoneForm({...newZoneForm, width: e.target.value})} className="w-full bg-slate-50 border-none rounded-[1.5rem] px-8 py-5 text-base font-bold text-blue-900 outline-none shadow-inner" />
                  </div>
                  <div className="space-y-3 text-left">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] ml-2 text-left">Height (px)</label>
                    <input type="number" value={newZoneForm.height} onChange={(e) => setNewZoneForm({...newZoneForm, height: e.target.value})} className="w-full bg-slate-50 border-none rounded-[1.5rem] px-8 py-5 text-base font-bold text-blue-900 outline-none shadow-inner" />
                  </div>
                </div>
                <button type="submit" className="w-full bg-blue-900 text-white py-6 rounded-[2.5rem] font-black text-xs uppercase tracking-[0.4em] shadow-2xl hover:bg-blue-800 transition-all active:scale-95 mt-6">
                  Sync & Initialize Node
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
};

const DetailBox = ({ label, value, color = "text-white", sub = "" }) => (
  <div>
    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 leading-none text-left">{label}</p>
    <p className={`text-4xl font-black tracking-tighter leading-none ${color} text-left`}>{value}</p>
    {sub && <p className="text-[9px] text-sky-300 font-bold mt-2 opacity-60 uppercase leading-none text-left">{sub}</p>}
  </div>
);

const LegendItem = ({ color, label }) => (
  <div className="flex items-center gap-3">
    <div className={`w-4 h-4 rounded-full ${color} shadow-lg animate-pulse`} />
    <span className="text-[11px] font-black text-slate-600 uppercase tracking-widest">{label}</span>
  </div>
);

export default QosMapPage;