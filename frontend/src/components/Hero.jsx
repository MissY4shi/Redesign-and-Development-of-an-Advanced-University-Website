import React from "react";
import { useNavigate } from "react-router-dom";

const Hero = ({ user, userData, onApplyClick }) => {
  const navigate = useNavigate();

  // Makes the greeting change automatically depending on when your presentation is!
  const hour = new Date().getHours();
  const greeting =
    hour < 12 ? "Good Morning" : hour < 18 ? "Good Afternoon" : "Good Evening";

  // Adds the user's first name if they are logged in
  const displayName =
    user && userData?.name ? ` ${userData.name.split(" ")[0]}` : "";

  return (
    <div className="bg-[#232b38] text-white pt-32 pb-20 px-8 md:px-16 animate-in fade-in duration-700">
      <div className="max-w-6xl mx-auto">
        {/* The Unified Digital Portal Badge */}
        <div className="inline-block border border-orange-500/50 rounded-full px-4 py-1 mb-8">
          <span className="text-orange-500 text-xs font-black tracking-[0.2em] uppercase">
            Unified Digital Portal
          </span>
        </div>

        <h1 className="text-6xl md:text-7xl font-black mb-6 tracking-tight">
          {greeting}
          {displayName}
          <span className="text-orange-500">,</span>
        </h1>

        <p className="text-xl text-slate-300 max-w-2xl mb-12 leading-relaxed">
          Welcome to the modernized digital gateway of K.R. Mangalam University.{" "}
          <br />
          Your timetable, attendance, and campus life, simplified.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <button
            onClick={() => navigate("/departments")}
            className="bg-[#f97316] hover:bg-[#ea580c] text-white px-8 py-3 rounded-lg font-bold uppercase tracking-widest transition-all shadow-lg active:scale-95"
          >
            Explore Courses
          </button>

          <button
            onClick={onApplyClick}
            className="bg-[#334155] hover:bg-[#475569] text-white px-8 py-3 rounded-lg font-bold uppercase tracking-widest transition-all shadow-lg active:scale-95"
          >
            Admissions 2026
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
