import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

// Components
import TransportDashboard from "./components/TransportDashboard";
import DriverDirectory from "./components/DriverDirectory";
import UserProfile from "./components/UserProfile";
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
import Departments from "./components/Departments";
import Academics from "./components/Academics";
import StudentServices from "./components/StudentServices";
import Contact from "./components/Contact";
import { Toaster } from "react-hot-toast";

function App() {
  const [user, setUser] = useState(null);
  const [userData, setUserData] = useState({ name: "", rollNo: "" });
  const [showLogin, setShowLogin] = useState(false);
  const [showAdmissions, setShowAdmissions] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [loginRole, setLoginRole] = useState("student");
  const [refreshNotices, setRefreshNotices] = useState(0);

  // This is what causes the "Ghost Login" (Persistent Session)
  useEffect(() => {
    const savedRole = localStorage.getItem("krmu_role");
    const savedName = localStorage.getItem("krmu_name");
    const savedRoll = localStorage.getItem("krmu_rollNo");
    if (savedRole) {
      setUser(savedRole);
      setUserData({ name: savedName || "", rollNo: savedRoll || "" });
    }
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    setUser(null);
    setUserData({ name: "", rollNo: "" });
    setShowResults(false);
  };

  const triggerRefresh = () => setRefreshNotices((prev) => prev + 1);

  return (
    <div className="min-h-screen bg-[#f8fafc] font-sans pt-20">
      <Toaster position="top-right" reverseOrder={false} />

      <Navbar
        user={user}
        onLogout={handleLogout}
        setShowLogin={setShowLogin}
        setLoginRole={setLoginRole}
      />

      <Routes>
        <Route path="/transport" element={<TransportDashboard />} />
        <Route path="/drivers" element={<DriverDirectory />} />
        <Route path="/services" element={<StudentServices user={user} />} />
        <Route
          path="/profile"
          element={<UserProfile user={user} userData={userData} />}
        />

        <Route
          path="/"
          element={
            <>
              <Hero
                user={user}
                userData={userData}
                onApplyClick={() => setShowAdmissions(true)}
                onViewResults={() => setShowResults(true)}
              />
              {!user && <Stats />}
              <div id="notice-section">
                <NoticeBoard user={user} refreshTrigger={refreshNotices} />
              </div>
              <div id="events-section">
                <EventBoard user={user} refreshTrigger={refreshNotices} />
              </div>
            </>
          }
        />

        <Route path="/academics" element={<Academics />} />
        <Route path="/departments" element={<Departments />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/admissions"
          element={<AdmissionsForm onClose={() => window.history.back()} />}
        />
        <Route
          path="/notices"
          element={<NoticeBoard user={user} refreshTrigger={refreshNotices} />}
        />
        <Route
          path="/events"
          element={<EventBoard user={user} refreshTrigger={refreshNotices} />}
        />

        <Route
          path="/results"
          element={
            user === "student" ? (
              <StudentResults
                rollNo={userData.rollNo}
                studentName={userData.name}
              />
            ) : (
              <div className="text-center p-12 text-red-500 font-bold text-xl">
                Please log in as a student to view results.
              </div>
            )
          }
        />

        <Route
          path="/admin"
          element={
            user === "faculty" ? (
              <div
                id="admin-dashboard"
                className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 my-10 animate-in fade-in slide-in-from-top-4 duration-500"
              >
                <AdminNoticeForm onNoticePosted={triggerRefresh} />
                <AdminEventForm onEventPosted={triggerRefresh} />
                <AdminResultForm />
              </div>
            ) : (
              <div className="text-center p-12 text-red-500 font-bold text-xl">
                Access Denied. Faculty only.
              </div>
            )
          }
        />
      </Routes>

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

      <footer className="bg-slate-900 text-slate-500 py-12 mt-auto text-center text-xs uppercase tracking-[0.3em] font-bold">
        © 2026 K.R. Mangalam University • Internal Academic Portal
      </footer>
    </div>
  );
}

export default App;
