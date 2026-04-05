import React from 'react';

const Stats = () => {
  const statData = [
    { label: "Students Enrolled", value: "15,000+" },
    { label: "Placement Record", value: "92%" },
    { label: "Global Partners", value: "100+" },
    { label: "Research Papers", value: "500+" },
  ];

  return (
    <div className="bg-white py-16 border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {statData.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="text-4xl font-black text-[#003366] mb-2 group-hover:text-orange-500 transition-colors duration-300">
                {stat.value}
              </div>
              <div className="text-sm font-bold text-slate-400 uppercase tracking-widest">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stats;