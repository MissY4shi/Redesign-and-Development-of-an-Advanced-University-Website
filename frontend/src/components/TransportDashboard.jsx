import React, { useState, useEffect } from "react";

const TransportDashboard = () => {
  const [currentTime, setCurrentTime] = useState(
    new Date().toLocaleTimeString(),
  );
  const [spectateIndex, setSpectateIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Bus Data with REAL Google Map Embed URLs
  const fleet = [
    {
      id: "HR-38-V-1234",
      route: "Rajiv Chowk → KRMU Campus",
      status: "In Transit",
      driver: "Ramesh Kumar",
      speed: "42 km/h",
      eta: "15 Mins",
      color: "text-green-500",
      bgInfo: "bg-green-50 border-green-200",
      mapUrl:
        "https://maps.google.com/maps?q=Rajiv+Chowk+Gurugram+to+K.R.+Mangalam+University+Sohna&t=&z=11&ie=UTF8&iwloc=&output=embed",
    },
    {
      id: "HR-38-V-5678",
      route: "Faridabad Sector 15 → KRMU Campus",
      status: "Delayed (Traffic)",
      driver: "Suresh Singh",
      speed: "12 km/h",
      eta: "45 Mins",
      color: "text-orange-500",
      bgInfo: "bg-orange-50 border-orange-200",
      mapUrl:
        "https://maps.google.com/maps?q=Faridabad+Sector+15+to+K.R.+Mangalam+University+Sohna&t=&z=11&ie=UTF8&iwloc=&output=embed",
    },
    {
      id: "HR-38-V-9101",
      route: "Huda City Centre → KRMU Campus",
      status: "Arriving Soon",
      driver: "Amit Sharma",
      speed: "30 km/h",
      eta: "5 Mins",
      color: "text-blue-500",
      bgInfo: "bg-blue-50 border-blue-200",
      mapUrl:
        "https://maps.google.com/maps?q=Huda+City+Centre+Gurugram+to+K.R.+Mangalam+University+Sohna&t=&z=12&ie=UTF8&iwloc=&output=embed",
    },
  ];

  const currentBus = fleet[spectateIndex];

  const nextBus = () => setSpectateIndex((prev) => (prev + 1) % fleet.length);
  const prevBus = () =>
    setSpectateIndex((prev) => (prev === 0 ? fleet.length - 1 : prev - 1));

  return (
    <div className="max-w-6xl mx-auto py-16 px-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      
      {/* Header section */}
      <div className="flex justify-between items-end mb-8">
        <div>
          <h1 className="text-4xl font-black text-[#113b69] tracking-tight">
            Smart Transit Hub
          </h1>
          <p className="text-slate-500 mt-2">Live Fleet Spectator Mode</p>
        </div>
        <div className="flex items-center gap-6 hidden md:flex">
          {/* NEW BUTTON TO GO TO DRIVER DIRECTORY */}
          <button
            onClick={() => (window.location.href = "/drivers")}
            className="bg-slate-800 hover:bg-slate-900 text-white px-6 py-2 rounded-lg font-bold text-sm uppercase tracking-widest transition-colors shadow-md"
          >
            View Driver Directory
          </button>

          <div className="text-right border-l border-slate-300 pl-6">
            <div className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-1">
              Server Time
            </div>
            <div className="text-xl font-mono font-bold text-[#113b69] bg-slate-100 px-4 py-2 rounded-lg">
              {currentTime}
            </div>
          </div>
        </div>
      </div>

      {/* Spectator Controls */}
      <div className="flex items-center justify-between bg-slate-900 text-white p-4 rounded-t-3xl border-b border-slate-700">
        <button
          onClick={prevBus}
          className="p-3 hover:bg-slate-700 rounded-full transition-colors active:scale-95"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            ></path>
          </svg>
        </button>

        <div className="text-center">
          <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 block">
            Spectating Bus
          </span>
          <h2 className="text-2xl font-mono font-bold tracking-widest">
            {currentBus.id}
          </h2>
        </div>

        <button
          onClick={nextBus}
          className="p-3 hover:bg-slate-700 rounded-full transition-colors active:scale-95"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            ></path>
          </svg>
        </button>
      </div>

      {/* Actual Google Map Embed */}
      <div className="bg-slate-200 w-full h-[450px] shadow-2xl relative overflow-hidden">
        <iframe
          key={currentBus.id} // Forces iframe to reload when bus changes
          title="Google Map Route"
          src={currentBus.mapUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>

        {/* Live Overlay Badge */}
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-4 py-2 rounded-xl shadow-lg border border-slate-200 flex items-center gap-3 z-20">
          <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
          <span className="text-xs font-black uppercase tracking-widest text-slate-800">
            GPS Link Active
          </span>
        </div>
      </div>

      {/* Selected Bus Telemetry Data */}
      <div
        className={`mt-6 p-6 rounded-b-3xl border shadow-sm ${currentBus.bgInfo}`}
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div>
            <span className="text-[10px] font-black uppercase tracking-widest text-slate-500 block mb-1">
              Current Route
            </span>
            <p className="font-bold text-slate-800">{currentBus.route}</p>
          </div>
          <div>
            <span className="text-[10px] font-black uppercase tracking-widest text-slate-500 block mb-1">
              Status
            </span>
            <p
              className={`font-black uppercase tracking-widest ${currentBus.color}`}
            >
              {currentBus.status}
            </p>
          </div>
          <div>
            <span className="text-[10px] font-black uppercase tracking-widest text-slate-500 block mb-1">
              Current Speed
            </span>
            <p className="font-mono font-bold text-slate-800 text-lg">
              {currentBus.speed}
            </p>
          </div>
          <div>
            <span className="text-[10px] font-black uppercase tracking-widest text-slate-500 block mb-1">
              ETA to Campus
            </span>
            <p className="font-bold text-slate-800 text-lg">{currentBus.eta}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransportDashboard;
