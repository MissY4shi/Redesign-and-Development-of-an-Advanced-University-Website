import React from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const StudentServices = ({ user }) => {
  const navigate = useNavigate();

  // Secure Gateway for Transport
  const handleTransportClick = () => {
    if (!user) {
      alert(
        "🔒 Authentication Required: Please log in as a Student or Faculty to access live fleet tracking.",
      );
      return;
    }
    navigate("/transport");
  };

  // Professional placeholders for the demo
  const handleFutureFeature = (featureName) => {
    toast.success(`${featureName} module unlocking in Phase 2 Deployment!`, {
      icon: "🚀",
      style: {
        borderRadius: "10px",
        background: "#1e293b",
        color: "#fff",
      },
    });
  };

  return (
    <div className="max-w-6xl mx-auto py-16 px-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <h1 className="text-4xl font-black text-[#113b69] mb-10">
        Student Services
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Hostel Card */}
        <div
          onClick={() => handleFutureFeature("Hostel & Accommodation")}
          className="bg-[#eaeef2] p-8 rounded-2xl border border-slate-300 shadow-sm text-center cursor-pointer hover:shadow-md hover:border-blue-300 hover:-translate-y-1 transition-all group"
        >
          <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
            🏠
          </div>
          <h3 className="text-xl font-bold text-slate-800 mb-3">
            Hostel & Accommodation
          </h3>
          <p className="text-sm text-slate-600">
            Information on boys and girls hostels, mess menus, and fee
            structures.
          </p>
        </div>

        {/* Transport Card (Secured) */}
        <div
          onClick={handleTransportClick}
          className="bg-[#eaeef2] p-8 rounded-2xl border border-slate-300 shadow-sm text-center cursor-pointer hover:shadow-md hover:border-orange-300 hover:-translate-y-1 transition-all group"
        >
          <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
            🚌
          </div>
          <h3 className="text-xl font-bold text-slate-800 mb-3">
            Transport Services
          </h3>
          <p className="text-sm text-slate-600">
            Bus route maps, timings, and live GPS fleet tracking.
          </p>
          {!user && (
            <span className="inline-block mt-4 text-[9px] font-black uppercase tracking-widest text-red-500 bg-red-50 px-2 py-1 rounded">
              Requires Login
            </span>
          )}
        </div>

        {/* Health Card */}
        <div
          onClick={() => handleFutureFeature("Health Center")}
          className="bg-[#eaeef2] p-8 rounded-2xl border border-slate-300 shadow-sm text-center cursor-pointer hover:shadow-md hover:border-blue-300 hover:-translate-y-1 transition-all group"
        >
          <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
            🏥
          </div>
          <h3 className="text-xl font-bold text-slate-800 mb-3">
            Health Center
          </h3>
          <p className="text-sm text-slate-600">
            24/7 on-campus medical facilities and emergency contact numbers.
          </p>
        </div>

        {/* Sports Card */}
        <div
          onClick={() => handleFutureFeature("Sports Complex")}
          className="bg-[#eaeef2] p-8 rounded-2xl border border-slate-300 shadow-sm text-center cursor-pointer hover:shadow-md hover:border-blue-300 hover:-translate-y-1 transition-all group"
        >
          <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
            ⚽
          </div>
          <h3 className="text-xl font-bold text-slate-800 mb-3">
            Sports Complex
          </h3>
          <p className="text-sm text-slate-600">
            Booking courts for badminton, basketball, and gym memberships.
          </p>
        </div>
      </div>
    </div>
  );
};

export default StudentServices;
