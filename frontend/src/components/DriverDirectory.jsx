import React from "react";
import { useNavigate } from "react-router-dom";

const DriverDirectory = () => {
  const navigate = useNavigate();

  // Simulated backend data
  const drivers = [
    {
      id: "EMP-4012",
      name: "Ramesh Kumar",
      route: "Rajiv Chowk (Gurugram)",
      busNumber: "HR-38-V-1234",
      phone: "+91 98765 43210",
      experience: "8 Years",
      status: "On Duty",
      image: "👨🏽‍✈️",
    },
    {
      id: "EMP-4015",
      name: "Suresh Singh",
      route: "Faridabad Sector 15",
      busNumber: "HR-38-V-5678",
      phone: "+91 98765 43211",
      experience: "5 Years",
      status: "On Duty",
      image: "👨🏾‍✈️",
    },
    {
      id: "EMP-4022",
      name: "Amit Sharma",
      route: "Huda City Centre",
      busNumber: "HR-38-V-9101",
      phone: "+91 98765 43212",
      experience: "12 Years",
      status: "Off Duty",
      image: "👨🏻‍✈️",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto py-16 px-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Back to Transit Hub Button */}
      <button
        onClick={() => navigate("/transport")}
        className="flex items-center text-slate-500 hover:text-[#113b69] font-bold text-sm uppercase tracking-widest transition-colors mb-8 group"
      >
        <svg
          className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M10 19l-7-7m0 0l7-7m-7 7h18"
          ></path>
        </svg>
        Back to Transit Hub
      </button>

      <div className="flex justify-between items-end mb-10">
        <div>
          <h1 className="text-4xl font-black text-[#113b69] tracking-tight">
            Fleet Personnel
          </h1>
          <p className="text-slate-500 mt-2">
            Official University Transport Staff Directory
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {drivers.map((driver, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-lg transition-all relative overflow-hidden group"
          >
            {/* Top Accent Line */}
            <div
              className={`absolute top-0 left-0 w-full h-1 ${driver.status === "On Duty" ? "bg-green-500" : "bg-slate-300"}`}
            ></div>

            <div className="flex items-start gap-4 mb-6">
              <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center text-3xl border-2 border-slate-200 shadow-inner">
                {driver.image}
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-800">
                  {driver.name}
                </h3>
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 block">
                  {driver.id}
                </span>
                <span
                  className={`inline-block mt-1 px-2 py-0.5 rounded text-[9px] font-bold uppercase tracking-widest ${driver.status === "On Duty" ? "bg-green-50 text-green-600" : "bg-slate-100 text-slate-500"}`}
                >
                  {driver.status}
                </span>
              </div>
            </div>

            <div className="space-y-3 pt-4 border-t border-slate-100">
              <div className="flex justify-between items-center">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  Bus Route
                </span>
                <span className="text-sm font-semibold text-slate-700">
                  {driver.route}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  Vehicle Reg.
                </span>
                <span className="text-sm font-mono font-bold text-[#113b69] bg-slate-100 px-2 py-1 rounded">
                  {driver.busNumber}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  Contact
                </span>
                <a
                  href={`tel:${driver.phone}`}
                  className="text-sm font-bold text-blue-600 hover:text-blue-800 transition-colors"
                >
                  {driver.phone}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DriverDirectory;
