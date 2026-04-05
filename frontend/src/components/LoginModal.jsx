import React, { useState } from "react";
import toast from "react-hot-toast";

const LoginModal = ({ role, onClose, onLoginSuccess }) => {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://redesign-and-development-of-an-advanced.onrender.com/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId, password, role }),
      });

      const data = await response.json();

      if (data.success) {
        // Cleaning the greeting message to extract just the name
        const name = data.message
          ? data.message.replace("Welcome ", "")
          : "User";

        // SUCCESS: Passing role, name, AND the userId (Roll No) to App.jsx
        onLoginSuccess(role, name, userId);

        toast.success(`Access Granted: ${name}`);
        onClose();
      } else {
        toast.error(data.message || "Invalid Credentials");
      }
    } catch (err) {
      toast.error("Database Connection Failed");
      console.error("Login Error:", err);
    }
  };

  return (
    <div className="fixed inset-0 bg-slate-900/80 backdrop-blur-md flex items-center justify-center z-[100] p-6">
      <div className="bg-white w-full max-w-md rounded-3xl shadow-2xl overflow-hidden animate-in zoom-in duration-300">
        <div
          className={`p-8 text-white ${role === "faculty" ? "bg-[#003366]" : "bg-blue-600"}`}
        >
          <h2 className="text-2xl font-black uppercase tracking-tight">
            {role} Portal Access
          </h2>
          <p className="text-white/60 text-[10px] font-bold uppercase tracking-widest mt-1">
            K.R. Mangalam University
          </p>
        </div>

        <form onSubmit={handleSubmit} className="p-8 space-y-5">
          <div>
            <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">
              University ID / Roll No
            </label>
            <input
              type="text"
              placeholder="Enter your ID"
              className="w-full p-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">
              Security Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full p-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-4 rounded-xl bg-slate-900 text-white font-black uppercase tracking-widest shadow-lg hover:bg-black transition-all active:scale-95"
          >
            Authorize Login
          </button>
          <button
            type="button"
            onClick={onClose}
            className="w-full py-2 text-slate-400 font-bold text-xs uppercase tracking-widest hover:text-slate-600"
          >
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginModal;
