import React, { useState } from 'react';
import { 
  CalendarCheck, CheckCircle, XCircle, Clock, 
  Filter, Search, User, FileText, ChevronDown, 
  MessageSquare, ChevronRight, Hash
} from 'lucide-react';

const LeaveManagement = () => {
  const [selectedRequestId, setSelectedRequestId] = useState(null);
  const [rejectionReason, setRejectionReason] = useState('');
  
  // FİLTRE STATE'LERİ
  const [deptFilter, setDeptFilter] = useState('All Departments');
  const [statusFilter, setStatusFilter] = useState('All Statuses');
  const [searchTerm, setSearchTerm] = useState('');

  const [leaveRequests, setLeaveRequests] = useState([
    { 
      id: 1, name: 'Ahmet Yılmaz', dept: 'Software', type: 'Annual Leave', 
      duration: '5 Days', range: '20-25 Jan', status: 'Pending', 
      reason: 'Family vacation', color: 'blue',
      teamLeadStatus: 'Approved', balance: '14 Days'
    },
    { 
      id: 2, name: 'Elif Kaya', dept: 'Marketing', type: 'Sick Leave', 
      duration: '2 Days', range: '14-15 Jan', status: 'Pending', 
      reason: 'Flu symptoms', color: 'pink',
      teamLeadStatus: 'Pending', balance: '8 Days'
    },
    { 
      id: 3, name: 'Zeynep Arslan', dept: 'HR', type: 'Maternity Leave', 
      duration: '16 Weeks', range: '01 Feb - 24 May', status: 'Approved', 
      reason: 'Expectant mother', color: 'cyan',
      teamLeadStatus: 'Approved', balance: 'N/A'
    },
    { 
      id: 4, name: 'Mehmet Demir', dept: 'Operations', type: 'Annual Leave', 
      duration: '3 Days', range: '10-12 Jan', status: 'Rejected', 
      reason: 'Heavy workload period', color: 'amber',
      teamLeadStatus: 'Approved', balance: '12 Days'
    }
  ]);

  // FİLTRELEME MANTIĞI
  const filteredRequests = leaveRequests.filter(req => {
    const matchesDept = deptFilter === 'All Departments' || req.dept === deptFilter;
    const matchesStatus = statusFilter === 'All Statuses' || req.status === statusFilter;
    const matchesSearch = req.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesDept && matchesStatus && matchesSearch;
  });

  const handleAction = (id, newStatus) => {
    if (newStatus === 'Rejected' && !rejectionReason) {
      alert("Lütfen bir reddetme gerekçesi giriniz.");
      return;
    }
    setLeaveRequests(prev => prev.map(req => 
      req.id === id ? { ...req, status: newStatus, adminNote: rejectionReason } : req
    ));
    setSelectedRequestId(null);
    setRejectionReason('');
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-700 pb-10">
      {/* Üst Başlık Bölümü */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="text-left">
          <h3 className="text-2xl font-black text-blue-900 uppercase tracking-tight">Leave Operations Center</h3>
          <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mt-1">Filtering by Department and Approval Status</p>
        </div>
        <div className="flex gap-3">
          <StatBox label="Active Filters" count={filteredRequests.length} color="blue" />
        </div>
      </div>

      {/* İLERİ SEVİYE FİLTRELEME PANELİ */}
      <div className="bg-white rounded-3xl p-6 border border-blue-100 shadow-sm flex flex-wrap items-center gap-6">
        <div className="flex items-center gap-2 text-blue-900 font-black text-[10px] uppercase tracking-widest px-4 border-r border-slate-100">
          <Filter size={16} className="text-blue-600" /> Filter Tools
        </div>

        {/* Departman Filtresi */}
        <div className="flex flex-col gap-1.5 text-left">
          <label className="text-[9px] font-black text-slate-400 uppercase ml-1">Department</label>
          <select 
            value={deptFilter}
            onChange={(e) => setDeptFilter(e.target.value)}
            className="bg-slate-50 border-none rounded-xl px-4 py-2.5 text-xs font-bold text-blue-800 outline-none focus:ring-2 focus:ring-blue-100 cursor-pointer"
          >
            <option>All Departments</option>
            <option>Software</option>
            <option>Marketing</option>
            <option>HR</option>
            <option>Operations</option>
          </select>
        </div>

        {/* Durum Filtresi */}
        <div className="flex flex-col gap-1.5 text-left">
          <label className="text-[9px] font-black text-slate-400 uppercase ml-1">Status</label>
          <select 
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="bg-slate-50 border-none rounded-xl px-4 py-2.5 text-xs font-bold text-blue-800 outline-none focus:ring-2 focus:ring-blue-100 cursor-pointer"
          >
            <option>All Statuses</option>
            <option>Pending</option>
            <option>Approved</option>
            <option>Rejected</option>
          </select>
        </div>

        {/* Arama Barı */}
        <div className="flex flex-col gap-1.5 flex-1 min-w-[200px] text-left">
          <label className="text-[9px] font-black text-slate-400 uppercase ml-1">Search Employee</label>
          <div className="relative">
            <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input 
              type="text" 
              placeholder="Start typing name..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-slate-50 border-none rounded-xl pl-10 pr-4 py-2.5 text-xs font-bold outline-none focus:ring-2 focus:ring-blue-100" 
            />
          </div>
        </div>

        <button 
          onClick={() => {setDeptFilter('All Departments'); setStatusFilter('All Statuses'); setSearchTerm('')}}
          className="text-blue-600 text-[10px] font-black uppercase tracking-widest hover:underline pt-4"
        >
          Reset Filters
        </button>
      </div>

      {/* Dinamik Liste */}
      <div className="space-y-6">
        {filteredRequests.length > 0 ? (
          filteredRequests.map((req) => (
            <div key={req.id} className={`bg-white rounded-3xl border transition-all overflow-hidden ${selectedRequestId === req.id ? 'ring-2 ring-blue-500 shadow-2xl' : 'border-blue-50 shadow-sm'}`}>
              <div className="p-6">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-6 text-left">
                  <div className="flex items-center gap-4 min-w-[250px]">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br from-${req.color}-400 to-${req.color}-600 flex items-center justify-center text-white font-black shadow-lg text-lg uppercase`}>
                      {req.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <h4 className="font-black text-blue-900 text-lg leading-none">{req.name}</h4>
                      <p className="text-[10px] font-bold text-slate-400 uppercase mt-1.5 tracking-wider">{req.dept} Birimi</p>
                    </div>
                  </div>

                  <div className="flex flex-1 items-center justify-center gap-12">
                    <div className="text-center">
                      <span className="text-[9px] font-black text-slate-300 uppercase block mb-1">Leave Type</span>
                      <p className="text-xs font-black text-blue-800">{req.type}</p>
                    </div>
                    <div className="text-center">
                      <span className="text-[9px] font-black text-slate-300 uppercase block mb-1">Status</span>
                      <span className={`px-4 py-1 rounded-full text-[9px] font-black uppercase border ${
                        req.status === 'Approved' ? 'bg-green-50 text-green-600 border-green-100' : 
                        req.status === 'Rejected' ? 'bg-red-50 text-red-600 border-red-100' : 'bg-amber-50 text-amber-600 border-amber-100'
                      }`}>
                        {req.status}
                      </span>
                    </div>
                  </div>

                  <button 
                    onClick={() => setSelectedRequestId(selectedRequestId === req.id ? null : req.id)}
                    className={`p-3 rounded-2xl transition-all ${selectedRequestId === req.id ? 'bg-blue-900 text-white rotate-180' : 'bg-slate-50 text-slate-400 hover:bg-blue-100'}`}
                  >
                    <ChevronDown size={24} />
                  </button>
                </div>

                {/* Detay Paneli (Genişletilmiş) */}
                {selectedRequestId === req.id && (
                  <div className="mt-8 pt-8 border-t border-slate-100 animate-in slide-in-from-top-2 duration-500">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 text-left">
                      <div className="space-y-4">
                        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 space-y-4">
                          <h5 className="text-[10px] font-black text-blue-600 uppercase tracking-widest flex items-center gap-2">
                             <FileText size={14} /> Application Details
                          </h5>
                          <div className="grid grid-cols-2 gap-4">
                            <InfoCell label="Date Range" value={req.range} />
                            <InfoCell label="Total Days" value={req.duration} />
                            <InfoCell label="Team Lead Approval" value={req.teamLeadStatus} highlight />
                            <InfoCell label="Leave Balance" value={req.balance} />
                          </div>
                          <div className="pt-2 border-t border-slate-200">
                             <p className="text-[9px] font-bold text-slate-400 uppercase mb-1">Statement of Reason</p>
                             <p className="text-sm text-slate-600 italic">"{req.reason}"</p>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-6">
                        <h5 className="text-[10px] font-black text-red-500 uppercase tracking-widest flex items-center gap-2">
                          <MessageSquare size={14} /> Reviewer Response
                        </h5>
                        <textarea 
                          value={rejectionReason}
                          onChange={(e) => setRejectionReason(e.target.value)}
                          placeholder="Lütfen kararınızı açıklayan kısa bir not bırakın..."
                          className="w-full h-32 bg-slate-50 border border-slate-200 rounded-2xl p-4 text-xs font-medium outline-none focus:ring-2 focus:ring-blue-100 transition-all shadow-inner"
                        />
                        <div className="flex gap-4">
                          <button onClick={() => handleAction(req.id, 'Rejected')} className="flex-1 bg-white border border-red-200 text-red-500 py-3.5 rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-red-500 hover:text-white transition-all shadow-sm">Reject Request</button>
                          <button onClick={() => handleAction(req.id, 'Approved')} className="flex-1 bg-blue-900 text-white py-3.5 rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-blue-800 transition-all shadow-xl shadow-blue-100">Approve Leave</button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))
        ) : (
          <div className="py-20 bg-white rounded-3xl border border-dashed border-slate-200 flex flex-col items-center justify-center opacity-40">
             <Hash size={48} className="mb-4 text-slate-300" />
             <p className="font-black uppercase tracking-widest text-xs">Criteria not found</p>
          </div>
        )}
      </div>
    </div>
  );
};

// YARDIMCI BİLEŞENLER
const InfoCell = ({ label, value, highlight }) => (
  <div className="text-left">
    <p className="text-[8px] font-black text-slate-400 uppercase tracking-tighter mb-0.5">{label}</p>
    <p className={`text-xs font-black ${highlight && value === 'Approved' ? 'text-green-600' : 'text-blue-900'}`}>{value}</p>
  </div>
);

const StatBox = ({ label, count, color }) => (
  <div className={`bg-white border border-${color}-100 rounded-2xl px-6 py-2 shadow-sm flex items-center gap-3`}>
    <div className={`w-2 h-2 rounded-full bg-${color}-500 shadow-lg`}></div>
    <div className="text-left">
      <p className="text-[9px] font-black text-slate-400 uppercase leading-none">{label}</p>
      <p className={`text-lg font-black text-${color}-600 leading-none mt-1`}>{count}</p>
    </div>
  </div>
);

export default LeaveManagement;