import React, { useState, useEffect } from "react";

const StudentResults = ({ rollNo, studentName }) => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (rollNo && rollNo !== "undefined") {
      fetch(`http://localhost:5000/api/results/${rollNo}`)
        .then((res) => res.json())
        .then((data) => {
          setResults(data);
          setLoading(false);
        })
        .catch((err) => {
          console.error("Fetch error:", err);
          setLoading(false);
        });
    }
  }, [rollNo]);

  if (!rollNo || rollNo === "undefined") return null;

  if (loading)
    return (
      <div className="p-20 text-center font-black text-slate-400 animate-pulse uppercase tracking-widest text-xs">
        Connecting to Secure Examination Servers...
      </div>
    );

  return (
    <div className="max-w-6xl mx-auto py-12 px-6 animate-in fade-in slide-in-from-bottom-8 duration-1000">
      <div className="bg-white rounded-t-3xl border-x border-t border-slate-200 p-10 shadow-sm relative overflow-hidden">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 relative z-10">
          <div>
            <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tighter">
              Academic Transcript
            </h2>
            <p className="text-blue-600 font-bold uppercase text-[10px] tracking-[0.3em]">
              Official Statement of Marks • Session 2025-26
            </p>
          </div>
          <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 text-right">
            <span className="block text-slate-400 text-[9px] uppercase font-black tracking-widest mb-1">
              Registration No.
            </span>
            <span className="text-xl font-mono font-bold text-slate-800">
              {rollNo}
            </span>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-slate-100 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <span className="block text-slate-400 text-[9px] uppercase font-black tracking-widest mb-1">
              Student Name
            </span>
            <span className="text-lg font-bold text-slate-900">
              {studentName || "N/A"}
            </span>
          </div>
          <div className="md:col-span-2">
            <span className="block text-slate-400 text-[9px] uppercase font-black tracking-widest mb-1">
              Program Name
            </span>
            <span className="text-lg font-bold text-slate-900">
              Bachelor of Technology (CSE)
            </span>
          </div>
        </div>
      </div>

      <div className="overflow-hidden rounded-b-3xl border border-slate-200 shadow-2xl bg-white">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-900 text-white">
              <th className="p-6 uppercase text-[9px] tracking-widest font-black">
                Code
              </th>
              <th className="p-6 uppercase text-[9px] tracking-widest font-black">
                Course Nomenclature
              </th>
              <th className="p-6 uppercase text-[9px] tracking-widest font-black text-center">
                Cr.
              </th>
              <th className="p-6 uppercase text-[9px] tracking-widest font-black text-center">
                Grade
              </th>
            </tr>
          </thead>
          <tbody>
            {results.map((res, index) => (
              <tr
                key={index}
                className="border-b border-slate-100 hover:bg-blue-50/30 transition-all group"
              >
                <td className="p-6 font-mono font-bold text-blue-600 group-hover:pl-8 transition-all">
                  {res.courseCode}
                </td>
                <td className="p-6 text-slate-700 font-semibold">
                  {res.courseName}
                </td>
                <td className="p-6 text-slate-400 text-center font-bold">
                  {res.credits}
                </td>
                <td className="p-6 text-center">
                  <div
                    className={`inline-flex items-center justify-center w-12 h-10 rounded-xl font-black shadow-sm ${
                      ["O", "A+", "A"].includes(res.grade)
                        ? "bg-emerald-500 text-white"
                        : "bg-orange-500 text-white"
                    }`}
                  >
                    {res.grade}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {results.length === 0 && (
          <div className="p-24 text-center flex flex-col items-center">
            <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mb-6 text-3xl">
              🗄️
            </div>
            <p className="text-slate-400 font-bold uppercase text-[11px] tracking-widest italic text-center">
              No examination records indexed for this Roll Number. <br />
              <span className="text-[9px] not-italic text-slate-300">
                Please contact the Examination Cell if this is an error.
              </span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default StudentResults;
