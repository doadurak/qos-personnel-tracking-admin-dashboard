import React, { useState } from 'react';
import { 
  User, Mail, Lock, Camera, Calendar, CheckCircle, 
  XCircle, Clock, Send, Plus, Users, Hash, Trash2, 
  ChevronLeft, ChevronRight, Video, MapPin, LogOut
} from 'lucide-react';

const AdminProfile = ({ onLogout }) => {
  const [activeTab, setActiveTab] = useState('profile');
  const [selectedEmails, setSelectedEmails] = useState([]);
  const [currentEmail, setCurrentEmail] = useState('');
  const [selectedDay, setSelectedDay] = useState(14); // Takvim seçimi için

  // Takvim Veri Havuzu
  const dailyEvents = {
    14: [
      { id: 1, time: "10:00", title: "Yazılım Birimi Senkronizasyon", type: "Toplantı", members: "8 Katılımcı", location: "Zoom" },
      { id: 2, time: "14:30", title: "Burak K. Teknik Mülakat", type: "Mülakat", members: "Aday", location: "Oda A" }
    ],
    15: [
      { id: 3, time: "09:00", title: "QoS Analiz Raporu Sunumu", type: "Sunum", members: "Yönetim", location: "Konferans" },
      { id: 4, time: "16:00", title: "Haftalık Ar-Ge Değerlendirme", type: "Toplantı", members: "12 Katılımcı", location: "Zoom" }
    ],
    23: [
      { id: 5, time: "11:00", title: "Yeni AutoML Model Testi", type: "Teknik", members: "Teknik Ekip", location: "Laboratuvar" }
    ]
  };

  // Kayıt Talepleri Verisi
  const candidates = [
    { email: 'burak@techcorp.com', name: 'Burak Kara', dept: 'Yazılım' },
    { email: 'merve@techcorp.com', name: 'Merve Deniz', dept: 'Pazarlama' },
    { email: 'can@techcorp.com', name: 'Can Yıldız', dept: 'Yazılım' },
  ];

  const addEmail = (email) => {
    if (email && !selectedEmails.includes(email)) {
      setSelectedEmails([...selectedEmails, email]);
      setCurrentEmail('');
    }
  };

  const removeEmail = (email) => {
    setSelectedEmails(selectedEmails.filter(e => e !== email));
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-700 pb-20">
      {/* Profil Üst Kartı ve Hızlı Çıkış */}
      <div className="bg-[#001f3f] rounded-3xl p-8 text-white shadow-2xl relative overflow-hidden">
        <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 text-left">
          <div className="relative group">
            <div className="w-32 h-32 rounded-full border-4 border-sky-400 overflow-hidden bg-slate-700 shadow-2xl">
              <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="Profile" />
            </div>
            <button className="absolute bottom-0 right-0 p-2 bg-sky-500 rounded-full border-2 border-[#001f3f] hover:bg-sky-400 transition-colors shadow-lg">
              <Camera size={16} />
            </button>
          </div>
          <div className="flex-1">
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-3xl font-black tracking-tight uppercase leading-none">Türkan Doğa Durak</h2>
                <p className="text-sky-300 font-bold uppercase tracking-widest text-[10px] mt-2 opacity-80">Sistem Yöneticisi & HR Direktörü</p>
              </div>
              {/* ÇIKIŞ BUTONU 1 */}
              <button 
                onClick={onLogout}
                className="flex items-center gap-2 px-4 py-2 bg-red-500/20 hover:bg-red-600 text-red-100 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all border border-red-500/30 shadow-lg"
              >
                <LogOut size={14} /> Logout
              </button>
            </div>
            
            <div className="flex flex-wrap gap-3 mt-6">
              <TabButton active={activeTab === 'profile'} onClick={() => setActiveTab('profile')} label="Profilim" />
              <TabButton active={activeTab === 'requests'} onClick={() => setActiveTab('requests')} label="Kayıt Talepleri (4)" />
              <TabButton active={activeTab === 'meeting'} onClick={() => setActiveTab('meeting')} label="Planlayıcı & Takvim" />
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-sky-500/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        {/* SOL/ORTA ALAN (Geniş) */}
        <div className="lg:col-span-2 space-y-8 text-left">
          
          {activeTab === 'profile' && (
            <div className="bg-white rounded-3xl p-8 border border-blue-100 shadow-sm space-y-8 animate-in slide-in-from-left-4 duration-500">
              <h3 className="font-black text-blue-900 text-xl uppercase tracking-tighter flex items-center gap-2 text-left">
                <User size={24} className="text-blue-600" /> Hesap Ayarları
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                <InputGroup label="Tam Ad Soyad" value="Türkan Doğa Durak" icon={<User size={18}/>} />
                <InputGroup label="E-Posta Adresi" value="admin@techcorp.com" icon={<Mail size={18}/>} />
              </div>
              <div className="pt-8 border-t border-slate-100 space-y-6">
                <h4 className="text-sm font-black text-red-500 uppercase tracking-widest text-left">Güvenlik Paneli</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-end">
                   <div className="space-y-2 text-left">
                      <label className="text-[10px] font-black text-slate-400 uppercase">Şifre İşlemi</label>
                      <button className="w-full bg-slate-100 text-slate-600 font-black text-xs uppercase rounded-xl py-3.5 hover:bg-slate-200 transition-all">Şifre Sıfırlama Maili Gönder</button>
                   </div>
                   {/* ÇIKIŞ BUTONU 2 */}
                   <button 
                    onClick={onLogout}
                    className="w-full bg-red-50 text-red-600 border border-red-100 font-black text-xs uppercase rounded-xl py-3.5 hover:bg-red-600 hover:text-white transition-all shadow-sm"
                   >
                    Oturumu Tamamen Kapat
                   </button>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'requests' && (
            <div className="space-y-4 animate-in slide-in-from-left-4 duration-500">
               <h3 className="font-black text-blue-900 text-xl uppercase px-2 text-left">Bekleyen Üyelik Talepleri</h3>
               {candidates.map((candidate, idx) => (
                 <div key={idx} className="bg-white rounded-2xl p-6 border border-blue-50 shadow-sm flex items-center justify-between group hover:shadow-xl transition-all border-l-4 border-l-blue-600">
                    <div className="flex items-center gap-4 text-left">
                      <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-black">{candidate.name.split(' ').map(n => n[0]).join('')}</div>
                      <div>
                        <p className="font-black text-blue-900 leading-tight">{candidate.name}</p>
                        <p className="text-xs font-bold text-slate-400 uppercase mt-1">{candidate.dept} Birimi</p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <button className="p-3 text-red-400 hover:bg-red-50 rounded-xl transition-all"><XCircle size={20}/></button>
                      <button className="px-6 py-2.5 bg-blue-600 text-white text-[10px] font-black uppercase rounded-xl hover:bg-blue-700 shadow-lg transition-all">Onayla</button>
                    </div>
                 </div>
               ))}
            </div>
          )}

          {activeTab === 'meeting' && (
            <div className="bg-white rounded-3xl p-8 border border-blue-100 shadow-sm space-y-8 animate-in slide-in-from-left-4 duration-500">
              <div className="flex justify-between items-center text-left">
                <h3 className="font-black text-blue-900 text-xl uppercase tracking-tighter">Mülakat Planlayıcı</h3>
                <span className="bg-sky-50 text-sky-600 text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest tracking-tighter">Otonom Davet</span>
              </div>

              <div className="space-y-4 bg-slate-50 p-6 rounded-2xl border border-slate-100 text-left">
                <label className="text-[11px] font-black text-slate-500 uppercase tracking-widest">Katılımcı Ekle</label>
                <div className="flex gap-2">
                  <input 
                    type="email" 
                    value={currentEmail}
                    onChange={(e) => setCurrentEmail(e.target.value)}
                    placeholder="davetli@techcorp.com" 
                    className="flex-1 bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-blue-100" 
                  />
                  <button onClick={() => addEmail(currentEmail)} className="bg-blue-600 text-white p-3 rounded-xl hover:bg-blue-700 shadow-lg"><Plus size={20}/></button>
                </div>
                <div className="flex flex-wrap gap-2 mt-3">
                  {selectedEmails.map(email => (
                    <span key={email} className="bg-blue-100 text-blue-700 px-3 py-1.5 rounded-lg text-[10px] font-black flex items-center gap-2">
                      {email} <Trash2 size={12} className="cursor-pointer hover:text-red-500" onClick={() => removeEmail(email)} />
                    </span>
                  ))}
                </div>
              </div>

              <button className="w-full bg-blue-900 text-white py-4 rounded-2xl font-black text-xs uppercase tracking-[0.2em] hover:bg-blue-800 transition-all shadow-2xl flex items-center justify-center gap-3">
                <Send size={18} /> Toplu Mülakat Daveti Gönder
              </button>
            </div>
          )}
        </div>

        {/* SAĞ ALAN (Dar): TAKVİM VE PROGRAM */}
        <div className="space-y-8 text-left">
          {/* İnteraktif Takvim Grid */}
          <div className="bg-white rounded-3xl p-6 border border-blue-100 shadow-sm">
            <div className="flex justify-between items-center mb-6">
              <h4 className="font-black text-blue-900 text-xs uppercase tracking-widest">Ocak 2026</h4>
              <div className="flex gap-1">
                <button className="p-1 hover:bg-slate-50 rounded-md text-slate-400"><ChevronLeft size={16}/></button>
                <button className="p-1 hover:bg-slate-50 rounded-md text-slate-400"><ChevronRight size={16}/></button>
              </div>
            </div>
            <div className="grid grid-cols-7 gap-1 text-[10px] text-center font-bold text-slate-400 mb-2">
              <span>Pz</span><span>Sa</span><span>Ça</span><span>Pe</span><span>Cu</span><span>Ct</span><span>Pa</span>
            </div>
            <div className="grid grid-cols-7 gap-1">
              {[...Array(31)].map((_, i) => {
                const dayNum = i + 1;
                const isSelected = selectedDay === dayNum;
                const hasEvent = dailyEvents[dayNum];
                return (
                  <div 
                    key={i} 
                    onClick={() => setSelectedDay(dayNum)}
                    className={`h-9 flex flex-col items-center justify-center rounded-xl text-[10px] font-black cursor-pointer transition-all relative
                      ${isSelected ? 'bg-blue-600 text-white shadow-lg scale-110 z-10' : 'hover:bg-blue-50 text-blue-900'}
                    `}>
                    {dayNum}
                    {hasEvent && !isSelected && (
                      <span className="absolute bottom-1.5 w-1 h-1 bg-blue-400 rounded-full"></span>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Günlük Detay Paneli */}
          <div className="bg-gradient-to-br from-blue-900 to-slate-900 rounded-3xl p-6 text-white shadow-xl min-h-[350px] animate-in slide-in-from-bottom-4">
             <div className="flex items-center justify-between mb-6">
               <div>
                <h4 className="text-xs font-black uppercase tracking-widest text-sky-400">{selectedDay} Ocak Programı</h4>
                <p className="text-[9px] text-slate-400 font-bold uppercase mt-1 opacity-60">
                  {dailyEvents[selectedDay] ? `${dailyEvents[selectedDay].length} Aktivite Mevcut` : 'Program Boş'}
                </p>
               </div>
               <Video size={18} className="text-sky-400" />
             </div>
             
             <div className="space-y-4 text-left">
               {dailyEvents[selectedDay] ? (
                 dailyEvents[selectedDay].map((event) => (
                    <div key={event.id} className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all cursor-pointer group">
                      <div className="flex justify-between items-start mb-3 text-left">
                        <span className="text-[10px] font-black text-sky-300 tracking-tighter">{event.time}</span>
                        <span className="text-[8px] px-2 py-0.5 rounded bg-sky-500/20 text-sky-300 uppercase font-black tracking-widest">{event.type}</span>
                      </div>
                      <p className="font-bold text-sm leading-tight group-hover:text-sky-300 transition-colors">{event.title}</p>
                      <div className="flex items-center gap-4 mt-4">
                        <div className="flex items-center gap-1.5 text-[9px] text-slate-400 font-bold uppercase">
                          <Users size={12} className="text-sky-400" /> {event.members}
                        </div>
                        <div className="flex items-center gap-1.5 text-[9px] text-slate-400 font-bold uppercase">
                          <MapPin size={12} className="text-sky-400" /> {event.location}
                        </div>
                      </div>
                    </div>
                 ))
               ) : (
                 <div className="flex flex-col items-center justify-center py-16 opacity-20 text-center">
                    <Calendar size={48} className="mb-4" />
                    <p className="text-[10px] font-black uppercase tracking-widest">Planlı Görüşme Yok</p>
                 </div>
               )}
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Yardımcı Bileşenler ---

const TabButton = ({ active, onClick, label }) => (
  <button onClick={onClick} className={`px-6 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${active ? 'bg-white text-blue-900 shadow-xl scale-105' : 'bg-blue-900/40 hover:bg-blue-800'}`}>
    {label}
  </button>
);

const InputGroup = ({ label, value, icon }) => (
  <div className="space-y-2 group text-left">
    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest group-hover:text-blue-500 transition-colors">{label}</label>
    <div className="relative">
      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-hover:text-blue-400 transition-colors">{icon}</div>
      <input type="text" defaultValue={value} className="w-full bg-slate-50 border-2 border-transparent rounded-2xl pl-12 pr-4 py-3.5 text-sm font-bold text-blue-900 focus:bg-white focus:border-blue-100 outline-none transition-all shadow-inner" />
    </div>
  </div>
);

export default AdminProfile;