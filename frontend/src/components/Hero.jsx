import React from "react";
import toast from "react-hot-toast";

const Hero = ({ user, userData, onApplyClick, onViewResults }) => {
  const userRole = user || "guest";
  const displayName = userData?.name || "User";

  const hour = new Date().getHours();
  const getGreeting = () => {
    if (hour < 12) return "Good Morning";
    if (hour < 17) return "Good Afternoon";
    return "Good Evening";
  };

  const roleActions = {
    faculty: [
      {
        label: "Faculty Timetable",
        color: "bg-orange-500",
        hover: "hover:bg-orange-600",
        action: () =>
          toast("Accessing Weekly Class Schedule...", {
            icon: "📅",
            duration: 3000,
          }),
      },
      {
        label: "Manage Attendance",
        color: "bg-blue-600",
        hover: "hover:bg-blue-700",
        action: () =>
          toast.error("Attendance Module offline for maintenance.", {
            duration: 3000,
          }),
      },
      {
        label: "Upload Grades",
        color: "bg-slate-800",
        hover: "hover:bg-slate-700",
        action: () => {
          window.scrollTo({ top: 500, behavior: "smooth" });
          toast("Jumping to Administrative Dashboard", {
            icon: "⚡",
            duration: 2000,
          });
        },
      },
    ],
    student: [
      {
        label: "My Timetable",
        color: "bg-blue-600",
        hover: "hover:bg-blue-700",
        // FIX: Removed toast.loading so it doesn't get stuck!
        action: () =>
          toast("Connecting to University Timetable Server...", {
            icon: "⏳",
            duration: 3000,
            style: { borderRadius: "10px", background: "#333", color: "#fff" },
          }),
      },
      {
        label: "View Results",
        color: "bg-orange-500",
        hover: "hover:bg-orange-600",
        action: () => {
          onViewResults();
          toast.success("Decrypting Academic Records...", {
            icon: "🔐",
            duration: 3000,
          });
          setTimeout(() => {
            window.scrollTo({ top: 500, behavior: "smooth" });
          }, 150);
        },
      },
    ],
    guest: [
      {
        label: "Explore Courses",
        color: "bg-orange-500",
        hover: "hover:bg-orange-600",
        action: () =>
          toast("Redirecting to B.Tech & AI Course Catalogs", {
            icon: "📚",
            duration: 3000,
          }),
      },
      {
        label: "Admissions 2026",
        color: "bg-slate-800",
        hover: "hover:bg-slate-700",
        action: onApplyClick,
      },
    ],
  };

  const currentActions = roleActions[userRole] || roleActions.guest;

  return (
    <div
      className={`py-20 px-6 relative transition-colors duration-700 ${userRole === "faculty" ? "bg-[#001f3f]" : "bg-slate-900"}`}
    >
      <div className="max-w-6xl mx-auto relative z-10 text-white">
        <div className="inline-block px-3 py-1 rounded-full border border-orange-500/30 bg-orange-500/10 mb-6">
          <span className="text-orange-500 text-[10px] font-black uppercase tracking-[0.2em]">
            {userRole === "faculty"
              ? "Authorized Faculty Access"
              : "Unified Digital Portal"}
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
          {getGreeting()}, <br />
          {userRole !== "guest" && (
            <span
              className={
                userRole === "faculty" ? "text-blue-300" : "text-blue-400"
              }
            >
              {displayName}
            </span>
          )}
        </h1>

        <p className="text-xl text-slate-300 max-w-2xl leading-relaxed mb-10">
          {userRole === "faculty"
            ? "Access university-wide management tools, monitor attendance, and publish department updates from your secure portal."
            : "Welcome to the modernized digital gateway of K.R. Mangalam University. Your timetable, attendance, and campus life, simplified."}
        </p>

        <div className="flex flex-wrap gap-4">
          {currentActions.map((btn, index) => (
            <button
              key={index}
              onClick={btn.action}
              className={`${btn.color} ${btn.hover} px-8 py-4 rounded-xl font-bold shadow-lg transition-all active:scale-95 uppercase text-xs tracking-widest`}
            >
              {btn.label}
            </button>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 right-0 p-10 opacity-10 pointer-events-none">
        <h1 className="text-[12rem] font-black select-none">KRMU</h1>
      </div>
    </div>
  );
};

export default Hero;
