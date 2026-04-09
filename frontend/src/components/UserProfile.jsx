import React from "react";

const UserProfile = ({ user, userData }) => {
  if (!user) {
    return (
      <div className="text-center py-32 text-slate-400 font-bold text-xl uppercase tracking-widest">
        Authentication Required
      </div>
    );
  }

  const isStudent = user === "student";

  return (
    <div className="max-w-4xl mx-auto py-16 px-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <h2 className="text-3xl font-black text-slate-800 uppercase tracking-tight mb-8">
        {isStudent ? "Student Dashboard" : "Faculty Directory Details"}
      </h2>

      <div className="bg-white rounded-3xl p-10 shadow-lg border border-slate-100 flex flex-col md:flex-row gap-10 items-center md:items-start relative overflow-hidden">
        {/* Accent Bar */}
        <div
          className={`absolute top-0 left-0 w-full h-2 ${isStudent ? "bg-orange-500" : "bg-green-500"}`}
        ></div>

        <div className="w-32 h-32 rounded-full bg-slate-50 flex items-center justify-center text-6xl border-4 border-white shadow-md shrink-0">
          {isStudent ? "🎓" : "👨‍🏫"}
        </div>

        <div className="flex-1 space-y-6 w-full">
          <div>
            <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">
              Registered Name
            </label>
            <p className="text-3xl font-black text-slate-900">
              {userData.name || "Awaiting Sync..."}
            </p>
            <span
              className={`inline-block mt-2 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest ${isStudent ? "bg-orange-100 text-orange-600" : "bg-green-100 text-green-600"}`}
            >
              Active {user}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 border-t border-slate-100">
            <div>
              <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                {isStudent ? "Roll Number / University ID" : "Faculty ID"}
              </label>
              <p className="text-xl font-mono font-bold text-slate-700">
                {userData.rollNo || "N/A"}
              </p>
            </div>
            <div>
              <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                Primary Department
              </label>
              <p className="text-lg font-semibold text-slate-700">
                {isStudent
                  ? "B.Tech CSE (AI & Data Science)"
                  : "School of Engineering & Technology"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
