import React, { useState } from "react";

const AdmissionsForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "B.Tech CSE",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:5000/api/admissions", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    if (res.ok) setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 bg-slate-900/90 backdrop-blur-sm flex items-center justify-center z-[100] p-4">
      <div className="bg-white w-full max-w-lg rounded-3xl shadow-2xl overflow-hidden animate-in zoom-in duration-300">
        <div className="p-8 bg-orange-500 text-white">
          <h2 className="text-2xl font-black uppercase tracking-tight">
            Admissions 2026
          </h2>
          <p className="text-orange-100 text-[10px] font-bold uppercase tracking-widest mt-1">
            K.R. Mangalam University Application
          </p>
        </div>

        {submitted ? (
          <div className="p-12 text-center">
            <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl">
              ✓
            </div>
            <h3 className="text-xl font-bold text-slate-800">
              Application Received!
            </h3>
            <p className="text-slate-500 mt-2">
              Our admissions cell will contact you shortly.
            </p>
            <button
              onClick={onClose}
              className="mt-8 bg-slate-900 text-white px-8 py-3 rounded-xl font-bold"
            >
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-8 space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-4 rounded-xl border border-slate-200 outline-none focus:ring-2 focus:ring-orange-500"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              required
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full p-4 rounded-xl border border-slate-200 outline-none focus:ring-2 focus:ring-orange-500"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              required
            />
            <input
              type="text"
              placeholder="Phone Number"
              className="w-full p-4 rounded-xl border border-slate-200 outline-none focus:ring-2 focus:ring-orange-500"
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
              required
            />
            <select
              className="w-full p-4 rounded-xl border border-slate-200 outline-none bg-white font-bold text-slate-600"
              value={formData.course}
              onChange={(e) =>
                setFormData({ ...formData, course: e.target.value })
              }
            >
              <option>B.Tech CSE</option>
              <option>B.Tech Mechanical</option>
              <option>B.Tech AI & ML</option>
            </select>
            <div className="flex gap-3 pt-4">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 py-4 font-bold text-slate-400 uppercase text-xs"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex-[2] bg-orange-500 text-white font-black py-4 rounded-xl uppercase tracking-widest shadow-lg"
              >
                Submit Application
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default AdmissionsForm;
