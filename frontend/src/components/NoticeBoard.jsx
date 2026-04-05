import React, { useEffect, useState } from 'react';

const NoticeBoard = ({ user, refreshTrigger }) => {
    const [notices, setNotices] = useState([]);

    const fetchNotices = () => {
        fetch('http://localhost:5000/api/notices')
            .then(res => res.json())
            .then(data => setNotices(data))
            .catch(err => console.error("Error fetching notices:", err));
    };

    useEffect(() => {
        fetchNotices();
    }, [refreshTrigger]);

    // Placeholder function for handling the edit/update flow
    const handleUpdateClick = (id) => {
        alert("Feature under development: We will implement an editing modal in the next step!");
    };

    // Function to delete a notice (Faculty only)
    const handleDelete = async (id) => {
        if (window.confirm("⚠️ Are you sure you want to delete this official announcement?")) {
            try {
                const res = await fetch(`http://localhost:5000/api/notices/${id}`, {
                    method: 'DELETE',
                });
                if (res.ok) {
                    // Update the local state to remove the notice instantly
                    setNotices(notices.filter(notice => notice._id !== id));
                    alert("✅ Notice deleted successfully.");
                } else {
                    alert("❌ Failed to delete notice.");
                }
            } catch (err) {
                console.error("Delete error:", err);
            }
        }
    };

    return (
        <div id="notice-section" className="max-w-5xl mx-auto py-12 px-6 scroll-mt-20">
            <div className="flex justify-between items-end mb-10">
                <div>
                    <h2 className="text-4xl font-extrabold text-slate-800">Campus Notices</h2>
                    <p className="text-slate-500 mt-2">Latest updates and official announcements from KRMU</p>
                </div>
                <div className="text-slate-400 text-sm font-medium">Total: {notices.length} Active</div>
            </div>

            <div className="grid gap-6">
                {notices.length > 0 ? (
                    notices.map((notice) => (
                        <div key={notice._id} className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-2 h-full bg-[#003366]"></div>
                            
                            {/* NEW: Action Buttons (Only visible to Faculty) with improved alignment */}
                            {user === 'faculty' && (
                                <div className="absolute top-4 right-6 flex items-center gap-3">
                                    <button 
                                        onClick={() => handleUpdateClick(notice._id)}
                                        className="text-orange-500 hover:text-orange-700 font-bold text-[10px] uppercase tracking-widest bg-orange-50 px-3 py-1.5 rounded border border-orange-100 transition-colors"
                                    >
                                        [ Update ]
                                    </button>
                                    <button 
                                        onClick={() => handleDelete(notice._id)}
                                        className="text-red-500 hover:text-red-700 font-bold text-[10px] uppercase tracking-widest bg-red-50 px-3 py-1.5 rounded border border-red-100 transition-colors"
                                    >
                                        [ Delete Notice ]
                                    </button>
                                </div>
                            )}

                            <div className="flex justify-between items-start pt-3">
                                <h3 className="text-2xl font-bold text-slate-800 group-hover:text-[#003366] transition-colors">
                                    {notice.title}
                                </h3>
                                <span className="bg-slate-100 text-slate-500 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                                    Official
                                </span>
                            </div>
                            
                            <p className="text-slate-600 mt-4 leading-relaxed text-lg">{notice.content}</p>
                            
                            <div className="mt-6 pt-6 border-t border-slate-50 flex items-center text-slate-400 text-sm">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                                {new Date(notice.datePosted).toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' })}
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="text-center py-20 bg-slate-50 rounded-3xl border-2 border-dashed border-slate-200">
                        <p className="text-slate-400 text-lg">No notices available at the moment.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default NoticeBoard;