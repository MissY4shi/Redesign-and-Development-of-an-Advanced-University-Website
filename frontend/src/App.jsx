import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import NoticeBoard from "./components/NoticeBoard";
import EventBoard from "./components/EventBoard";
import AdminNoticeForm from "./components/AdminNoticeForm";
import AdminEventForm from "./components/AdminEventForm";
import AdminResultForm from "./components/AdminResultForm";
import LoginModal from "./components/LoginModal";
import StudentResults from "./components/StudentResults";
import AdmissionsForm from "./components/AdmissionsForm";
import { Toaster } from "react-hot-toast";

function App() {
  const [user, setUser] = useState(null);
  const [userData, setUserData] = useState({ name: "", rollNo: "" });
  const [showLogin, setShowLogin] = useState(false);
  const [showAdmissions, setShowAdmissions] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [loginRole, setLoginRole] = useState("student");
  const [refreshNotices, setRefreshNotices] = useState(0);

  useEffect(() => {
    const savedRole = localStorage.getItem("krmu_role");
    const savedName = localStorage.getItem("krmu_name");
    const savedRoll = localStorage.getItem("krmu_rollNo");
    if (savedRole) {
      setUser(savedRole);
      setUserData({ name: savedName, rollNo: savedRoll });
    }
  }, []);

  const triggerRefresh = () => setRefreshNotices((prev) => prev + 1);

  return (
    <div className="min-h-screen bg-[#f8fafc] font-sans">
      <Toaster position="top-right" reverseOrder={false} />

      <Navbar
        user={user}
        onLoginClick={(role) => {
          setLoginRole(role);
          setShowLogin(true);
        }}
        onLogout={() => {
          localStorage.clear();
          setUser(null);
          setUserData({ name: "", rollNo: "" });
          setShowResults(false);
        }}
        onApplyClick={() => setShowAdmissions(true)}
      />

      <Hero
        user={user}
        userData={userData}
        onApplyClick={() => setShowAdmissions(true)}
        onViewResults={() => setShowResults(true)}
      />

      {showLogin && (
        <LoginModal
          role={loginRole}
          onClose={() => setShowLogin(false)}
          onLoginSuccess={(role, name, id) => {
            setUser(role);
            setUserData({ name, rollNo: id });
            localStorage.setItem("krmu_role", role);
            localStorage.setItem("krmu_name", name);
            localStorage.setItem("krmu_rollNo", id);
            setShowLogin(false);
          }}
        />
      )}

      {showAdmissions && (
        <AdmissionsForm onClose={() => setShowAdmissions(false)} />
      )}

      {user === "faculty" && (
        <div
          id="admin-dashboard"
          className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 my-10 animate-in fade-in slide-in-from-top-4 duration-500"
        >
          <AdminNoticeForm onNoticePosted={triggerRefresh} />
          <AdminEventForm onEventPosted={triggerRefresh} />
          <AdminResultForm />
        </div>
      )}

      {/* FIXED: Passing rollNo AND studentName props */}
      {!user && <Stats />}
      {user === "student" && showResults && (
        <StudentResults rollNo={userData.rollNo} studentName={userData.name} />
      )}

      <div id="notice-section">
        <NoticeBoard user={user} refreshTrigger={refreshNotices} />
      </div>
      <div id="events-section">
        <EventBoard user={user} refreshTrigger={refreshNotices} />
      </div>

      <footer className="bg-slate-900 text-slate-500 py-12 text-center text-xs uppercase tracking-[0.3em] font-bold">
        © 2026 K.R. Mangalam University • Internal Academic Portal
      </footer>
    </div>
  );
}

export default App;
