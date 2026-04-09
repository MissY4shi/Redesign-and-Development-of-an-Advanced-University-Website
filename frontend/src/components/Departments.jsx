import React from "react";
import { useNavigate } from "react-router-dom";

const Departments = () => {
  const navigate = useNavigate();

  const departments = [
    {
      name: "Computer Science & Engineering",
      head: "Dr. Anita Sharma",
      programs: "B.Tech, M.Tech, Ph.D.",
    },
    {
      name: "Mechanical Engineering",
      head: "Dr. Rajiv Singh",
      programs: "B.Tech, Ph.D.",
    },
    {
      name: "Electronics & Communication",
      head: "Dr. Sunita Verma",
      programs: "B.Tech, M.Tech",
    },
    {
      name: "Civil Engineering",
      head: "Dr. Vikram Patel",
      programs: "B.Tech",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto py-16 px-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <h1 className="text-4xl font-black text-[#113b69] mb-10">
        Academic Departments
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {departments.map((dept, index) => (
          <div
            key={index}
            className="bg-[#eaeef2] p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
          >
            <h3 className="text-2xl font-bold text-slate-800 mb-4">
              {dept.name}
            </h3>

            <div className="space-y-2 text-slate-600 mb-6">
              <p>
                <span className="font-bold text-slate-700">
                  Head of Department:
                </span>{" "}
                {dept.head}
              </p>
              <p>
                <span className="font-bold text-slate-700">
                  Programs Offered:
                </span>{" "}
                {dept.programs}
              </p>
            </div>

            {/* Now functionally routes to the Academics Overview page */}
            <button
              onClick={() => navigate("/academics")}
              className="text-blue-600 font-semibold hover:text-blue-800 transition-colors flex items-center group"
            >
              View Faculty & Syllabus
              <span className="ml-2 group-hover:translate-x-1 transition-transform">
                →
              </span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Departments;
