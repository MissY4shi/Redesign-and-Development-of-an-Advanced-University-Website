import React from "react";

const Navbar = ({ user, onLoginClick, onLogout, onApplyClick }) => {
  // Added prop here
  return (
    <nav className="bg-[#003366] text-white p-4 shadow-xl sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-white rounded-md flex items-center justify-center text-[#003366] font-black text-2xl shadow-md">
            KRM
          </div>
          <h1 className="text-xl font-bold uppercase tracking-wider">
            K.R. Mangalam University
          </h1>
        </div>

        <ul className="hidden md:flex space-x-8 font-semibold uppercase text-sm tracking-wide items-center">
          <li>
            <a
              href="#notice-section"
              className="hover:text-orange-400 transition-all"
            >
              Notices
            </a>
          </li>
          <li>
            <a
              href="#events-section"
              className="hover:text-orange-400 transition-all"
            >
              Events
            </a>
          </li>

          <li className="group relative cursor-pointer flex items-center h-full py-4">
            <span className="text-blue-200 group-hover:text-white transition-colors flex items-center">
              {user ? `Logged in as ${user.toUpperCase()}` : "PORTAL LOGIN ▾"}
            </span>

            <div
              className="absolute top-full left-1/2 -translate-x-1/2 mt-0 w-52 bg-white text-slate-800 rounded-xl shadow-2xl py-2 border border-slate-100 overflow-hidden z-[60] 
              opacity-0 translate-y-4 pointer-events-none 
              group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto 
              transition-all duration-300 ease-out"
            >
              {!user ? (
                <>
                  <button
                    onClick={() => onLoginClick("student")}
                    className="w-full text-center px-4 py-4 hover:bg-blue-50 transition-colors text-xs font-bold uppercase tracking-widest border-b border-slate-100 text-slate-600"
                  >
                    Student Login
                  </button>
                  <button
                    onClick={() => onLoginClick("faculty")}
                    className="w-full text-center px-4 py-4 hover:bg-blue-50 transition-colors text-xs font-bold uppercase tracking-widest text-blue-800"
                  >
                    Faculty Login
                  </button>
                </>
              ) : (
                <button
                  onClick={onLogout}
                  className="w-full text-center px-4 py-4 bg-red-50 text-red-600 hover:bg-red-100 font-bold uppercase text-[10px] tracking-widest transition-colors"
                >
                  Logout Session
                </button>
              )}
            </div>
          </li>

          {!user && (
            <li className="flex items-center">
              <button
                onClick={onApplyClick} // NO ALERT: Triggering form instead
                className="bg-orange-500 hover:bg-orange-600 px-6 py-2 rounded-full text-white transition-all active:scale-95 shadow-lg font-bold"
              >
                Apply Now
              </button>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
