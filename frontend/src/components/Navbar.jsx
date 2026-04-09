import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ user, onLogout, setShowLogin, setLoginRole }) => {
  return (
    <nav className="bg-[#113b69] text-white px-8 py-4 w-full flex justify-between items-center shadow-md fixed top-0 z-50">
      {/* Left Side: Logo and Title */}
      <div className="flex items-center space-x-3">
        <div className="bg-white text-blue-900 font-extrabold p-1 rounded w-10 h-10 flex items-center justify-center text-sm">
          KRM
        </div>
        <Link to="/" className="font-bold text-lg tracking-wide uppercase">
          K.R. Mangalam University
        </Link>
      </div>

      {/* Right Side: Links and Buttons */}
      <div className="hidden md:flex items-center space-x-6 text-sm font-semibold tracking-wide">
        {/* Phase 2 Links */}
        <Link
          to="/academics"
          className="hover:text-orange-400 transition-colors"
        >
          ACADEMICS
        </Link>
        <Link
          to="/departments"
          className="hover:text-orange-400 transition-colors"
        >
          DEPARTMENTS
        </Link>
        <Link
          to="/services"
          className="hover:text-orange-400 transition-colors"
        >
          SERVICES
        </Link>

        {/* Original Links */}
        <Link to="/notices" className="hover:text-orange-400 transition-colors">
          NOTICES
        </Link>
        <Link to="/events" className="hover:text-orange-400 transition-colors">
          EVENTS
        </Link>
        <Link to="/contact" className="hover:text-orange-400 transition-colors">
          CONTACT
        </Link>

        {/* Auth System */}
        {user ? (
          <div className="flex items-center space-x-4">
            <Link
              to="/profile"
              className="text-blue-200 hover:text-white transition-colors"
            >
              MY PROFILE
            </Link>
            {user === "faculty" && (
              <Link to="/admin" className="text-green-400 hover:text-green-300">
                ADMIN PANEL
              </Link>
            )}
            {user === "student" && (
              <Link
                to="/results"
                className="text-orange-400 hover:text-orange-300"
              >
                MY RESULTS
              </Link>
            )}
            <button
              onClick={onLogout}
              className="hover:text-red-400 transition-colors pl-4 border-l border-slate-500"
            >
              LOGOUT
            </button>
          </div>
        ) : (
          <div className="flex items-center space-x-4 text-xs">
            <button
              onClick={() => {
                setLoginRole("student");
                setShowLogin(true);
              }}
              className="hover:text-orange-400 transition-colors border-r border-slate-500 pr-4"
            >
              STUDENT LOGIN
            </button>
            <button
              onClick={() => {
                setLoginRole("faculty");
                setShowLogin(true);
              }}
              className="hover:text-green-400 transition-colors"
            >
              FACULTY LOGIN
            </button>
          </div>
        )}

        {/* Apply Now Button */}
        <Link
          to="/admissions"
          className="bg-[#f97316] hover:bg-[#ea580c] text-white px-6 py-2 rounded-full transition-colors shadow-sm"
        >
          Apply Now
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
